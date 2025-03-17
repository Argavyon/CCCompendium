/**
 * @typedef {object} SpellData
 * @property {string} name
 * @property {string} author
 * @property {number} tier
 * @property {string[]} tags
 * @property {string} cost
 * @property {string} range
 * @property {string} duration
 * @property {string} desc
 * @property {string} empower
 */
/**
 * @var {SpellData[]} SpellDatabase
 */

class SpellCompendium {
    static UI = {
        LeftDiv: document.getElementById('compendium_left'),
        RightDiv: document.getElementById('compendium_right'),
        SchoolList: document.getElementById('left_school_tags'),
        TagList: document.getElementById('left_regular_tags'),
        ForbiddenList: document.getElementById('left_forbidden_tags'),
    };

    static TagDescriptions = {
        Functional: {
            Cantrip: 'When cast, this spell is treated as a tier 1 spell in all regards, including MP cost.',
            Concentration: 'You need to concentrate on this spell. Taking damage forces you to make a Constitution saving throw against DC 10 or half the damage done, whichever is higher. On a failure, the spell ends. When you cast a spell with Concentration while you are concentrating on a different spell, the first spell ends. You lose concentration if you are at 0 hit points.',
            Delayed: 'You can pay for this spell\'s AP cost over multiple turns. While you have at least 1 AP set towards the spell, you are concentrating on the spell.',
            Forbidden: 'You can\'t learn this spell normally. You need a general talent that automatically unlocks these spells for you once taken.',
            Mastery: 'If you have all the tags for this spell, reduce the MP cost of the spell by two tiers.',
            Potent: 'You can cast this spell at a higher tier for an increased effect.',
            Sign: 'This spell creates a field around you that does not move. It ends if you leave the field or cast another Sign spell.',
            Ritual: 'This spell takes too much time to cast during combat.',
            Silent: 'You do not need to speak to cast this spell.',
            Still: 'You do not need to move to cast this spell.',
            Deprecated: 'This spell is considered for removal. Please do not select this spell during playtesting.',
        },
        School: {
            Conjuration: '',
            Evocation: '',
            Transmutation: '',
            Necromancy: '',
            Abjuration: '',
            Enchantment: '',
            Illusion: '',
            Divination: '',
            Forbidden: '',
        }
    };

    static TagCounts = {
        Regular: {},
        Functional: {},
        School: {},
        Forbidden: {},
    };
    static ProcessedTags = {};
    static {
        SpellDatabase.forEach( (spell) => {
            SpellCompendium.ProcessedTags[spell.name] = [];
            spell.tags.forEach( (tag) => {
                if (tag.includes('Forbidden')) {
                    SpellCompendium.TagCounts.Forbidden[tag] ??= 0;
                    SpellCompendium.TagCounts.Forbidden[tag] ++;
                    SpellCompendium.ProcessedTags[spell.name].push({ type: 'Forbidden', tag: tag.match(/Forbidden \((.+)\)/)[1] });
                } else if (tag in SpellCompendium.TagDescriptions.Functional) {
                    SpellCompendium.TagCounts.Functional[tag] ??= 0;
                    SpellCompendium.TagCounts.Functional[tag] ++;
                    SpellCompendium.ProcessedTags[spell.name].push({ type: 'Functional', tag: tag });
                } else if (tag in SpellCompendium.TagDescriptions.School) {
                    SpellCompendium.TagCounts.School[tag] ??= 0;
                    SpellCompendium.TagCounts.School[tag] ++;
                    SpellCompendium.ProcessedTags[spell.name].push({ type: 'School', tag: tag });
                } else {
                    SpellCompendium.TagCounts.Regular[tag] ??= 0;
                    SpellCompendium.TagCounts.Regular[tag] ++;
                    SpellCompendium.ProcessedTags[spell.name].push({ type: 'Regular', tag: tag });
                }
            })
        });
    }

    static tagSelection = new Set();
    static tierSelection = new Set();

    // Generate tag description for functional tags
    static tagDescription(tag, type) {
        if (type === 'Forbidden') {
            return SpellCompendium.TagDescriptions.Functional['Forbidden'];
        } else if (type === 'Functional') {
            return SpellCompendium.TagDescriptions.Functional[tag];
        } else {
            return '';
        }
    }

    static tagSpan(tag, type) {
        const span = document.createElement('span');
        const fTag = ['Functional', 'Forbidden'].includes(type);
        span.className = fTag ? 'fTag' : '';
        span.textContent = (type === 'Forbidden') ? `Forbidden (${tag})` : tag;
        span.title = SpellCompendium.tagDescription(tag, type);
        return span;
    }

