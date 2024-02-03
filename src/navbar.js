const tabs = [
    'spell_compendium',
    'create_spell',
    'class_compendium',
    'character_builder',
    'metrics'
];
buttons = tabs.map(tab => document.getElementById(`navbar_${tab}`));
divs = tabs.map(tab => document.getElementById(tab));

buttons.forEach((button, i) => {
    button.onclick = function() {
        divs.forEach(div => {div.hidden = true});
        divs[i].hidden = false;
    };
});