import json
import glob
with open('data/SpellDB.js', 'w') as spellDB:
    spell_list = []
    for i in glob.iglob('data/spells/*.json'):
        with open(i, 'r') as spellJSON:
            spell_list.append(json.load(spellJSON))
    json.dump(spell_list, spellDB, sort_keys=True, indent=4)
