from flask import Flask, jsonify, request;
import pickle;
import os;
from LogParser import *

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
    file_text = ff[2].replace("\\r","")
    file_text = str(file_text.replace("\\n","\n"))
    file_text1 = file_text.strip().split("\n")
    del file_text1[len(file_text1)-1]

    LogParser(file_name, file_format, file_text1)
    # try:
    #     l = 
    # except Exception:
    #     pass
    # try:
    #     i = 1
    #     mainList = []
    #     d = dict()
    #     for line in f:
    #             l = re.findall(self.rex, line)
    #             size = len(self.format)
    #             l[size-1] = ' '.join(l[size-1:])
    #             del l[size:]
    #             template_id = hashlib.md5(l[size-1].encode('utf-8')).hexdigest()[0:8]
    #             if(template_id not in d):
    #                 d[template_id] = "E"+str(i)
    #                 i+=1

    #             l.append(d[template_id])
                
    #             mainList.append(l)
    #     self.format.append('Event')
    #     pd.set_option('display.max_columns', None)  
    #     df = pd.DataFrame(mainList, columns=self.format)
    #     df.to_csv(self.file_name+"_structured.csv", sep=',', encoding='utf-8', index=False)

    # except Exception as e:
    #     print(e)
   
    return jsonify(str(list(file_name)) + " -- " + str(list(file_format)) + " --- "+ str(ff))

if __name__=='__main__':
    app.run(debug=True)
