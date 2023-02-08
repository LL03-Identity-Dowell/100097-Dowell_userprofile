from django.urls import path
from userprofile.views import *

urlpatterns = [
    path('',serverReport.as_view()),
]