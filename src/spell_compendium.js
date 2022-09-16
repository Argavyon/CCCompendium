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

document.querySelector('#div_compendium').appendChild(spellCard(sacred_shard));