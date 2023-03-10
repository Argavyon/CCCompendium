import glob
import json
import os
import sys

if len(sys.argv) < 3: exit -1
DBname = sys.argv[1]
DataFolder = sys.argv[1]

with open(f'data/{DBname}DB.js', 'w') as DBfile:
    dict = {}
    for i in glob.iglob(f'data/{DataFolder}/*.json'):
        with open(i, 'r') as spellJSON:
            dict[os.path.basename(i)] = json.load(spellJSON)
    DBjson = json.dumps(dict, indent=2)
    print(f'const {DBname}Database = ', DBjson, ';', sep = '', file = DBfile)