from django.urls import path,re_path
from userprofile. views import *
from userprofile import views
from .views import user_profile
# from .views import serverReport, insert_data
app_name = "userprofile"

urlpatterns = [
    # path('server-report/', serverReport.as_view(), name='server_report'),
    # path('user_profile/', views.user_profile, name='user_profile'),
    re_path(r'^(?:session_id=(?P<session_id>[a-z0-9]))?$',user_profile, name='user_profile'),
    re_path(r'^user/(?:username=(?P<username>[a-z0-9]))?$',views.userdata, name='userdata'),
    # re_path(r'^/(?P<session_id>[a-z0-9]+)/?$', user_profile, name='user_profile'),

    # path('deviceid/', deviceid_data, name='deviceid'),
    # path('first-name/', FirstnameView.as_view(), name='first_name'),
    # path('last-name/', LastnameView.as_view(), name='last_name'),
    # path('phone-number/', PhoneNumberView.as_view(), name='phone_number'),
    # path('email-address/', EmailAddressView.as_view(), name='email_address'),
    # path('address/', AddressView.as_view(), name='address'),
    # path('pincode/', PincodeView.as_view(), name='pincode'),
    # path('location/', LocationView.as_view(), name='location'),
    # path('set-password/', set_password, name='set_password'),
    # path('organization/', Organization_View, name='organization'),
    # path('geographical/', GeographicalView.as_view(), name='geographical'),
    # path('demographic-profile/', DemographicProfileView.as_view(), name='demographic_profile'),
    # path('personal_id/', PersonalIDView.as_view(), name='personal_id'),
    # path('behaviour-profile/', BehaviourProfile.as_view(), name='behaviour-profile'),
    # path('usage-profile/', UsageProfileView.as_view(), name='usage-profile'),
]



