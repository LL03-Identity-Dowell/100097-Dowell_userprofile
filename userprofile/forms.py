from django import forms
from django.contrib.auth.forms import PasswordChangeForm
# creating a form
class InputForm(forms.Form):
 
    first_name = forms.CharField(max_length = 200)
    last_name = forms.CharField(max_length = 200)
    phone_number = forms.CharField(max_length= 200)
    email_address = forms.EmailField(max_length= 200)
    address = forms.CharField(max_length= 200)
    pincode = forms.CharField(max_length= 200)
    location = forms.CharField(max_length= 200)
    # password = forms.CharField( max_length=100)

class InputForm(forms.Form):
    username = forms.CharField(max_length=50)
    password = forms.CharField(widget=forms.PasswordInput)
    confirm_password = forms.CharField(widget=forms.PasswordInput)

class OrganizationForm(forms.Form):
    Your_Organization_Name = forms.CharField(max_length=100)
    Organization_Address = forms.CharField(max_length=100)
    PINZIPCODE = forms.CharField(max_length=100)
    city_of_your_Organization = forms.CharField(max_length=100)
    country_of_your_organization = forms.CharField(max_length=100)
    Organization_logo =forms.CharField(max_length=100)
    Upload_new_logo = forms.ImageField()
    Latitude_of_Organization = forms.CharField(max_length=100)
    Longitude_of_Organization = forms.CharField(max_length=100)