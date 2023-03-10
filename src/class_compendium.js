function classCard(Class) {
    const classData = classDatabase[Class];
    
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
	card.className = 'class';
	
	const className = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	className.className = 'classname';
	className.colSpan = 2;
	className.textContent = Class;
	
	const classtype = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	classtype.className = 'classtype';
	classtype.colSpan = 2;
	classtype.textContent = `d${classData.Dice} ${classData.Type}`;
    
    const defensiveRow = cardBody.appendChild(document.createElement('tr'));
	const defensiveH = defensiveRow.appendChild(document.createElement('td'));
	const defensiveD = defensiveRow.appendChild(document.createElement('td'));
    defensiveH.className = 'classheaders';
    defensiveD.className = 'classdata';
	defensiveH.textContent = 'Defensive Stat:';
	defensiveD.textContent = classData.Defensive.join(', ');
    
    const proficienciesRow = cardBody.appendChild(document.createElement('tr'));
	const proficienciesH = proficienciesRow.appendChild(document.createElement('td'));
	const proficienciesD = proficienciesRow.appendChild(document.createElement('td'));
	proficienciesH.className = 'classheaders';
	proficienciesD.className = 'classdata';
	proficienciesH.textContent = 'Proficiencies:';
	proficienciesD.textContent = classData.Proficiencies.join(', ');
    
    const gameplay = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	gameplay.className = 'classdata';
	gameplay.colSpan = 2;
	gameplay.textContent = classData.Gameplay;
    gameplay.style.fontStyle = "italic";
    
    const flair = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	flair.className = 'classdata';
	flair.colSpan = 2;
	flair.textContent = classData.Flair;
	
	return card;
}

function featureCard(Class, Feature) {
    const featureData = classDatabase[Class].Features[Feature];
    
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
	card.className = 'class';

    const featureName = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	featureName.className = 'classname';
    featureName.textContent = Feature;
    
    const level = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	level.className = 'classtype';
	level.textContent = `Level ${featureData.level}`;
    
    const desc = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
    desc.className = 'classdata';
	desc.innerHTML = featureData.desc;
    
    return card;
}

function talentCard(Talent) {
    const talentData = talentDatabase[Talent];
    
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
    card.className = 'class';

    const talentName = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
    talentName.className = 'classname';
    talentName.colSpan = 2;
	talentName.textContent = Talent;

    if (talentData.prereq) {
        const prereqRow = cardBody.appendChild(document.createElement('tr'));

        const prereqL = prereqRow.appendChild(document.createElement('td'));
        prereqL.className = 'classname';
        prereqL.textContent = 'Prerequisites:';

        const prereqR = prereqRow.appendChild(document.createElement('td'));
        prereqR.className = 'classdata';
        prereqR.textContent = talentData.prereq.join(', ');
    }
    
    const desc = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
    desc.className = 'classdata';
    desc.colSpan = 2;
	desc.innerHTML = talentData.desc;
    
    return card;
}

function weaponStyleCard(Style) {
    const styleData = weaponStyleDatabase[Style];
    
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
    card.className = 'class';
    
    const styleName = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	styleName.className = 'classname';
    styleName.colSpan = 2;
    styleName.textContent = Style;

    Object.entries(styleData).filter(([attack, _]) => attack != 'name').forEach(([attack, desc]) => {
        const attackRow = cardBody.appendChild(document.createElement('tr'));

        const attackName = attackRow.appendChild(document.createElement('td'));
        attackName.className = 'classname';
        attackName.textContent = attack;
        attackName.style.fontStyle = "italic";

        const attackDesc = attackRow.appendChild(document.createElement('td'));
        attackDesc.className = 'classdata';
        attackDesc.innerHTML = desc;
    });
    
    return card;
}

function combatStyleCard(Style) {
    const styleData = combatStyleDatabase[Style];
    
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
    card.className = 'class';
    
    const styleName = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
    styleName.className = 'classname';
    styleName.textContent = Style;
    
    const desc = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
    desc.className = 'classdata';
	desc.innerHTML = styleData.desc;
    
    return card;
}

function maneuverCard(Maneuver) {
    const maneuverData = maneuverDatabase[Maneuver];
    
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
    card.className = 'class';
    
    const maneuverName = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	maneuverName.className = 'classname';
    maneuverName.textContent = Maneuver;
    
    const desc = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
    desc.className = 'classdata';
    desc.colSpan = 2;
	desc.innerHTML = maneuverData.desc;
    
    return card;
}

const content = document.querySelector('#class_compendium_content');

content.appendChild(classCard('Dragonlord'));

content.appendChild(featureCard('Dragonlord', 'Spellcasting'));
content.appendChild(featureCard('Dragonlord', 'Draconic Rage'));
content.appendChild(featureCard('Dragonlord', 'Ambient Power'));

content.appendChild(talentCard('Dragon Breath'));
content.appendChild(talentCard('Mind and Soul'));

content.appendChild(weaponStyleCard('Dagger'));

content.appendChild(combatStyleCard('Skirmisher'));

content.appendChild(maneuverCard('Quick Draw'));

function download(filename, text) {
	const element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
