function ftag_desc(functional_tags, tag) {
    return functional_tags[
        Object.keys(functional_tags).find(f_tag => tag.includes(f_tag))
    ];
}

// Generate full-sized spell description
function spellCard(spellData, functional_tags) {
	const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
	card.className = 'spell';
	
	const spellName = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	spellName.className = 'spellname';
	spellName.colSpan = 2;
	spellName.innerHTML = spellData.name;
    
    if (spellData.author) {
        const author = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
        author.className = 'spelltier';
        author.colSpan = 2;
        author.innerHTML = `by ${spellData.author}`;
    }
	
	const tier = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	tier.className = 'spelltier';
	tier.colSpan = 2;
	tier.innerHTML = `Tier ${spellData.tier}`;
	
	const tagsRow = cardBody.appendChild(document.createElement('tr'));
	const tagsH = tagsRow.appendChild(document.createElement('td'));
	const tagsD = tagsRow.appendChild(document.createElement('td'));
	tagsH.className = 'spellheaders';
	tagsD.className = 'spelltags';
	tagsH.textContent = 'Tags:';
	tagsD.innerHTML = spellData.tags
        .map(tag => Object.keys(functional_tags).some(f_tag => tag.includes(f_tag)) ? `<span class='fTag' title='${ftag_desc(functional_tags, tag)}'>${tag}</span>` : tag)
        .join(', ')
    ;
	
	const costRow = cardBody.appendChild(document.createElement('tr'));
	const costH = costRow.appendChild(document.createElement('td'));
	const costD = costRow.appendChild(document.createElement('td'));
	costH.className = 'spellheaders';
	costD.className = 'spelldata';
	costH.textContent = 'Cost:';
	costD.innerHTML = spellData.cost;
	
	const rangeRow = cardBody.appendChild(document.createElement('tr'));
	const rangeH = rangeRow.appendChild(document.createElement('td'));
	const rangeD = rangeRow.appendChild(document.createElement('td'));
	rangeH.className = 'spellheaders';
	rangeD.className = 'spelldata';
	rangeH.textContent = 'Range:';
	rangeD.innerHTML = spellData.range;
	
	const durationRow = cardBody.appendChild(document.createElement('tr'));
	const durationH = durationRow.appendChild(document.createElement('td'));
	const durationD = durationRow.appendChild(document.createElement('td'));
	durationH.className = 'spellheaders';
	durationD.className = 'spelldata';
	durationH.textContent = 'Duration:';
	durationD.innerHTML = spellData.duration;
	
	const desc = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	desc.colSpan = 2;
	desc.innerHTML = spellData.desc;
	
    if (spellData.empower) {
        const empowerRow = cardBody.appendChild(document.createElement('tr'));
        const empowerH = empowerRow.appendChild(document.createElement('td'));
        const empowerD = empowerRow.appendChild(document.createElement('td'));
        empowerH.className = 'spellheaders';
        empowerD.className = 'spelldesc';
        empowerH.textContent = 'Empower:';
        empowerD.innerHTML = spellData.empower;
    }
	
	return card;
}

// Generate spell table entry
function spellBrief(spellData, functional_tags) {
    const brief = document.createElement('tr');
    brief.id = `spell_${spellData.name.replaceAll(' ', '_')}`;
    
    [
        spellData.name,
        spellData.tier,
        spellData.range,
        spellData.duration,
        spellData.tags
            .map(tag => Object.keys(functional_tags).some(f_tag => tag.includes(f_tag)) ? `<span class='fTag' title='${ftag_desc(functional_tags, tag)}'>${tag}</span>` : tag)
            .join(', ')
    ].forEach(data => {
        const td = brief.appendChild(document.createElement('td'));
        td.className = 'spelldata';
        td.innerHTML = data;
    });
    
    brief.onclick = function() {
        const card = spellCard(spellData, functional_tags);
        const compendiumRight = document.getElementById('compendium_right');
        compendiumRight.replaceChild(card, compendiumRight.firstElementChild);
    };
    
    return brief;
}

