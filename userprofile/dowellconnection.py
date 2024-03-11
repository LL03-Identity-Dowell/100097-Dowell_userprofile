import json
import requests
from django.shortcuts import redirect
url = 'http://uxlivinglab.pythonanywhere.com/'

def dowellconnection(cluster,platform,database,collection,document,team_member_ID,function_ID,command,field,update_field):

    data= json.dumps({
      "cluster": cluster,
      "platform": platform,
      "database": database,
      "collection": collection,
      "document": document,
      "team_member_ID": team_member_ID,
      "function_ID": function_ID,
      "command": command,
      "field": field,
      "update_field":update_field
       })
    headers = {'content-type': 'application/json'}
    response = requests.request('POST',url, headers=headers,data=data)
    return json.loads(response.text)
