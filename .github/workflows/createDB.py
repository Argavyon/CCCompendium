import json
import glob
with open('data/SpellDB.js', 'w') as DBfile:
    spell_list = []
    for i in glob.iglob('data/spells/*.json'):
        with open(i, 'r') as spellJSON:
            spell_list.append(json.load(spellJSON))
    spell_list.sort(key = lambda spell: spell['tier'])
    spellDB = json.dumps(spell_list, indent=2)
    print('const spellDatabase = ', spellDB, ';', sep = '', file = DBfile)