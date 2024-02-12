import { app, memo, h as makeHTML, } from 'https://cdn.jsdelivr.net/npm/hyperapp/+esm';
import { button, div, text, } from 'https://cdn.jsdelivr.net/npm/@hyperapp/html@2.0.0/+esm';

import Immutable from 'https://cdn.jsdelivr.net/npm/immutable@4.3/+esm';

import './polyfills/Iterator.js';
import './polyfills/Set.js';

import { download } from './utils/download.js';
import * as Spells from './utils/indexSpellDB.js';

console.group('Indices for the spell database');
Object.entries(Spells.spellIndex).forEach( ([key, value]) => console.debug(`${key}:`, value) );
console.groupEnd();

console.group('Download element function');
console.debug(download);
console.groupEnd();

const Controller = {
    Selectors: {
        click(state, clickedCategory) {
            return state.withMutations( (mutableState) => {
                const previouslyExpanded = mutableState.getIn(['UIControl', 'Selectors', 'ExpandedCategory']);
                mutableState.setIn(['UIControl', 'Selectors', 'ExpandedCategory'], clickedCategory === previouslyExpanded ? '' : clickedCategory);

                if (previouslyExpanded !== clickedCategory) {
                    mutableState.setIn(['UIState', 'Selectors', 'Categories', previouslyExpanded, 'collapsed'], true);
                    mutableState.setIn(['UIState', 'Selectors', 'Categories', clickedCategory, 'collapsed'], false);
                } else {
                    mutableState.setIn(['UIState', 'Selectors', 'Categories', clickedCategory, 'collapsed'], true);
                }
            });
        },
        Tags: {
            view(categoryState, category, name, idx) {
                return button({
                        class: `selector${categoryState.getIn([idx, 'selected']) ? ' selected' : ''}`,
                        onclick: [this.click, [category, name, idx]],
                    }, [ text( category === 'Tier' ? `Tier ${name}` : `${name}` ) ]
                );
            },
            click(state, [category, name, idx]) {
                return state.withMutations( (mutableState) => {
                    const selected = !mutableState.getIn(['UIControl', 'Selectors', category, name]);
                    mutableState.setIn(['UIControl', 'Selectors', category, name], selected);
                    mutableState.setIn(['UIState', 'Selectors', category, idx, 'selected'], selected);

                    // Calculate spell table
                    const filterBy = [];
                    for (const category of ['Tier', 'School', 'Tags', 'Forbidden']) {
                        if (mutableState.getIn(['UIControl', 'Selectors', category]).includes(true)) {
                            filterBy.push(category);
                        }
                    }

                    let newSpellTable;
                    if (filterBy.length > 0) {
                        let newSpellSet;
                        filterBy.forEach( (category, idx) => {
                            const indexName = category.toLowerCase();
                            const activeSelectors = [...mutableState.getIn(['UIControl', 'Selectors', category]).filter( (v) => v ).keys()];
                            const filterSet = new Set(activeSelectors.map( (name) => Spells.spellIndex[indexName][name] ).flat());
                            if (idx === 0) {
                                newSpellSet = filterSet;
                            } else {
                                newSpellSet = newSpellSet.intersection(filterSet);
                            }
                        });
                        newSpellTable = Immutable.fromJS([...newSpellSet]);
                    } else {
                        newSpellTable = Immutable.fromJS(Spells.spellList);
                    }

                    mutableState.setIn(['UIState', 'SpellTable'], newSpellTable);
                });
            },
        },
    },
};

const CompendiumState = Immutable.fromJS({
    UIControl: {
        Selectors: {
            ExpandedCategory: '',
            Tier: Object.fromEntries(Spells.tierTags.map( (name) => [name, false] )),
            School: Object.fromEntries(Spells.schoolTags.map( (name) => [name, false] )),
            Tags: Object.fromEntries(Spells.spellTags.map( (name) => [name, false] )),
            Forbidden: Object.fromEntries(Spells.forbiddenTags.map( (name) => [name, false] )),
        },
    },
    UIState: {
        Selectors: {
            Categories: {
                Tier: { collapsed: true },
                School: { collapsed: true },
                Tags: { collapsed: true },
                Forbidden: { collapsed: true }
            },
            Tier: Spells.tierTags.map( () => ({ selected: false }) ),
            School: Spells.schoolTags.map( () => ({ selected: false }) ),
            Tags: Spells.spellTags.map( () => ({ selected: false }) ),
            Forbidden: Spells.forbiddenTags.map( () => ({ selected: false }) ),
        },
        SpellTable: Spells.spellList,
    },
});

