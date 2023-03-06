from django.urls import path
<<<<<<< HEAD
from views import *
# from .views import insert_data
app_name = "core"

    # path('server-report/', serverReport.as_view(), name='server_report')

urlpatterns = [
    path('firstname/', FirstnameView.as_view(), name='firstname'),
    path('lastname/', LastnameView.as_view(), name='lastname'),
    path('phonenumber/', PhoneNumberView.as_view(), name='phonenumber'),
    path('emailaddress/', EmailAddressView.as_view(), name='emailaddress'),
=======
from userprofile. views import *
# from .views import serverReport, insert_data
app_name = "userprofile"

urlpatterns = [
    # path('server-report/', serverReport.as_view(), name='server_report'),
    path('',user_profile,name='user_profile'),
    # path('insert_data/', insert_data, name='insert_data'),
    path('first-name/', FirstnameView.as_view(), name='first_name'),
    path('last-name/', LastnameView.as_view(), name='last_name'),
    path('phone-number/', PhoneNumberView.as_view(), name='phone_number'),
    path('email-address/', EmailAddressView.as_view(), name='email_address'),
>>>>>>> 48a8d51797571c0953c53d417164cc90c1a20e74
    path('address/', AddressView.as_view(), name='address'),
    path('pincode/', PincodeView.as_view(), name='pincode'),
    path('location/', LocationView.as_view(), name='location'),
    path('set-password/', set_password, name='set_password'),
    path('organization/', organization_view, name='organization')
]



