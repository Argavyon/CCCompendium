function makeTagDict(tags) {
    const dict = {};
    tags.forEach( (tag) => { dict[tag] = []; } );
    return dict;
};

function spellDatabaseIndex() {
    const index = {
        author: {},
        tier: makeTagDict([1,2,3,4,5,6,7,8,9]),
        school: makeTagDict(schoolTags),
        tags: {},
        forbidden: {},
        functional: makeTagDict(Object.keys(functionalTags)),
        cost: {},
        range: {},
        duration: {},
    };

    SpellDatabase.forEach( (spell) => {
        // Process spell data
        const spellData = {
            author: spell.author,
            tier: spell.tier,
            school: null,
            forbidden: null,
            functional: [],
            tags: [],
            cost: spell.cost,
            range: spell.range,
            duration: spell.duration,
        };
        spell.tags.forEach( (tag) => {
            if (schoolTags.includes(tag)) {
                spellData.school = tag;
            } else if (tag.includes('Forbidden')) {
                spellData.forbidden = tag.match(/Forbidden \((.*)\)/)[1];
            } else if (tag in functionalTags) {
                spellData.functional.push(tag);
            } else {
                spellData.tags.push(tag);
            }
        });

        // Add it to the indices
        if (!(spellData.author in index.author))
            index.author[spellData.author] = [];
        index.author[spellData.author].push(spell);

        index.tier[spellData.tier].push(spell);

        if (spellData.school) {
            index.school[spellData.school].push(spell);
        } else {
            console.warn(`The '${spell.name}' spell is missing a spellcasting school!`);
        }

        spellData.tags.forEach( (tag) => {
            if (!(tag in index.tags))
                index.tags[tag] = [];
            index.tags[tag].push(spell);
        });

        if (spellData.forbidden) {
            if (!(spellData.forbidden in index.forbidden))
                index.forbidden[spellData.forbidden] = [];
            index.forbidden[spellData.forbidden].push(spell);
            index.school['Forbidden'].push(spell);
        }

        spellData.functional.forEach( (tag) => {
            index.functional[tag].push(spell);
        });

        if (!(spellData.cost in index.cost))
            index.cost[spellData.cost] = [];
        index.cost[spellData.cost].push(spell);

        if (!(spellData.range in index.range))
            index.range[spellData.range] = [];
        index.range[spellData.range].push(spell);

        if (!(spellData.duration in index.duration))
            index.duration[spellData.duration] = [];
        index.duration[spellData.duration].push(spell);
    });

    return index;
}

const schoolTags = ['Conjuration', 'Evocation', 'Transmutation', 'Necromancy', 'Abjuration', 'Enchantment', 'Illusion', 'Divination', 'Forbidden'];
const functionalTags = {
    Cantrip: 'When cast, this spell is treated as a tier 1 spell in all regards, including MP cost.',
    Concentration: 'You need to concentrate on this spell. Taking damage forces you to make a Constitution saving throw against DC 10 or half the damage done, whichever is higher. On a failure, the spell ends. When you cast a spell with Concentration while you are concentrating on a different spell, the first spell ends. You lose concentration if you are at 0 hit points.',
    Delayed: 'You can pay for this spell&apos;s AP cost over multiple turns. While you have at least 1 AP set towards the spell, you are concentrating on the spell.',
    Forbidden: 'You can&apos;t learn this spell normally. You need a general talent that automatically unlocks these spells for you once taken.',
    Mastery: 'If you have all the tags for this spell, reduce the MP cost of the spell by two tiers.',
    Potent: 'You can cast this spell at a higher tier for an increased effect.',
    Sign: 'This spell creates a field around you that does not move. It ends if you leave the field or cast another Sign spell.',
    Ritual: 'This spell takes too much time to cast during combat.',
    Silent: 'You do not need to speak to cast this spell.',
    Still: 'You do not need to move to cast this spell.',
    Deprecated: 'This spell is considered for removal. Please do not select this spell during playtesting.',
};

SpellDatabase.sort( (a, b) => (a.tier === b.tier ? a.name - b.name : a.tier - b.tier) );

const spellIndex = spellDatabaseIndex();
const tierTags = [1,2,3,4,5,6,7,8,9];
const spellTags = Object.keys(spellIndex.tags);
const forbiddenTags = Object.keys(spellIndex.forbidden);
const spellList = SpellDatabase;

export { spellList, spellIndex, tierTags, schoolTags, spellTags, functionalTags, forbiddenTags };