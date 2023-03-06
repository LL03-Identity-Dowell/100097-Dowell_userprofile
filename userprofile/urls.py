from django.urls import path
from views import *
# from .views import insert_data
app_name = "core"

    # path('server-report/', serverReport.as_view(), name='server_report')

urlpatterns = [
    path('firstname/', FirstnameView.as_view(), name='firstname'),
    path('lastname/', LastnameView.as_view(), name='lastname'),
    path('phonenumber/', PhoneNumberView.as_view(), name='phonenumber'),
    path('emailaddress/', EmailAddressView.as_view(), name='emailaddress'),
    path('address/', AddressView.as_view(), name='address'),
    path('pincode/', PincodeView.as_view(), name='pincode'),
    path('location/', LocationView.as_view(), name='location'),
    path('set-password/', set_password, name='set_password'),
    path('organization/', organization_view, name='organization')
]



