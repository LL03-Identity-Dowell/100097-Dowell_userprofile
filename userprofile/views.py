import json
from django.http import HttpResponse ,JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import requests
import json
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

@method_decorator(csrf_exempt, name='dispatch')
class serverReport(APIView):
    def get(self, request):
        return Response({"status": "Server is working."}, status= status.HTTP_200_OK)


