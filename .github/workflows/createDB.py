import glob
import json
from pathlib import Path
import sys

if len(sys.argv) < 3: exit -1
DBname = sys.argv[1]
DataFolder = sys.argv[2]

with open(f'data/{DBname}DB.js', 'w') as DBfile:
    D = dict()
    for i in glob.iglob(f'data/{DataFolder}/*.json'):
        with open(i, 'r') as spellJSON:
            D[Path(i).stem] = json.load(spellJSON)
    DBjson = json.dumps(D, indent=2)
    print(f'const {DBname}Database = ', DBjson, ';', sep = '', file = DBfile)
