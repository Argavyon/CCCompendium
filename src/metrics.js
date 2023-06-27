function spell_tag_tiers() {
    const tag_list = {};
    const f_tag_list = {};
    const functional_tags = {
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
    };
    const tiers = [1,2,3,4,5,6,7,8,9];
    SpellDatabase.forEach(spell => spell.tags.forEach(tag => {
        if (Object.keys(functional_tags).some(f_tag => tag.includes(f_tag))) {
            if (!f_tag_list[tag]) f_tag_list[tag] = [0,0,0,0,0,0,0,0,0];
            f_tag_list[tag][spell.tier-1] += 1;
        } else {
            if (!tag_list[tag]) tag_list[tag] = [0,0,0,0,0,0,0,0,0];
            tag_list[tag][spell.tier-1] += 1;
        }
    }));

    const table = document.querySelector('#metrics_spell_tag_tiers');
    table.appendChild(document.createElement('tr')).innerHTML = `<td></td>${tiers.map(tier => `<th>Tier ${tier}</th>`).join('')}`;
    Object.entries(tag_list).forEach(([tag, counts]) => table.appendChild(document.createElement('tr')).innerHTML = `<th>${tag}</th>${tiers.map(tier => `<td>${counts[tier-1]}</td>`).join('')}`);
    Object.entries(f_tag_list).forEach(([f_tag, counts]) => table.appendChild(document.createElement('tr')).innerHTML = `<th> <span class='fTag'>${f_tag}</span></th>${tiers.map(tier => `<td>${counts[tier-1]}</td>`).join('')}`);
}

function main() {
    spell_tag_tiers();
}

main();