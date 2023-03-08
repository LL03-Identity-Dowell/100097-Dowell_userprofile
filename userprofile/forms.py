from django import forms
from django.contrib.auth.forms import PasswordChangeForm
# creating a form
class InputForm(forms.Form):
    edit_inputform = forms.BooleanField(widget=forms.HiddenInput, initial=True)
    first_name = forms.CharField(max_length = 200)
    last_name = forms.CharField(max_length = 200)
    phone_number = forms.CharField(max_length= 200)
    email_address = forms.EmailField(max_length= 200)
    address = forms.CharField(max_length= 200)
    pincode = forms.CharField(max_length= 200)
    location = forms.CharField(max_length= 200)

    