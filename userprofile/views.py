from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .forms import InputForm

    # return render(request, insert_data.html, {'form': form})


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

def insert_data(request):
    url = "http://100002.pythonanywhere.com/"

    if request.method == 'POST':
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
            "command": "insert",
            "field": {
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
            "update_field": {
                "order_nos": 21
            },
            "platform": "bangalore"
        })

        headers = {
        'Content-Type': 'application/json'
        }

        response = requests.request("POST", url, headers=headers, data=payload)
        print(response.text)
        
        data_dic = json.loads(payload)
        f = data_dic['field']['profile']['first_name']
        return render(request, "insert_data.html",{'first_name':f})            
    else:
        context ={} 
        context['form']= InputForm()
        return render(request, "insert_data.html", context)