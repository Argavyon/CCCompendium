function download(filename, text) {
	const element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

const spellCreation = document.querySelector('#spell_creation');
spellCreation.onsubmit = function (event) {
	event.preventDefault();
	const spellFormData = new FormData(event.target);
	const spellObject = Object.fromEntries(spellFormData.entries());
	
	spellObject.tier = parseInt(spellObject.tier);
	spellObject.tags = spellObject.tags.split(',').map(str => str.trim());
	spellObject.desc = spellObject.desc.trim();
	spellObject.desc = spellObject.desc.replaceAll('\n', '<br>');
	spellObject.empower = spellObject.empower.trim();
	spellObject.empower = spellObject.empower.replaceAll('\n', '<br>');
	
	download(`${spellObject.name}.json`, JSON.stringify(spellObject));
	// console.log(spellObject);
};

const spellParse = document.querySelector('#spell_parse');
spellParse.onsubmit = function (event) {
	event.preventDefault();
	const spellFormData = new FormData(event.target);
	const spellText = Object.fromEntries(spellFormData.entries()).spelltext;
	
	const re_name = String.raw`\*\*(?<name>.+)\*\*`;
	const re_tier = String.raw`\*Tier (?<tier>\d+)\*`;
	const re_tags = String.raw`Tags: (?<tags>.+)`;
	const re_cost = String.raw`Cost: (?<cost>.+)`;
	const re_range = String.raw`Range: (?<range>.+)`;
	const re_duration = String.raw`(Duration: (?<duration>.+))?`;
	const re_desc = String.raw`(?<desc>(.|\n)+?)`;
	const re_empower = String.raw`(Empower: (?<empower>(.|\n)+))?`;
	
	const re = new RegExp([re_name, re_tier, re_tags, re_cost, re_range, re_duration, re_desc, re_empower].join('\n'));
	const match = re.exec(spellText);
    try {
        const spellObject = match.groups;
        spellObject.tier = parseInt(spellObject.tier);
        spellObject.tags = spellObject.tags.split(',').map(str => str.trim());
        spellObject.duration = spellObject.duration ?? 'Instantaneous';
        spellObject.desc = spellObject.desc.trim();
        spellObject.desc = spellObject.desc.replaceAll('\n', '<br>');
        spellObject.empower = spellObject.empower ?? '';
        spellObject.empower = spellObject.empower.trim();
        spellObject.empower = spellObject.empower.replaceAll('\n', '<br>');
        
        download(`${spellObject.name}.json`, JSON.stringify(spellObject));
        // console.log(JSON.stringify(spellObject));
    } catch (E) {
        [re_name, re_tier, re_tags, re_cost, re_range, re_duration, re_desc, re_empower].forEach(re => console.log(spellText.match(re)));
        throw E;
    }
};