// Generate spell table
function generate_brief_spell_table(SpellDatabase, tag_select, tier_select, functional_tags) {
    const oldTable = document.querySelector('#spelltable');
    const newTable = oldTable.cloneNode(false);

    SpellDatabase.forEach(spell => {
        if (tag_select.size > 0 && !spell.tags.some(tag => tag_select.has(tag))) return;
        if (tier_select.size > 0 && !tier_select.has(spell.tier)) return;
        newTable.appendChild(spellBrief(spell, functional_tags));
    });

    oldTable.parentNode.replaceChild(newTable, oldTable);
}

// Download spell
function downloadSpell() {
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

function tag_buttons(tag_list, tag_set, container, render_callback) {
    Object.entries(tag_list).sort((a, b) => {
        if (a[1] == b[1]) {
            return (a[0] == b[0]) ? 0 : (a[0] > b[0]) ? 1 : -1;
        } else {
            return Math.sign(b[1] - a[1]);
        }
    }).forEach(([tag, count]) => {
        const div = container.appendChild(document.createElement('button'));
        const img = div.appendChild(document.createElement('img'));
        const text = div.appendChild(document.createElement('div'));
        
        img.width = 14;
        img.style.paddingRight = '2px';

        text.textContent = `${tag} (${count})`;
        text.style.display = 'inline';

        div.style.display = 'block';
        div.id = `tag_${tag.replaceAll(' ', '_')}`;
        if(tag.includes('Forbidden')) div.id = 'tag_Forbidden';
        div.className = 'selector';
        div.value = 0;
        div.onclick = function() {
            const S = parseInt(div.value);
            switch (S) {
                case 0:
                    div.value = S+1;
                    tag_set.add(tag);
                    break;
                case 1:
                    div.value = 0;
                    tag_set.delete(tag);
                    break;
            }
            render_callback();
        }
    });
}

function main() {
    const compendiumLeft = document.getElementById('compendium_left');
    const compendiumRight = document.getElementById('compendium_right');
    const compendiumSchoolList = document.getElementById('left_school_tags');
    const compendiumTagList = document.getElementById('left_regular_tags');

    const tag_list = {};
    const functional_tag_list = {};
    const school_tag_list = {};

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
	    Deprecated: 'This spell is considered for removal. Please do not select this spell during playtesting.',    
    };
    const school_tags = ['Conjuration', 'Evocation', 'Transmutation', 'Necromancy', 'Abjuration', 'Enchantment', 'Illusion', 'Divination', 'Forbidden'];

    SpellDatabase.forEach(spell =>
        spell.tags.forEach(tag => {
            if (tag.includes('Forbidden')) {
                if (!tag_list[tag]) tag_list[tag] = 1;
                else tag_list[tag] += 1;
            } else if (Object.keys(functional_tags).includes(tag)) {
                if (!functional_tag_list[tag]) functional_tag_list[tag] = 1;
                else functional_tag_list[tag] += 1;
            } else if (school_tags.includes(tag)) {
                if (!school_tag_list[tag]) school_tag_list[tag] = 1;
                else school_tag_list[tag] += 1;
            } else {
                if (!tag_list[tag]) tag_list[tag] = 1;
                else tag_list[tag] += 1;
            }
        })
    );

    const tag_select = new Set();
    const tier_select = new Set();
    const gen_spelltable = () => generate_brief_spell_table(SpellDatabase, tag_select, tier_select, functional_tags);

    // TAGS
    tag_buttons(school_tag_list, tag_select, compendiumSchoolList, gen_spelltable);
    tag_buttons(tag_list, tag_select, compendiumTagList, gen_spelltable);
    
    // TIERS
    for (let i = 1; i <= 9; i++) {
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
                    tier_button.value = 0;
                    tier_select.delete(tier);
                    break;
            }
            gen_spelltable();
        }
    }

    compendiumRight.appendChild(spellCard(SpellDatabase[0], functional_tags));
    gen_spelltable();
	
	const downloadButton = compendiumRight
		.appendChild(document.createElement('center'))
		.appendChild(document.createElement('button'));
	downloadButton.textContent = "SAVE (.png)";
	downloadButton.style.textAlign = 'center';
	downloadButton.onclick = downloadSpell;
}

main();
