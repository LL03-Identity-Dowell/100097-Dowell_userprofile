from dowellconnection import dowellconnection
import json
# field={"Username":user,"OS":osver,"Device":device,"Browser":brow,"Location":loc,"Time":str(ltime),"SessionID":"linkbased","Connection":mobconn,"qrcode_id":"user6","IP":ipuser}
field={'username': 'deepak1999'}
resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","fetch",field,"nil")
respj=json.loads(resp)
print(respj)