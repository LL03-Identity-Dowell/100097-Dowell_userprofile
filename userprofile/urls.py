from django.urls import path
from userprofile.views import *
from .views import serverReport, insert_data

urlpatterns = [
    path('server-report/', serverReport.as_view(), name='server_report'),
    path('insert-data/', insert_data, name='insert_data'),
    path('first-name/', FirstnameView.as_view(), name='first_name'),
    path('last-name/', LastnameView.as_view(), name='last_name'),
    path('phone-number/', PhoneNumberView.as_view(), name='phone_number'),
    path('email-address/', EmailAddressView.as_view(), name='email_address'),
    path('address/', AddressView.as_view(), name='address'),
    path('pincode/', PincodeView.as_view(), name='pincode'),
    path('location/', LocationView.as_view(), name='location'),
]
