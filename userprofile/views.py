from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .forms import InputForm

    # return render(request, insert_data.html, {'form': form})
# def index_page(request):
#     return render(request, "index.html")

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


def get_user_object(username):
    fields = {"usename": username}
    response_obj = dowellconnection("login", "login", "user_profile", "user_profile", "1168", "ABCDE", "find", fields, "nil")
    if response_obj.strip()== '':
        return []
    res_obj = json.loads(response_obj)
    try:
        return res_obj ['data']
    except:
         return []


def user_profile(request):
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
        
        return HttpResponse('Form submission successful!')

    else:
        form = InputForm()

    return render(request, 'user_profile.html', {'form': form})



def set_password(request):
    if request.method == 'POST':
        form = InputForm(request.POST)
        if form.is_valid():      
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            confirm_password = form.cleaned_data['confirm_password']
            
            if password != confirm_password:
                return render(request, 'set_password.html', {'form': form, 'error': 'Passwords do not match.'})
            
            user_object = get_user_object(username)
            
            if not user_object:
                return render(request, 'set_password.html', {'form': form, 'error': 'User does not exist.'})
            
            user_id = user_object[0]['_id']
            update_fields = {"password": password}
            response = dowellconnection("login", "login", "user_profile", "user_profile", "1168", "ABCDE", "update", {"_id": user_id}, update_fields)
            response_obj = json.loads(response)
            
            if response_obj['status'] == 'success':
                return render(request, 'set_password.html', {'form': form, 'success': 'Password set successfully.'})
            else:
                return render(request, 'set_password.html', {'form': form, 'error': 'Error setting password.'})
    else:
        form = InputForm()
    
    return render(request, 'set_password.html', {'form': form})

    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)
from django.shortcuts import render
from django.http import HttpResponse
from .forms import OrganizationForm

def organization_view(request):
    # If the request method is POST, it means that the user has submitted the form
    if request.method == 'POST':
        # Create an instance of the OrganizationForm with the data received in the request
        form = OrganizationForm(request.POST, request.FILES)
        # If the form is valid, get the cleaned data from the form
        if form.is_valid():
            Name= form.cleaned_data['Name']
            address = form.cleaned_data['address']
            zipcode = form.cleaned_data['zipcode']
            city = form.cleaned_data['city']
            country = form.cleaned_data['country']
            organization_logo = form.cleaned_data['orgainzation logo']
            upload_logo = form.cleaned_data['upload logo']
            latitude = form.cleaned_data['latitude']
            longitude = form.cleaned_data['longitude']

            # Create a dictionary with the form data to be saved to the database
            organization_data = {
                'Name': Name,
                'address': address,
                'zipcode': zipcode,
                'city': city,
                'country': country,
                'organization logo': organization_logo,
                'upload logo': upload_logo,
                'latitude': latitude,
                'longitude': longitude,
            }

            # Save the organization data to the database
            # Your implementation may vary depending on your database setup
            # use an ORM like Django's built-in ORM
            save_to_database(organization_data)

            # Return a success message to the user
            return HttpResponse('Organization added successfully.')
    else:
        # If the request method is GET, it means that the user wants to view the form
        form = OrganizationForm()
    # Render the form template with the form object
    return render(request, 'organization.html', {'form': form})