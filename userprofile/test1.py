import requests
import json
from django.shortcuts import render
from django.core.files.storage import default_storage
# import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import requests,re
import json
from django.contrib import messages
from userprofile.dowellconnection import dowellconnection
from userprofile.serializers import *
from django.contrib.staticfiles.storage import staticfiles_storage

url = "https://datacube.uxlivinglab.online/db_api/crud/"
api_key = "b8426b42-89b8-46d9-b23d-23c3116a6ff8"
db_name = "India_user_profile_db_1"
device_id_coll = "Device_ids"

# insert request 
def insert_deviceid_form(request):
    # user=request.data["Username"]
    phoneId=request.data["phoneId"]
    phoneBrand=request.data["phoneBrand"]
    laptopBrand=request.data["laptopBrand"]
    tabletBrand=request.data["tabletBrand"]
    update_fields={
        "phone_id":phoneId,
        "brand_model":phoneBrand,
        "laptop_model":laptopBrand,
        "tablet_model":tabletBrand,
    }
    data = {
        "api_key": api_key,
        "db_name": db_name,
        "coll_name": device_id_coll,
        "operation": "insert",
        "data": {
            "deviceIDs":update_fields
        }
    }

    response = requests.post(url, json=data)
    print(response.text)

# get request 
fetch_url = "https://datacube.uxlivinglab.online/db_api/get_data/"
def get_deviceid(request):
    # user=request.data["Username"]
    data = {
        "api_key": api_key,
        "db_name": db_name,
        "coll_name": device_id_coll,
        "operation": "fetch",
        "filters": {
            "_id": "65eb688193dcc3f25087489d"
        }
    }
    res = requests.post(fetch_url, json=data)
    # response = res.text  # Get the response as a string
    # response = json.loads(response_text)  # Now load the JSON from the string
    return res.text
    # print(response.text)

# update request
def update_deviceid(request):
    user=request.data["Username"]
    phoneId=request.data["phoneId"]
    phoneBrand=request.data["phoneBrand"]
    laptopBrand=request.data["laptopBrand"]
    tabletBrand=request.data["tabletBrand"]
    update_fileds={
        "phone_id":phoneId,
        "brand_model":phoneBrand,
        "laptop_model":laptopBrand,
        "tablet_model":tabletBrand,
    }
    data = {
        "api_key": api_key,
        "db_name": db_name,
        "coll_name": device_id_coll,
        "operation": "update",
        "query" : {"_id": "64f6fac8ac03855a010559f2"},
        "update_data": {
            "deviceIDs":update_fileds
        }
    }
    response = requests.put(url, json=data)
    print(response.text)

# delete request 
def delete_device_id(request):   
    data = {
        "api_key": api_key,
        "db_name": db_name,
        "coll_name": device_id_coll,
        "operation": "delete",
        "query": {
            "_id": "64f6fac8ac03855a010559f2"
        }
    }
    response = requests.delete(url, json=data)
    print(response.text)