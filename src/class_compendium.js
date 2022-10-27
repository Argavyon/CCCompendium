function classCard(classData) {
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
	card.className = 'class';
	
	const className = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	className.className = 'classname';
	className.colSpan = 2;
	className.textContent = classData.name;
	
	const classtype = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	classtype.className = 'classtype';
	classtype.colSpan = 2;
	classtype.textContent = `d${classData.dice} ${classData.type}`;
    
    const defensiveRow = cardBody.appendChild(document.createElement('tr'));
	const defensiveH = defensiveRow.appendChild(document.createElement('td'));
	const defensiveD = defensiveRow.appendChild(document.createElement('td'));
    defensiveH.className = 'classheaders';
    defensiveD.className = 'classdata';
	defensiveH.textContent = 'Defensive Stat:';
	defensiveD.textContent = classData.defensive.join(', ');
    
    const proficienciesRow = cardBody.appendChild(document.createElement('tr'));
	const proficienciesH = proficienciesRow.appendChild(document.createElement('td'));
	const proficienciesD = proficienciesRow.appendChild(document.createElement('td'));
	proficienciesH.className = 'classheaders';
	proficienciesD.className = 'classdata';
	proficienciesH.textContent = 'Proficiencies:';
	proficienciesD.textContent = classData.proficiencies.join(', ');
    
    const gameplay = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	gameplay.className = 'classdata';
	gameplay.colSpan = 2;
	gameplay.textContent = classData.gameplay;
    gameplay.style.fontStyle = "italic";
    
    const flair = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	flair.className = 'classdata';
	flair.colSpan = 2;
	flair.textContent = classData.flair;
	
	return card;
}

function featureCard(featureData) {
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
	card.className = 'class';
    
    const featureName = cardBody.appendChild(document.createElement('tr')).appendChild(document.createElement('td'));
	featureName.className = 'classname';
	featureName.colSpan = 2;
	featureName.textContent = featureData.name;
    
    return card;
}

function talentCard(talentData) {
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
	card.className = 'class';
    
    return card;
}

function weaponStyleCard(styleData) {
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
	card.className = 'class';
    
    return card;
}

function combatStyleCard(styleData) {
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
	card.className = 'class';
    
    return card;
}

function maneuverCard(maneuverData) {
    const card = document.createElement('table');
	const cardBody = card.appendChild(document.createElement('tbody'));
	card.className = 'class';
    
    return card;
}

const Dragonlord = {
    'class': {
        name: 'Dragonlord',
        type: 'Half-Caster',
        dice: '10',
        defensive: ['Dexterity', 'Willpower'],
        proficiencies: ['Heavy Armor', 'Martial Weapons', 'Shields'],
        flair: 'A difficult path with few adherents, the dragonlord channels the power and magic of dragons to do battle with their enemies. Fearsome and awe-inspiring, the proud few that succeed gather fame effortlessly, with even fewer still rumored to become dragons themselves.',
        gameplay: 'Specialist in field control through terror and awe, sick nasty breath attacks and AoE cleaves.',
    },
    features: {
        Spellcasting: {
            name: 'Spellcasting',
            level: 1,
            desc: 'Your connection has granted you the ability to cast magic.<br>You gain access to the Draconic spell tag.<br>You are a half caster. Whatever that means right now. Willpower is used as your casting stat.'
        },
        'Draconic Rage': {
            name: 'Draconic Rage',
            level: 1,
            desc: 'While you are affected by a Draconic spell and take the Attack action, you can choose to forgo one of your attacks to strike out at all creatures within a 5 foot radius of you. You make one attack against all creatures in range, dealing 1d12 slashing, piercing, or bludgeoning damage on a hit. You use the greater of your Strength, Dexterity, or Willpower to determine your attack and damage bonus, and you choose the type of damage dealt.<br>The damage increases by 1d12 at 5th, 10th, and 15th level.',
        },
        'Ambient Power': {
            name: 'Ambient Power',
            level: 1,
            desc: 'When a Draconic spell cast on you ends, you regain 1 MP. When you cast a Draconic spell with no duration, you regain 1 MP.',
        },
    },
};
const Talents = {
    'Dragon Breath': {
        'class': ['Dragonlord'],
        desc: 'You can spend 1 AP to make a breath attack. When you take this talent, choose the damage type of the breath attack, which cannot be changed. Your breath targets either a 10 foot radius around you or a 30 foot line. All targets must succeed on a Dexterity saving throw or take 1d6 damage. This damage increases by 1d6 at 10th and 20th level.',
    },
    'Mind and Soul' :{
        'class': ['Dragonlord'],
        prereq: ['In Tune', 'Elder Dragon\'s Knowledge', 'Speaker of the Wyrmtongue'],
        desc: 'Dragonlord becomes a full caster, increasing its MP to 12/level. Draconic spells you cast grant you temporary hit points equal to two times their tier until the start of your next turn. You are immune to the frightened condition while you are affected by a Draconic spell.',
    },
};
const WeaponStyles = {
    Dagger: {
        'Quick Stab': 'Aims for an exposed part and stabs. Deals normal weapon damage. The weapon damage roll is doubled against a creature that can\'t move or with a movement speed of 0.',
        Disembark: 'A careful thrust meant to secure an opening for you. Deals half weapon damage, and the target can\'t make attacks of opportunity against you even if you miss.',
        Combo: 'A lethal strike that requires you to have struck your enemy already this turn with a different weapon other than another dagger. Damage die increased by 1d4.',
    },
};
const CombatStyles = {
    Skirmisher: {
        desc: 'The first time you hit a creature with a weapon attack on your turn, you gain an additional 10 feet of movement for the rest of the turn. The bonus increases by 5 feet at 5th, 10th, and 15th level.',
    },
};
const Maneuvers = {
    'Quick Draw': {
        class: ['Warrior#3'],
        desc: 'You immediately draw a new weapon and attack with that weapon. On a successful hit, double the damage bonus from Strength or Dexterity.',
    },
};

const content = document.querySelector('#class_compendium_content');

content.appendChild(classCard(Dragonlord.class));

content.appendChild(featureCard(Dragonlord.features.Spellcasting));
content.appendChild(featureCard(Dragonlord.features['Draconic Rage']));
content.appendChild(featureCard(Dragonlord.features['Ambient Power']));

content.appendChild(talentCard(Talents['Dragon Breath']));
content.appendChild(talentCard(Talents['Mind and Soul']));

content.appendChild(weaponStyleCard(WeaponStyles.Dagger));

content.appendChild(combatStyleCard(CombatStyles.Skirmisher));

content.appendChild(maneuverCard(Maneuvers['Quick Draw']));
