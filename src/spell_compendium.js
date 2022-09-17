function spellCard(spellData) {
	const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
	card.className = 'spell';
	
	const spellName = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	spellName.className = 'spellname';
	spellName.colSpan = 2;
	spellName.textContent = spellData.name;
	
	const tier = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	tier.className = 'spelltier';
	tier.colSpan = 2;
	tier.textContent = `Tier ${spellData.tier}`;
	
	const tagsRow = cardBody.appendChild(document.createElement('tr'));
	const tagsH = tagsRow.appendChild(document.createElement('td'));
	const tagsD = tagsRow.appendChild(document.createElement('td'));
	tagsH.className = 'spellheaders';
	tagsD.className = 'spelltags';
	tagsH.textContent = 'Tags:';
	tagsD.textContent = spellData.tags.join(', ');
	
	const costRow = cardBody.appendChild(document.createElement('tr'));
	const costH = costRow.appendChild(document.createElement('td'));
	const costD = costRow.appendChild(document.createElement('td'));
	costH.className = 'spellheaders';
	costD.className = 'spelldata';
	costH.textContent = 'Cost:';
	costD.textContent = spellData.cost;
	
	const rangeRow = cardBody.appendChild(document.createElement('tr'));
	const rangeH = rangeRow.appendChild(document.createElement('td'));
	const rangeD = rangeRow.appendChild(document.createElement('td'));
	rangeH.className = 'spellheaders';
	rangeD.className = 'spelldata';
	rangeH.textContent = 'Range:';
	rangeD.textContent = spellData.range;
	
	const durationRow = cardBody.appendChild(document.createElement('tr'));
	const durationH = durationRow.appendChild(document.createElement('td'));
	const durationD = durationRow.appendChild(document.createElement('td'));
	durationH.className = 'spellheaders';
	durationD.className = 'spelldata';
	durationH.textContent = 'Duration:';
	durationD.textContent = spellData.duration;
	
	const desc = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	desc.colSpan = 2;
	desc.innerHTML = spellData.desc;
	
	const empowerRow = cardBody.appendChild(document.createElement('tr'));
	const empowerH = empowerRow.appendChild(document.createElement('td'));
	const empowerD = empowerRow.appendChild(document.createElement('td'));
	empowerH.className = 'spellheaders';
	empowerD.className = 'spelldesc';
	empowerH.textContent = 'Empower:';
	empowerD.textContent = spellData.empower;
	
	return card;
}

function spellBrief(spellData) {
    const brief = document.createElement('tr');
    brief.id = `spell_${spellData.name.replaceAll(' ', '_')}`;
    
    [
        spellData.name,
        spellData.tier,
        spellData.range,
        spellData.duration,
        spellData.tags.join(', ')
    ].forEach(data => {
        const td = brief.appendChild(document.createElement('td'));
        td.className = 'spelldata';
        td.textContent = data;
    });
    
    return brief;
}

const sacred_shard = {
	'name': 'Sacred Shard',
	'tier': 1,
	'tags': ['Conjuration', 'Physical', 'Radiant', 'Holy'],
	'cost': '2 AP',
	'range': '60 feet',
	'duration': '1 minute',
	'desc':
		'A longsword-sized shard of holy metal descends from the sky onto a target point in range. If a creature is occupying the area, it must make a Dexterity saving throw or take 1d8 slashing and 1d8 radiant damage.<br><br>'+
		'The shard can be picked up and wielded by you as a weapon. It is treated as a longsword that deals an additional 1d4 radiant damage on hit. No other creature can move the shard.',
	'empower': 'The shard gains a bonus to its attack and damage rolls equal to half your proficiency modifier, rounded down.'
};

