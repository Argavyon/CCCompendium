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
    
    brief.onclick = function() {
        const card = spellCard(spellData);
        const CR = document.querySelector('#compendium_right');
        CR.innerHTML = '';
        CR.appendChild(card);
    };
    
    return brief;
}

function generate_brief_spell_table(spellDatabase, tag_select, tag_filter, tier_select, tier_filter) {
    const oldTable = document.querySelector('#spelltable');
    const newTable = oldTable.cloneNode(false);

    spellDatabase.forEach(spell => {
        if (tag_select.size > 0 && ![...tag_select].every(tag => spell.tags.includes(tag))) return;
        if (tier_select.size > 0 && !tier_select.has(spell.tier)) return;
        if (spell.tags.some(tag => tag_filter.has(tag))) return;
        if (tier_filter.has(spell.tier)) return;
        newTable.appendChild(spellBrief(spell));
    });

    oldTable.parentNode.replaceChild(newTable, oldTable);
}

async function loadDatabase(spellDatabase) {
    const response = await fetch('https://api.github.com/repos/Argavyon/CCCompendium/contents/data/spells');
    const fileList = await response.json();
    for (var file of fileList) {
        const response = await fetch(file.download_url);
        const spellData = await response.json();
        spellDatabase.push(spellData);
    }
}

async function main() {
    const spellDatabase = [];
    await loadDatabase(spellDatabase);

    const tag_list = [];
    const compendiumLeft = document.querySelector('#compendium_left');
    spellDatabase.forEach(spell => spell.tags.forEach(tag => {
        if (!tag_list.includes(tag)) tag_list.push(tag);
    }));
    tag_list.sort();

    const tag_select = new Set();
    const tag_filter = new Set();
    const tier_select = new Set();
    const tier_filter = new Set();

    // TAGS
    tag_list.forEach(tag => {
        const div = compendiumLeft.appendChild(document.createElement('button'));
        div.style.display = 'block';
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
            generate_brief_spell_table(spellDatabase, tag_select, tag_filter, tier_select, tier_filter);
        }
    });
    
    // TIERS
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
            generate_brief_spell_table(spellDatabase, tag_select, tag_filter, tier_select, tier_filter);
        }
    }

    const CC = document.querySelector('#compendium_right');
    CC.appendChild(spellCard(spellDatabase[0]));

    generate_brief_spell_table(spellDatabase, tag_select, tag_filter, tier_select, tier_filter);
}

main();