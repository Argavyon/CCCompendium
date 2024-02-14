function makeTagDict(tags) {
    const dict = {};
    tags.forEach( (tag) => { dict[tag] = new Set(); } );
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
            index.author[spellData.author] = new Set();
        index.author[spellData.author].add(spell);

        index.tier[spellData.tier].add(spell);

        if (spellData.school) {
            index.school[spellData.school].add(spell);
        } else {
            // console.warn(`The '${spell.name}' spell is missing a spellcasting school!`);
        }

        spellData.tags.forEach( (tag) => {
            if (!(tag in index.tags))
                index.tags[tag] = new Set();
            index.tags[tag].add(spell);
        });

        if (spellData.forbidden) {
            if (!(spellData.forbidden in index.forbidden))
                index.forbidden[spellData.forbidden] = new Set();
            index.forbidden[spellData.forbidden].add(spell);
            index.school['Forbidden'].add(spell);
        }

        spellData.functional.forEach( (tag) => {
            index.functional[tag].add(spell);
        });

        if (!(spellData.cost in index.cost))
            index.cost[spellData.cost] = new Set();
        index.cost[spellData.cost].add(spell);

        if (!(spellData.range in index.range))
            index.range[spellData.range] = new Set();
        index.range[spellData.range].add(spell);

        if (!(spellData.duration in index.duration))
            index.duration[spellData.duration] = new Set();
        index.duration[spellData.duration].add(spell);
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

const start = performance.now();
const SpellIndex = spellDatabaseIndex();
const end = performance.now();
console.debug(`Indexing spells v2: ${end-start}ms`);

const SpellList = SpellDatabase;
const TagList = Object.freeze({
    Tier: [1,2,3,4,5,6,7,8,9],
    School: schoolTags,
    Functional: functionalTags,
    Effect: [],
    Tags: Object.keys(SpellIndex.tags),
    Forbidden: Object.keys(SpellIndex.forbidden),
});

export { SpellList, SpellIndex, TagList };
