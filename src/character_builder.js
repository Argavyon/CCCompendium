const CBheader = document.querySelector('#character_builder_header_row');
const CBcontent = document.querySelector('#character_builder_content');

const proficiency = (i) => 2 + Math.floor((i-1)/4);

const charData = {
    levels: Array(20),
    talents: Array(20),
    speciesTalents: Array(20),
};

function CB_blankRow(i) {
    const row = document.createElement('tr');
    row.dataset.index = i-1;

    row.appendChild(document.createElement('td')).textContent = i;

    const classNameSelect = row.appendChild(document.createElement('td')).appendChild(document.createElement('select'));
    classNameSelect.options.add(document.createElement('option'));
    classNameSelect.className = 'Class';
    Object.keys(ClassDatabase).forEach(className => {
        const opt = classNameSelect.appendChild(document.createElement('option'));
        opt.value = className;
        opt.textContent = className;
    });
    classNameSelect.onchange = function() {
        const row = this.parentElement.parentElement;
        const i = parseInt(row.dataset.index);
        charData.levels[i] = this.value;

        for (let j = i + 1; j < 20; j ++) {
            const nextSel = document.querySelector(`tr[data-index="${j}"] select.Class`);
            nextSel.selectedIndex = this.selectedIndex;
            charData.levels[j] = this.value;
        }

        CBcontent.onchange();
    };
    classNameSelect.onfocus = function() { classNameSelect.selectedIndex = -1; };

    row.appendChild(document.createElement('td')).textContent = proficiency(i);

    const talentSelect = row.appendChild(document.createElement('td')).appendChild(document.createElement('select'));
    talentSelect.className = 'Talent';
    talentSelect.hidden = true;

    if ([1, 5, 10, 15, 20].includes(i)) {
        const SpeciesTalentSelect = row.appendChild(document.createElement('td')).appendChild(document.createElement('select'));
        SpeciesTalentSelect.className = 'SpeciesTalent';
        SpeciesTalentSelect.hidden = true;
    } else
        row.appendChild(document.createElement('td')).textContent = '';

    return row;
}

const headRow = CBheader.appendChild(document.createElement('tr'));
headRow.appendChild(document.createElement('th')).textContent = 'Level';
headRow.appendChild(document.createElement('th')).textContent = 'Class';
headRow.appendChild(document.createElement('th')).textContent = 'Proficiency';
headRow.appendChild(document.createElement('th')).textContent = 'Class Talent';
headRow.appendChild(document.createElement('th')).textContent = 'Racial Talent';

for (let i = 1; i <= 20; i++) {
    CBcontent.appendChild(CB_blankRow(i));
}

CBcontent.onchange = function() {
    classLevels = {};
    charData.levels.forEach((classChoice, level) => {
        if (Object.keys(classLevels).includes(classChoice)) classLevels[classChoice] += 1;
        else classLevels[classChoice] = 1;
        const thisClassLevel = classLevels[classChoice];
        
        const talentSelect = document.querySelector(`tr[data-index="${level}"] select.Talent`);
        if (!classChoice || !ClassDatabase[classChoice]['Talent Slots'].includes(thisClassLevel)) {
            charData.talents[level] = undefined;
            talentSelect.hidden = true;
        } else {
            charData.talents[level] = talentSelect.value;
            
            talentSelect.innerHTML = '<option value=""></option>';
            Object.keys(TalentDatabase).filter(talent => {
                if (TalentDatabase[talent].Class && !TalentDatabase[talent].Class.includes(thisClassLevel)) return false;
                if (charData.talents[level] != talent && charData.talents.includes(talent)) return false;
                if (TalentDatabase[talent].prereq) return false;

                return true;
            }).forEach(talent => {
                const opt = talentSelect.appendChild(document.createElement('option'));
                opt.value = talent;
                opt.textContent = talent;
            });
            talentSelect.value = charData.talents[level];
            
            talentSelect.hidden = false;
        }

        const speciesTalentSelect = document.querySelector(`tr[data-index="${level}"] select.SpeciesTalent`);
        if (speciesTalentSelect) {
            if (!classChoice) {
                charData.speciesTalents[level] = undefined;
                speciesTalentSelect.hidden = true;
            } else {
                if (!charData.speciesTalents[level])
                    charData.speciesTalents[level] = '';
                else {

                }
                speciesTalentSelect.hidden = false;
            }
        }


    });
};

CBcontent.onchange();