    // Generate full-sized spell description
    static spellCard(spell) {
        const card = document.createElement('table');
        const cardBody = card.appendChild(document.createElement('tbody'));
        card.className = 'spell';

        const spellName = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
        spellName.className = 'spellname';
        spellName.colSpan = 2;
        spellName.innerHTML = spell.name;

        if (spell.author) {
            const author = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
            author.className = 'spelltier';
            author.colSpan = 2;
            author.innerHTML = `by ${spell.author}`;
        }

        const tier = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
        tier.className = 'spelltier';
        tier.colSpan = 2;
        tier.innerHTML = `Tier ${spell.tier}`;

        const tagsRow = cardBody.appendChild(document.createElement('tr'));
        const tagsH = tagsRow.appendChild(document.createElement('td'));
        const tagsD = tagsRow.appendChild(document.createElement('td'));
        tagsH.className = 'spellheaders';
        tagsD.className = 'spelltags';
        tagsH.textContent = 'Tags:';
        SpellCompendium.ProcessedTags[spell.name].forEach( ({ type, tag }, index) => {
            if (index > 0) {
                tagsD.appendChild(document.createTextNode(', '));
            }
            tagsD.appendChild(SpellCompendium.tagSpan(tag, type));
        });

        const costRow = cardBody.appendChild(document.createElement('tr'));
        const costH = costRow.appendChild(document.createElement('td'));
        const costD = costRow.appendChild(document.createElement('td'));
        costH.className = 'spellheaders';
        costD.className = 'spelldata';
        costH.textContent = 'Cost:';
        costD.innerHTML = spell.cost;

        const rangeRow = cardBody.appendChild(document.createElement('tr'));
        const rangeH = rangeRow.appendChild(document.createElement('td'));
        const rangeD = rangeRow.appendChild(document.createElement('td'));
        rangeH.className = 'spellheaders';
        rangeD.className = 'spelldata';
        rangeH.textContent = 'Range:';
        rangeD.innerHTML = spell.range;

        const durationRow = cardBody.appendChild(document.createElement('tr'));
        const durationH = durationRow.appendChild(document.createElement('td'));
        const durationD = durationRow.appendChild(document.createElement('td'));
        durationH.className = 'spellheaders';
        durationD.className = 'spelldata';
        durationH.textContent = 'Duration:';
        durationD.innerHTML = spell.duration;

        const desc = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
        desc.colSpan = 2;
        desc.innerHTML = spell.desc;

        if (spell.empower) {
            const empowerRow = cardBody.appendChild(document.createElement('tr'));
            const empowerH = empowerRow.appendChild(document.createElement('td'));
            const empowerD = empowerRow.appendChild(document.createElement('td'));
            empowerH.className = 'spellheaders';
            empowerD.className = 'spelldesc';
            empowerH.textContent = 'Empower:';
            empowerD.innerHTML = spell.empower;
        }

        return card;
    }

    static spellDatum(parent, text) {
        const datum = parent.appendChild(document.createElement('td'));
        datum.className = 'spelldata';
        datum.textContent = text;
    }

    // Generate spell table entry
    static spellBrief(spell) {
        const processedTags = SpellCompendium.ProcessedTags[spell.name];

        const brief = document.createElement('tr');
        brief.id = `spell_${spell.name.replaceAll(' ', '_')}`;
        brief.classList.add('spellbrief');
        processedTags.forEach( ({ type, tag }) => {
            if (type == 'Regular') {
                brief.classList.add(`tag-${tag}`);
            } else if (type == 'Forbidden') {
                brief.classList.add(`tag-${type}-${tag}`);
                brief.classList.add(`spell-Forbidden`);
            } else {
                brief.classList.add(`tag-${type}-${tag}`);
            }
        });

        SpellCompendium.spellDatum(brief, spell.name);
        SpellCompendium.spellDatum(brief, spell.tier);
        SpellCompendium.spellDatum(brief, spell.range);
        SpellCompendium.spellDatum(brief, spell.duration);

        const spellTags = brief.appendChild(document.createElement('td'));
        spellTags.className = 'spelldata';
        processedTags.forEach( ({ type, tag }, index) => {
            if (index > 0) {
                spellTags.appendChild(document.createTextNode(', '));
            }
            spellTags.appendChild(SpellCompendium.tagSpan(tag, type));
        });

        brief.addEventListener('click', function() {
            const card = SpellCompendium.spellCard(spell);
            const compendiumRight = document.getElementById('compendium_right');
            compendiumRight.replaceChild(card, compendiumRight.firstElementChild);
        });

        return brief;
    }

