from django.shortcuts import render
from django.http import HttpResponse
from django.views import View

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
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

@method_decorator(csrf_exempt, name='dispatch')
class serverReport(APIView):
    def get(self, request):
        return Response({"status": "Server is working."}, status=status.HTTP_200_OK)

def insert_data(request):
    url = "http://100002.pythonanywhere.com/"

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
                "first_name": "First Name",
                "last_name": "Last Name",
                "phone number": "Phone",
                "email": "email address",
                "address": "address",
                "pincode": "pincode",
                "location": "location"
            },
        },
        "update_field": {
            "order_nos": 21
        },
        "platform": "bangalore"
    })

    data_dic = json.loads(payload)

    first_name = data_dic['field']['profile']['first_name']
    last_name = data_dic['field']['profile']['last_name']
    phone = data_dic['field']['profile']['phone number']
    email_address = data_dic['field']['profile']['email']
    address = data_dic['field']['profile']['address']
    pincode = data_dic['field']['profile']['pincode']
    location = data_dic['field']['profile']['location']

    context = {
        'first_name': first_name, 
        'last_name': last_name,
        'phone_number': phone,
        'email_address': email_address,
        'address': address,
        'pincode': pincode,
        'location': location
    }

    headers = {
        'Content-Type': 'application/json'
    }

    return render(request, 'insert_data.html', context=context)
