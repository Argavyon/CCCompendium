const NB_comp = document.querySelector('#navbar_compendium');
const NB_create = document.querySelector('#navbar_create_spell');
const div_comp = document.querySelector('#div_compendium');
const div_create = document.querySelector('#div_create_spell');

NB_comp.onclick = function() {
	div_comp.hidden = false;
	div_create.hidden = true;
};
NB_create.onclick = function() {
	div_comp.hidden = true;
	div_create.hidden = false;		
};