from flask import Flask
from flask import jsonify
from flask import request
from flask import url_for
from flask import render_template

import json
import numpy as np

import json
from decimal import *
import pandas as pd

from flask.json import JSONEncoder
from datetime import date



#########################################################
# Flask Setup #
#########################################################

app = Flask(__name__, static_folder='./static', static_url_path='')
# app.json_encoder = DecimalEncoder

#########################################################
# Flask Routes #
#########################################################

@app.route("/")
def index():
    return render_template('index.html')



#########################################################
# API Endpoints #
########################################################

@app.route("/api", methods=['GET'])
def get_json() :    
    json_ = request.json
    df = pd.read_csv('data.csv')
    df_list = df['state'].tolist()

    result = [{"state": df.iloc[i, 2],
        "abbr": df.iloc[i, 3],        
        "poverty": df.iloc[i, 4],
        "povertyMoe": df.iloc[i, 5],            
        "age": df.iloc[i, 6],
        "ageMoe": df.iloc[i, 7],
        "income": int(df.iloc[i, 8]),
        "incomeMoe": int(df.iloc[i, 9]),
        "healthcare": df.iloc[i, 10],
        "healthcareLow": df.iloc[i, 11],
        "healthcareHigh": df.iloc[i, 12],
        "obesity": df.iloc[i, 13],
        "obesityLow": df.iloc[i, 14],
        "obesityHigh": df.iloc[i, 15],
        "smokes": df.iloc[i, 16],
        "smokesLow": df.iloc[i, 17],
        "smokesHigh": df.iloc[i, 18]}
        for i in range(len(df_list))
        ]

    return jsonify({
        
        'data':result})


#########################################################
if __name__ == '__main__':
    app.run(debug=True)