    // Generate spell table
    static generateSpellTable() {
        const oldTable = document.querySelector('#spelltable');
        const newTable = oldTable.cloneNode(false);

        SpellDatabase.forEach( (spell) => {
            if (SpellCompendium.tagSelection.size > 0 && !spell.tags.some( (tag) => SpellCompendium.tagSelection.has(tag) )) return;
            if (SpellCompendium.tierSelection.size > 0 && !SpellCompendium.tierSelection.has(spell.tier)) return;
            newTable.appendChild(SpellCompendium.spellBrief(spell));
        });

        oldTable.parentNode.replaceChild(newTable, oldTable);
    }

    // Download spell
    static downloadSpell() {
        const spell = document.querySelector("#compendium_right table");
        if (spell) {
            html2canvas(spell, { allowTaint: true }).then(function (canvas) {
                const link = document.createElement("a");
                document.body.appendChild(link);
                link.download = `${spell.querySelector(".spellname").textContent}.png`;
                link.href = canvas.toDataURL();
                link.target = '_blank';
                link.click();
            });
        } else {
            confirm("No spell has been selected!");
        }

    }

    static tagButtons(tags, container) {
        Object.entries(tags).sort( (a, b) => {
            if (a[1] == b[1]) {
                return (a[0] == b[0]) ? 0 : (a[0] > b[0]) ? 1 : -1;
            } else {
                return Math.sign(b[1] - a[1]);
            }
        }).forEach( ([tag, count]) => {
            const div = container.appendChild(document.createElement('button'));
            div.appendChild(document.createElement('img'));
            const text = div.appendChild(document.createElement('div'));

            text.textContent = `${tag} (${count})`;

            div.classList.add('selector');
            if (tag.includes('Forbidden')) {
                div.classList.add('tag-Forbidden');
            } else {
                div.classList.add(`tag-${tag.replaceAll(' ', '_')}`);
            }

            div.value = 0;
            div.onclick = function() {
                const S = parseInt(div.value);
                switch (S) {
                    case 0:
                        div.value = S+1;
                        SpellCompendium.tagSelection.add(tag);
                        break;
                    case 1:
                        div.value = 0;
                        SpellCompendium.tagSelection.delete(tag);
                        break;
                }
                SpellCompendium.generateSpellTable();
            }
        });
    }

    static tierButtonClickHandler(event) {
        const tier = parseInt(event.target.dataset.tier);
        const state = parseInt(event.target.value);
        const maxState = 1;
        let newState;

        // change state
        switch (event.shiftKey) {
            // case true:
            //     newState = state - 1;
            //     if (newState < 0) newState = maxState;
            //     break;
            default:
                newState = state + 1;
                if (newState > maxState) newState = 0;
                break;
        }
        event.target.value = newState;

        switch (newState) {
            case 0:
                SpellCompendium.tierSelection.delete(tier);
                break;
            case 1:
                SpellCompendium.tierSelection.add(tier);
                break;
        }
        SpellCompendium.generateSpellTable();
    }

    static render() {
        // TAGS
        SpellCompendium.tagButtons(SpellCompendium.TagCounts.School, SpellCompendium.UI.SchoolList);
        SpellCompendium.tagButtons(SpellCompendium.TagCounts.Regular, SpellCompendium.UI.TagList);
        SpellCompendium.tagButtons(SpellCompendium.TagCounts.Forbidden, SpellCompendium.UI.ForbiddenList);

        // TIERS
        for (let i = 1; i <= 9; i++) {
            const tierButton = document.querySelector(`#tier${i}`);
            tierButton.dataset.tier = i;
            tierButton.addEventListener('click', SpellCompendium.tierButtonClickHandler);
        }

        SpellCompendium.UI.RightDiv.appendChild(SpellCompendium.spellCard(SpellDatabase[0]));
        SpellCompendium.generateSpellTable();

        const downloadButton = document.createElement('button');
        downloadButton.className = 'compendium-donwload';
        downloadButton.textContent = 'SAVE (.png)';
        downloadButton.addEventListener('click', SpellCompendium.downloadSpell);
        SpellCompendium.UI.RightDiv.appendChild(downloadButton);
    }
}

SpellCompendium.render();
