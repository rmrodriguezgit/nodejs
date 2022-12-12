import requests
import fastf1
import pandas as pd
import json
from pandas import json_normalize
import sys

year = sys.argv[1]

url = "http://ergast.com/api/f1/"
query = "constructorStandings.json"
urlquery = url + str(year) + '/'+query
urlquery

response = requests.get(urlquery)
data = response.json()
constructors = data['MRData']['StandingsTable']['StandingsLists'][0]['ConstructorStandings']
constructors

df = pd.DataFrame(constructors)
print(f'{df}\n')


df2 = pd.json_normalize(constructors)
print(f'{df2}\n')


df2.columns = ['posicion','posicionTexto','puntos','wins','constructorId','url','escuderia','nacionalidad']
print(f'{df2}\n')

print(f'{df2.dtypes}\n')

df2['posicion'] = df2['posicion'].astype(int)
df2['puntos'] = df2['puntos'].astype(float)
df2['wins'] = df2['wins'].astype(int)

print(f'{df2.describe()}\n')