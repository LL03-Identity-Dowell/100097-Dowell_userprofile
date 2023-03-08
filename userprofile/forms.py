from django import forms
 
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

class DeviceIdForm(forms.Form):
    edit_deviceidform = forms.BooleanField(widget=forms.HiddenInput, initial=True)
    phone_id = forms.CharField(max_length = 200)
    brand_model = forms.CharField(max_length = 200)
    laptop_model = forms.CharField(max_length= 200)
    tablet_model = forms.EmailField(max_length= 200)
    