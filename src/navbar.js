const tabs = [
    'spell_compendium',
    'create_spell',
    'class_compendium',
    'character_builder'
];
buttons = tabs.map(tab => document.querySelector(`#navbar_${tab}`));
divs = tabs.map(tab => document.querySelector(`#div_${tab}`));

buttons.forEach((button, i) => {
    button.onclick = function() {
        divs.forEach(div => {div.hidden = true});
        divs[i].hidden = false;
    };
});