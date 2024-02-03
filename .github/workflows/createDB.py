from argparse import ArgumentParser
from glob import glob
import json

parser = ArgumentParser(
    prog='CreateDB.py',
    description='Handles the creation of json-like file-based databases.'
)
parser.add_argument('DBname', type=str)
parser.add_argument('DataFolder', type=str)
args = parser.parse_args()

data = []
for file in sorted(glob(f'data/{args.DataFolder}/*.json')):
    with open(file, 'r') as itemJSON:
        data.append(json.load(itemJSON))

DBjson = json.dumps(data, indent=2)
with open(f'data/{args.DBname}DB.js', 'w') as DBfile:
    print(f'const {args.DBname}Database = ', DBjson, ';', sep = '', file = DBfile)
