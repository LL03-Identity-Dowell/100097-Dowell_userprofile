import requests
import json


def dowellconnection(cluster,database,collection,document,team_member_ID,function_ID,command,field,update_field):
    url = 'http://100002.pythonanywhere.com/'
    data= json.dumps({
      "cluster": cluster,
    #   "platform": platform,
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

    return response.text
