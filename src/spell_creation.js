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
};

const spellParse = document.querySelector('#spell_parse');
spellParse.onsubmit = function (event) {
	event.preventDefault();
	const spellFormData = new FormData(event.target);
	const spellText = Object.fromEntries(spellFormData.entries()).spelltext;
    
    const spell_regex_1 = [
        String.raw`((\*\*)?(?<name>.+?)(\*\*)?\n)`,
        String.raw`((\*)?Tier (?<tier>\d+)(\*)?\n)`,
        String.raw`(Tags: (?<tags>.+)\n)`,
        String.raw`(Cost: (?<cost>.+)\n)`,
        String.raw`(Range: (?<range>.+)\n)?`,
        String.raw`(Duration: (?<duration>.+)\n)?`,
        String.raw`(?<desc>(.|\n)+?)`,
        String.raw`(Empower: (?<empower>(.|\n)+))`,
    ];
    const spell_regex_2 = [
        String.raw`((\*\*)?(?<name>.+?)(\*\*)?\n)`,
        String.raw`((\*)?Tier (?<tier>\d+)(\*)?\n)`,
        String.raw`(Tags: (?<tags>.+)\n)`,
        String.raw`(Cost: (?<cost>.+)\n)`,
        String.raw`(Range: (?<range>.+)\n)?`,
        String.raw`(Duration: (?<duration>.+)\n)?`,
        String.raw`(?<desc>(.|\n)+)`
    ];
    
	const re_1 = new RegExp(spell_regex_1.join(''));
    const re_2 = new RegExp(spell_regex_2.join(''));
	const match = re_1.exec(spellText) ?? re_2.exec(spellText);
    
    if (match !== null) {
        const spellObject = match.groups;
        spellObject.tier = parseInt(spellObject.tier);
        spellObject.tags = spellObject.tags.split(',').map(str => str.trim());
        spellObject.duration = spellObject.duration ?? 'Instantaneous';
        spellObject.range = spellObject.range ?? 'Self';
        spellObject.desc = spellObject.desc.trim();
        spellObject.desc = spellObject.desc.replaceAll('\n', '<br>');
        spellObject.empower = spellObject.empower ?? '';
        spellObject.empower = spellObject.empower.trim();
        spellObject.empower = spellObject.empower.replaceAll('\n', '<br>');
        
        download(`${spellObject.name}.json`, JSON.stringify(spellObject));
        // console.log("Successful match:", match[0], '\n--------------------\n', spellObject);
    } else {
        const re_1 = new RegExp(spell_regex_1.join('?') + '?');
        const re_2 = new RegExp(spell_regex_2.join('?') + '?');
        
        console.log("Failed match:", re_1.exec(spellText), re_2.exec(spellText));
    }
};