const style = `
    #SC-selectors .selector_category {
        font-weight: bold;
        width: 100%;
        padding: 6px;
    }
    #SC-selectors .selector {
        display: block;
        width: 100%;
    }
    #SC-selectors .selector.selected {
        background-color: orange;
    }

    .spell_table {
        width: 900px;
        margin-left: auto;
        margin-right: auto;

        display: grid;
        grid-template-columns: repeat(2, 2fr max-content 1fr 1fr 2fr);
        row-gap: 6px;
        column-gap: 4px;
    }
    .spell_table .spell_brief {
        padding: 2px 8px    ;
        display: grid;
        grid-column: span 5;
        grid-template-columns: subgrid;
        align-items: center;

        background-color: Ivory;
    }
    .spell_table .spell_brief .spell_name {
        font-weight: bold;
    }
    .spell_table .spell_brief .spell_tier {
        font-style: italic;
    }
    .spell_table .spell_brief .spell_range {
    }
    .spell_table .spell_brief .spell_duration {
    }
    .spell_table .spell_brief .spell_tags {
        font-weight: bold;
        font-style: italic;
    }
`;

const dispatch = app({
    init: CompendiumState,
    view: (state) => div({ id: 'SC-content', class:'flexbox' }, [
        memo( () => makeHTML('style', {}, text(style)) ),
        memo( (selectorsState) =>
            div({ id: 'SC-selectors' }, [
                div({ id: 'SC-selectors-tier' }, [
                    div({}, [
                        button({ class: 'selector_category', onclick: [Controller.Selectors.click, 'Tier'] }, text('SPELL TIERS')),
                        !selectorsState.getIn(['Categories', 'Tier', 'collapsed'])
                        && memo( (categoryState) =>
                            div({}, Spells.tierTags.map( (name, idx) =>
                                Controller.Selectors.Tags.view(categoryState, 'Tier', name, idx)
                            )),
                            selectorsState.get('Tier')
                        ),
                    ]),
                ]),
                div({ id: 'SC-selectors-school' }, [
                    div({}, [
                        button({ class: 'selector_category', onclick: [Controller.Selectors.click, 'School'] }, text('SPELL SCHOOLS')),
                        !selectorsState.getIn(['Categories', 'School', 'collapsed'])
                        && memo( (categoryState) =>
                            div({}, Spells.schoolTags.map( (name, idx) =>
                                Controller.Selectors.Tags.view(categoryState, 'School', name, idx)
                            )),
                            selectorsState.get('School')
                        ),
                    ]),
                ]),
                div({ id: 'SC-selectors-tags' }, [
                    div({}, [
                        button({ class: 'selector_category', onclick: [Controller.Selectors.click, 'Tags'] }, text('SPELL TAGS')),
                        !selectorsState.getIn(['Categories', 'Tags', 'collapsed'])
                        && memo( (categoryState) =>
                            div({}, Spells.spellTags.map( (name, idx) =>
                                Controller.Selectors.Tags.view(categoryState, 'Tags', name, idx)
                            )),
                            selectorsState.get('Tags')
                        ),
                    ])
                ]),
                div({ id: 'SC-selectors-forbidden' }, [
                    div({}, [
                        button({ class: 'selector_category', onclick: [Controller.Selectors.click, 'Forbidden'] }, text('FORBIDDEN SPELLS')),
                        !selectorsState.getIn(['Categories', 'Forbidden', 'collapsed'])
                        && memo( (categoryState) =>
                            div({}, Spells.forbiddenTags.map( (name, idx) =>
                                Controller.Selectors.Tags.view(categoryState, 'Forbidden', name, idx)
                            )),
                            selectorsState.get('Forbidden')
                        ),
                    ]),
                ]),
            ]),
            state.getIn(['UIState', 'Selectors'])
        ),
        memo( (SpellTable) =>
            div({ id: 'SC-spell_table', class: 'spell_table' },
                SpellTable.toJS().map(
                    (spell) => div({ key: `${spell.tier}-${spell.name}`, class: 'spell_brief' }, [
                        div({ class: 'spell_name' }, text(spell.name)),
                        div({ class: 'spell_tier' }, text(`Tier ${spell.tier}`)),
                        div({ class: 'spell_range' }, text(spell.range)),
                        div({ class: 'spell_duration' }, text(spell.duration)),
                        div({ class: 'spell_tags' }, spell.tags.map( (tag) => div({ class: 'spell_tag' }, text(tag)) )),
                    ])
                )
            ),
            state.getIn(['UIState', 'SpellTable'])
        ),
    ]),
    node: document.getElementById('spell_compendium_2-content'),
});
