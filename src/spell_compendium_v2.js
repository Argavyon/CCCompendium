import { app, memo, h as makeHTML, } from 'https://cdn.jsdelivr.net/npm/hyperapp/+esm';
import { button, div, text, } from 'https://cdn.jsdelivr.net/npm/@hyperapp/html@2.0.0/+esm';

import Immutable from 'https://cdn.jsdelivr.net/npm/immutable@4.3/+esm';

import './polyfills/Iterator.js';
import './polyfills/Set.js';

import { download } from './utils/download.js';
import * as Spells from './utils/indexSpellDB.js';

console.group('Indices for the spell database');
Object.entries(Spells.SpellIndex).forEach(([key, value]) => console.debug(`${key}:`, value));
console.groupEnd();

console.group('Download element function');
console.debug(download);
console.groupEnd();

const Controller = {
    Selectors: {
        click(state, clickedCategory) {
            return state.withMutations((mutableState) => {
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
        view(selectorsState, name, title) {
            return div({ id: `SC-selectors-${name.toLowerCase()}` }, [
                div({}, [
                    button({ class: 'selector_category', onclick: [Controller.Selectors.click, name] }, text(title)),
                    !selectorsState.getIn(['Categories', name, 'collapsed'])
                    && memo((categoryState) =>
                        div({}, Spells.TagList[name].map((tag, idx) =>
                            Controller.Selectors.Tags.view(categoryState, name, tag, idx)
                        )),
                        selectorsState.get(name)
                    ),
                ]),
            ])
        },
        Tags: {
            view(categoryState, category, name, idx) {
                return button({
                    class: `selector${categoryState.getIn([idx, 'selected']) ? ' selected' : ''}`,
                    onclick: [this.click, [category, name, idx]],
                }, [text(category === 'Tier' ? `Tier ${name}` : `${name}`)]
                );
            },
            click(state, [category, name, idx]) {
                return state.withMutations((mutableState) => {
                    const selected = !mutableState.getIn(['UIControl', 'Selectors', category, name]);
                    mutableState.setIn(['UIControl', 'Selectors', category, name], selected);
                    mutableState.setIn(['UIState', 'Selectors', category, idx, 'selected'], selected);

                    // Calculate spell table
                    const start = performance.now();

                    const filterBy = [];
                    for (const category of ['Tier', 'School', 'Tags', 'Forbidden']) {
                        if (mutableState.getIn(['UIControl', 'Selectors', category]).includes(true)) {
                            filterBy.push(category);
                        }
                    }

                    let newSpellTable;
                    if (filterBy.length > 0) {
                        let newSpellSet;
                        filterBy.forEach((category, idx) => {
                            const indexName = category.toLowerCase();
                            const activeSelectors = mutableState.getIn(['UIControl', 'Selectors', category]).filter((v) => v).keySeq();
                            const filterSet = activeSelectors.map((name) => Spells.SpellIndex[indexName][name]).reduce((prev, curr) => prev.union(curr));

                            if (idx === 0) {
                                newSpellSet = filterSet;
                            } else {
                                newSpellSet = newSpellSet.intersection(filterSet);
                            }
                        });
                        newSpellTable = [...newSpellSet];
                    } else {
                        newSpellTable = Spells.SpellList;
                    }

                    mutableState.setIn(['UIState', 'SpellTable'], newSpellTable);

                    const end = performance.now();
                    console.debug(`Calculating Spelltable v2: ${end - start}ms`);
                });
            },
        },
    },
};

const CompendiumState = Immutable.fromJS({
    UIControl: {
        Selectors: {
            ExpandedCategory: '',
            Tier: Object.fromEntries(Spells.TagList.Tier.map((name) => [name, false])),
            School: Object.fromEntries(Spells.TagList.School.map((name) => [name, false])),
            Tags: Object.fromEntries(Spells.TagList.Tags.map((name) => [name, false])),
            Forbidden: Object.fromEntries(Spells.TagList.Forbidden.map((name) => [name, false])),
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
            Tier: Spells.TagList.Tier.map(() => ({ selected: false })),
            School: Spells.TagList.School.map(() => ({ selected: false })),
            Tags: Spells.TagList.Tags.map(() => ({ selected: false })),
            Forbidden: Spells.TagList.Forbidden.map(() => ({ selected: false })),
        },
    },
}).setIn(['UIState', 'SpellTable'], Spells.SpellList);

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

function DispatchInitializer(dispatch, before, after) {
    return function CustomDispatch(action, payload) {
        if (Array.isArray(action) && typeof action[0] !== 'function') {
            action = [before(action[0], payload), ...action.slice(1)]
        } else if (!Array.isArray(action) && typeof action !== 'function') {
            action = before(action, payload);
        }

        dispatch(action, payload);

        if (Array.isArray(action) && typeof action[0] !== 'function') {
            action = [after(action[0], payload), ...action.slice(1)]
        } else if (!Array.isArray(action) && typeof action !== 'function') {
            action = after(action, payload);
        }

        return action;
    }
}

const dispatch = app({
    init: CompendiumState,
    dispatch: (dispatch) => DispatchInitializer(
        dispatch,
        (state, payload) => state,
        (state, payload) => state
    ),
    view: (state) => div({ id: 'SC-content', class: 'flexbox' }, [
        memo(() => makeHTML('style', {}, text(style))),
        memo((selectorsState) =>
            div({ id: 'SC-selectors' }, [
                Controller.Selectors.view(selectorsState, 'Tier', 'SPELL TIERS'),
                Controller.Selectors.view(selectorsState, 'School', 'SPELL SCHOOLS'),
                Controller.Selectors.view(selectorsState, 'Tags', 'SPELL TAGS'),
                Controller.Selectors.view(selectorsState, 'Forbidden', 'FORBIDDEN SPELLS'),
            ]),
            state.getIn(['UIState', 'Selectors'])
        ),
        memo((SpellTable) =>
            div({ id: 'SC-spell_table', class: 'spell_table' },
                SpellTable.map((spell) =>
                    div({ key: `${spell.tier}-${spell.name}`, class: 'spell_brief' }, [
                        div({ class: 'spell_name' }, text(spell.name)),
                        div({ class: 'spell_tier' }, text(`Tier ${spell.tier}`)),
                        div({ class: 'spell_range' }, text(spell.range)),
                        div({ class: 'spell_duration' }, text(spell.duration)),
                        div({ class: 'spell_tags' }, spell.tags.map((tag) => div({ class: 'spell_tag' }, text(tag)))),
                    ])
                )
            ),
            state.getIn(['UIState', 'SpellTable'])
        ),
    ]),
    node: document.getElementById('spell_compendium_2-content'),
});
