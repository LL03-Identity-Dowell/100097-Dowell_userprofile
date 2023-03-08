from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .forms import InputForm,DeviceIdForm

    # return render(request, insert_data.html, {'form': form})

# def index_page(request):
#     return render(request,'index.html')
class FirstnameView(View):
    def get(self, request):
        return HttpResponse()

class LastnameView(View):
    def get(self, request):
        return HttpResponse()

class PhoneNumberView(View):
    def get(self, request):
        return HttpResponse()

class EmailAddressView(View):
    def get(self, request):
        return HttpResponse()

class AddressView(View):
    def get(self, request):
        return HttpResponse()

class PincodeView(View):
    def get(self, request):
        return HttpResponse()

class LocationView(View):
    def get(self, request):
        return HttpResponse() 

from django.shortcuts import render
import requests
import json
import datetime
from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView

@method_decorator(csrf_exempt, name='dispatch')
# class serverReport(APIView):
#     def get(self, request):
#         return Response({"status": "Server is working."}, status=status.HTTP_200_OK)

def dowellconnection(cluster,platform,database,collection,document,team_member_ID,function_ID,command,field,update_field):
    url = 'http://100002.pythonanywhere.com/'
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
    return response.text

def get_user_object(username):
    fields = {"usename": username}
    response_obj = dowellconnection( "login", "login", "user_profile", "user_profile", "1168", "ABCDE", "find", fields, "nil")
    res_obj = json.loads(response_obj)
    try:
        return res_obj["data"]
    except:
        return []

def user_profile(request):
    url = "http://100002.pythonanywhere.com/"

    if request.method == 'POST':
        
        if 'edit_inputform' in request.POST:
            form = InputForm(request.POST)
            if form.is_valid():      
                first_name=form.cleaned_data['first_name']
                last_name=form.cleaned_data['last_name']
                phone_number=form.cleaned_data['phone_number']
                email_address=form.cleaned_data['email_address']
                address=form.cleaned_data['address']
                pincode=form.cleaned_data['pincode']
                location=form.cleaned_data['location']
                
                payload = json.dumps({
                "cluster": "login",
                "database": "login",
                "collection": "user_profile",
                "document": "user_profile",
                "team_member_ID": "1168",
                "function_ID": "ABCDE",
                "command": "update",
                "field": {
                    #identify username or id
                    
                },
                "update_field": {
                    "order_nos": 21,
                    "profile": {
                        "first_name": first_name,
                        "last_name": last_name,
                        "phone number": phone_number,
                        "email": email_address,
                        "address": address,
                        "pincode": pincode,
                        "location": location
                    },
                },
                "platform": "bangalore"
                })

                headers = {
                'Content-Type': 'application/json'
                }

                response = requests.request("POST", url, headers=headers, data=payload)
                print(response.text)
                print("hi")
        if 'edit_deviceidform' in request.POST:
            device_id_form = DeviceIdForm(request.POST)
            if  device_id_form.is_valid():
                phone_id = device_id_form.cleaned_data['phone_id']
                brand_model = device_id_form.cleaned_data['brand_model']
                laptop_model = device_id_form.cleaned_data['laptop_model']
                tablet_model = device_id_form.cleaned_data['tablet_model']
                payload = json.dumps({
                "cluster": "login",
                "database": "login",
                "collection": "user_profile",
                "document": "user_profile",
                "team_member_ID": "1168",
                "function_ID": "ABCDE",
                "command": "update",
                "field": {
                    
                },
                "update_field": {
                    "order_nos": 21
                },
                "platform": "bangalore"
                })

                headers = {
                'Content-Type': 'application/json'
                }

                response = requests.request("POST", url, headers=headers, data=payload)
                print("device_id_form")
                print(" ")
                print("ghfjdksal")
        
        # data_dic = json.loads(payload)
        # f = data_dic['field']['profile']['first_name']
        context ={} 
        context['form']= InputForm()
        context['device_id']=DeviceIdForm()
        return render(request, "index.html",context)            
    else:
        context ={} 
        context['form']= InputForm()
        context['device_id']=DeviceIdForm()
        return render(request, "index.html", context)