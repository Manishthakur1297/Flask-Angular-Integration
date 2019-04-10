from flask import Flask, jsonify, request;
import pickle;
import os
import re
import numpy as np
import pandas as pd
import hashlib
from collections import OrderedDict
import itertools as it
from file_titles import titles

app = Flask(__name__)

@app.route("/", methods=['GET'])

def first():
    return jsonify({"Welcome": "Here"})


@app.route("/readFile/", methods = ['POST'])
def ReadFile():
    text = request.data
    ff = text.decode('utf-8').split(",")
    file_name = ''.join(ff[0][4:]).replace("\"",'').strip()
    file_format = ff[1].replace("\\n",'').replace("\"",'').strip()
    file_text = ''.join(ff[2:]).replace("\\r","")
    file_text = str(file_text.replace("\\n","\n").replace("\"",'').strip())
    file_text1 = file_text.strip().split("\n")
    del file_text1[len(file_text1)-1]

    format = titles[file_format]['log_format']
    rex =  titles[file_format]['regex'][0]

    mainList = []
    for line in file_text1:
        l = re.findall(rex, line)
        size = len(format)
        size1 = len(l)
        if(size1<size):
            pass
        else:
            l[size-1] = ' '.join(l[size-1:])
            del l[size:]
        
        d = OrderedDict()
        for k ,v in it.zip_longest(format,l):
            d[k] = v
        mainList.append(d)
        

    # try:
    #     i = 1
    #     mainList = []
    #     d = dict()
    #     for line in file_text1:
    #         l = re.findall(rex, line)
    #         size = len(format)
    #         l[size-1] = ' '.join(l[size-1:])
    #         del l[size:]
    #         # template_id = hashlib.md5(l[size-1].encode('utf-8')).hexdigest()[0:8]
    #         # if(template_id not in d):
    #         #     d[template_id] = "E"+str(i)
    #         #     i+=1
    #         # l.append(d[template_id])
    #         mainList.append(l)
    #     #format.append('Event')
    #     #pd.set_option('display.max_columns', None)  
    #     df = pd.DataFrame(mainList, columns=format)
    #     df.to_csv(file_name+"_structured.csv", sep=',', encoding='utf-8', index=False)

    # except Exception as e:
    #     print(e)
   
    return jsonify(mainList,format)

if __name__=='__main__':
    app.run(debug=True)