const spell_database = [
    sacred_shard,
    {"name":"Constellation Gaze","tier":1,"tags":["Transmutation","Eldritch","Summoning","Radiant","Psychic Concentration"],"cost":"2 AP","range":"Self","duration":"1 minute ","desc":"Your eyes become portals that welcome stellar beings. You are blinded while the spell remains active, but you can precisely sense the presence of creatures within 60 feet. Once on each of your turns, you can spend 1 AP to fix your gaze upon a creature, who must succeed on an Intuition saving throw or take 1d6 radiant damage and be frightened of you until the start of your next turn.","empower":"Creatures remain frightened as long as they can see you. They can repeat the saving throw at the end of each of their turns to end the effect early. A creature that is frightened and targeted again takes an additional 1d6 psychic damage."},
    {"name":"Shadow Thread","tier":1,"tags":["Conjuration","Spirit","Shadow","Control","Concentration"],"cost":"2 AP","range":"60 feet","duration":"1 minute","desc":"Pitch-black thread winds around a target creature in range that you can see, who must make a Dexterity saving throw. On a failure, they become bound (can't use AP to attack or cast non-Still spells) for the duration.<br><br>The spell ends automatically if the creature moves out of range. The creature can spend 2 AP to make a Strength saving throw, breaking free on a success.","empower":"The spell no longer ends automatically when the creature moves out of range. AP cost to attempt a save increases to 3."},
    {"name":"Spirit Artery","tier":1,"tags":["Conjuration","Spirit","Healing"],"cost":"1 AP","range":"Self (30 foot radius)","duration":"Until the end of next turn","desc":"Spirit-filled winds surround you, opening the spirits of all creatures you choose within range. Each affected creature restores 1 hit point for each AP they spend on their next turn.","empower":"Removes the AP cost on this spell."},
    {"name":"Flame Blossom","tier":2,"tags":["Evocation","Fire","Summoning","Plant"],"cost":"2 AP","range":"60 feet","duration":"1 hour","desc":"You summon a seed of the great Flame Oak, attached to a creature, object, or point within range.  The seed sheds dim light in a 15 foot radius and lasts for 1 hour, at which point it vanishes.  At any point, you may spend 1 AP to cause all seeds you have summoned to violently detonate.  Creatures within 20 feet of the seed must make a Dexterity saving throw.  Targets take 4d6 fire damage on a failure, or half damage on a success.  Creatures within the area of multiple detonations only take damage from one.","empower":"You summon an additional seed."}
];

const tag_list = [];
const compendiumLeft = document.querySelector('#compendium_left');
spell_database.forEach(spell => spell.tags.forEach(tag => {
    if (!tag_list.includes(tag)) tag_list.push(tag);
}));

const tag_select = new Set();
const tag_filter = new Set();
const tier_select = new Set();
const tier_filter = new Set();

tag_list.forEach(tag => {
    const div = compendiumLeft.appendChild(document.createElement('button'));
    div.style.display = 'block';
    div.style.width = '100%';
    div.textContent = tag;
    div.id = `tag_${tag.replaceAll(' ', '_')}`;
    div.className = 'selector';
    div.value = 0;
    div.onclick = function() {
        const S = parseInt(div.value);
        switch (S) {
            case 0:
                div.value = S+1;
                tag_select.add(tag);
                break;
            case 1:
                div.value = S+1;
                tag_select.delete(tag);
                tag_filter.add(tag);
                break;
            case 2:
                div.value = 0;
                tag_filter.delete(tag);
                break;
        }
        generate_brief_spell_table(spell_database, tag_select, tag_filter, tier_select, tier_filter);
    }
});
for (var i = 1; i <= 9; i++) {
    const tier_button = document.querySelector(`#tier${i}`);
    tier_button.dataset.i = i;
    const tier = i;
    tier_button.onclick = function() {
        const S = parseInt(tier_button.value);
        switch (S) {
            case 0:
                tier_button.value = S+1;
                tier_select.add(tier);
                break;
            case 1:
                tier_button.value = S+1;
                tier_select.delete(tier);
                tier_filter.add(tier);
                break;
            case 2:
                tier_button.value = 0;
                tier_filter.delete(tier);
                break;
        }
        generate_brief_spell_table(spell_database, tag_select, tag_filter, tier_select, tier_filter);
    }
}

const CC = document.querySelector('#div_compendium');
CC.appendChild(spellCard(sacred_shard));

function generate_brief_spell_table(spell_database, tag_select, tag_filter, tier_select, tier_filter) {
    const oldTable = document.querySelector('#spelltable');
    const newTable = oldTable.cloneNode(false);
    console.log(tag_select);
    console.log(tag_filter);
    console.log(tier_select);
    console.log(tier_filter);

    spell_database.forEach(spell => {
        if (tag_select.size > 0 && !spell.tags.some(tag => tag_select.has(tag))) return;
        if (tier_select.size > 0 && !tier_select.has(spell.tier)) return;
        if (spell.tags.some(tag => tag_filter.has(tag))) return;
        if (tier_filter.has(spell.tier)) return;
        newTable.appendChild(spellBrief(spell));
    });

    oldTable.parentNode.replaceChild(newTable, oldTable);
}

generate_brief_spell_table(spell_database, tag_select, tag_filter, tier_select, tier_filter);
