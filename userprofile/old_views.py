# @api_view(["POST"])
# def Profile_create(request):
#     user = request.data["Username"]
#     userId = request.data["userID"]
#     profile = {
#         "username": "",
#         "userID": "",
#         "reference": {},
#         "demographic": {},
#         "psychographic": {},
#         "deviceIDs": {},
#         "behavioural": {},
#         "geographic": {},
#         "usage": {},
#     }

#     try:
#         field = {"username": user}
#         resp = dowellconnection(
#             "login",
#             "bangalore",
#             "login",
#             "user_profile",
#             "user_profile",
#             "1168",
#             "ABCDE",
#             "fetch",
#             field,
#             "nil",
#         )
#         respj = json.loads(resp)
#     except:
#         pass
#     if len(respj["data"]) > 0:
#         return Response({"message": "ok"})
#     else:
#         profile["username"] = user
#         profile["userID"] = userId
#         # insert the data to database
#         field1 = profile
#         res = dowellconnection(
#             "login",
#             "bangalore",
#             "login",
#             "user_profile",
#             "user_profile",
#             "1168",
#             "ABCDE",
#             "insert",
#             field1,
#             "nil",
#         )
#         response = json.loads(res)
#         return Response(response)


# def index(request):
#     return render(request, "index.html")


# @api_view(["POST"])
# def Profile(request):
#     user = request.data["Username"]
#     api_url = "https://100014.pythonanywhere.com/api/profile_view/"
#     myobj = {"username": user}
#     response = requests.post(api_url, data=myobj)
#     data = response.json()
#     return Response(data)


# @api_view(["POST"])
# def Userprofile_form(request):
#     user = request.data["Username"]
#     firstName = request.data["firstName"]
#     lastName = request.data["lastName"]
#     phoneNumber = request.data["phoneNumber"]
#     yourEmial = request.data["yourEmial"]
#     yourAddress = request.data["yourAddress"]
#     pin_zipcode = request.data["pin/zipcode"]
#     city = request.data["city"]  # "id needs to be changed from pin/zipcode to city"
#     country = request.data["country"]
#     yourDesignation = request.data["yourDesignation"]
#     yourTeamCode = request.data["yourTeamCode"]
#     nativeLanguage = request.data["nativeLanguage"]
#     nationality = request.data["nationality"]
#     yourPhoto = request.data["yourPhoto"]
#     formFile = request.data["formFile"]
#     yourVision = request.data["yourVision"]
#     update_fileds = {
#         "first_name": firstName,
#         "last_name": lastName,
#         "phone": phoneNumber,
#         "email": yourEmial,
#         "address": yourAddress,
#         "zip_code": pin_zipcode,
#         "city": city,
#         "country": country,
#         "yourDesignation": yourDesignation,
#         "yourTeamCode": yourTeamCode,
#         " nationality": nationality,
#         "yourPhoto": yourPhoto,
#         "formFile": formFile,
#         "native_language": nativeLanguage,
#         "vision": yourVision,
#     }
#     return Response(update_fileds)


# @api_view(["POST"])
# def Setpassword(request):
#     user = request.data["Username"]
#     old_password = request.data["currentpassword"]
#     new_password = request.data["newPassword"]
#     # confirm_password=request.data["confirmPassword"]
#     url = "https://100014.pythonanywhere.com/api/password_change/"
#     update_fields = {
#         "username": user,
#         "old_password": old_password,
#         "new_password": new_password,
#     }
#     response = requests.post(url, json=update_fields)
#     data = response.json()
#     if data["message"] == "success":
#         return Response({"message": "Password changed successfully!"})
#     else:
#         return Response(data)


# @api_view(["POST"])
# def Idverification_form(request):
#     user = request.data["Username"]
#     phone1 = request.data["phone1"]
#     email1 = request.data["email1"]
#     face1 = request.data["face1"]
#     videoId1 = request.data["videoId1"]
#     idcard1_1 = request.data["idcard1-1"]
#     idcard1_1 = request.data["idcard1-1"]
#     idcard1_2 = request.data["idcard1-2"]
#     idcard1_3 = request.data["idcard1-3"]
#     idcard1_4 = request.data["idcard1-4"]

#     laptopBrand = request.data["laptopBrand"]
#     tabletBrand = request.data[
#         "tabletBrand"
#     ]  # here id is laptopbrand needed to be changed to tabletbrand
#     update_fileds = {
#         "phone_id": phoneId,
#         "brand_model": phoneBrand,
#         "laptop_model": laptopBrand,
#         "tablet_model": tabletBrand,
#     }
#     return Response(update_fileds)


# @api_view(["POST"])
# def Organization_form(request):
#     user = request.data["Username"]
#     yourOrganization = request.data["yourOrganization"]
#     yourOrgAddress = request.data["yourOrgAddress"]
#     pin_zipcode = request.data["pin/zipcode"]
#     city = request.data["city"]
#     country = request.data["country"]
#     orgLogo = request.data["orgLogo"]
#     logoFile = request.data["logoFile"]
#     orgLatitude = request.data["orgLatitude"]
#     orgLongitude = request.data["orgLongitude"]
#     update_fileds = {
#         "Your_Organization_Name": yourOrganization,
#         "Organization_Address": yourOrgAddress,
#         "PINCODE": pin_zipcode,
#         "city_of_your_Organization": city,
#         "country_of_your_organization": country,
#         "orgLogo": orgLogo,
#         "logoFile": logoFile,
#         "Latitude_of_Organization": orgLatitude,
#         "Longitude_of_Organization": orgLongitude,
#     }
#     return Response(update_fileds)


# def PersonalRef(request):
#     user = request.data["Username"]
#     userId = request.data["userID"]
#     usrid = {"userID": userId}
#     respusr = dowellconnection(
#         "login",
#         "bangalore",
#         "login",
#         "personnel_ids",
#         "personnel_ids",
#         "1252001",
#         "ABCDE",
#         "fetch",
#         usrid,
#         "nil",
#     )
#     usrresp = json.loads(respusr)


# @api_view(["POST"])
# def FaceID(request):
#     user = request.data["Username"]
#     userId = request.data["userID"]
#     ids = {
#         "username": user,
#         "userID": userId,
#         "faceID": "",
#     }
#     usrid = {"userID": userId}
#     respusr = dowellconnection(
#         "login",
#         "bangalore",
#         "login",
#         "personnel_ids",
#         "personnel_ids",
#         "1252001",
#         "ABCDE",
#         "fetch",
#         usrid,
#         "nil",
#     )
#     usrresp = json.loads(respusr)
#     if len(usrresp["data"]) > 0:
#         return Response(usrresp["data"])
#     else:
#         fieldids = ids
#         res = dowellconnection(
#             "login",
#             "bangalore",
#             "login",
#             "personnel_ids",
#             "personnel_ids",
#             "1252001",
#             "ABCDE",
#             "insert",
#             fieldids,
#             "nil",
#         )
#         pdate = {"userID": userId}
#         resp = dowellconnection(
#             "login",
#             "bangalore",
#             "login",
#             "personnel_ids",
#             "personnel_ids",
#             "1252001",
#             "ABCDE",
#             "fetch",
#             pdate,
#             "nil",
#         )
#         respj = json.loads(resp)
#         return Response(respj["data"])


# @api_view(["POST"])
# def get_all_users_voiceId(request):
#     serializer = GetAllUsersVoiceIDSerializer(data=request.data)
#     if not serializer.is_valid():
#         return Response(
#             {"success": False, "error": serializer.errors},
#             status=status.HTTP_400_BAD_REQUEST,
#         )

#     response = json.loads(
#         dowellconnection(
#             "login",
#             "bangalore",
#             "login",
#             "personnel_ids",
#             "personnel_ids",
#             "1252001",
#             "ABCDE",
#             "fetch",
#             {},
#             "null",
#         )
#     )
#     if response["isSuccess"] == True:
#         all_users_data = response["data"]
#         data = [
#             {"username": user["username"], "voiceID": user["voiceID"]}
#             for user in all_users_data
#             if user["voiceID"]
#         ]
#         return Response({"success": True, "data": data}, status=status.HTTP_200_OK)
#     else:
#         return Response(
#             {"success": False, "error": "Failed to fetch all users voiceId"},
#             status=status.HTTP_400_BAD_REQUEST,
#         )


# @api_view(["POST"])
# def get_all_users_biometricId(request):
#     serializer = GetAllUsersVoiceIDSerializer(data=request.data)
#     if not serializer.is_valid():
#         return Response(
#             {"success": False, "error": serializer.errors},
#             status=status.HTTP_400_BAD_REQUEST,
#         )

#     response = json.loads(
#         dowellconnection(
#             "login",
#             "bangalore",
#             "login",
#             "personnel_ids",
#             "personnel_ids",
#             "1252001",
#             "ABCDE",
#             "fetch",
#             {},
#             "null",
#         )
#     )
#     if response["isSuccess"] == True:
#         all_users_data = response["data"]
#         data = [
#             {"username": user["username"], "biometricID": user["biometricID"]}
#             for user in all_users_data
#             if user["biometricID"]
#         ]
#         return Response({"success": True, "data": data}, status=status.HTTP_200_OK)
#     else:
#         return Response(
#             {"success": False, "error": "Failed to fetch all users biometricID"},
#             status=status.HTTP_400_BAD_REQUEST,
#         )


# @api_view(["POST"])
# def update_users_biometric(request):
#     serializer = UpdateUsersBiometricSerializer(data=request.data)

#     if not serializer.is_valid():
#         return Response(
#             {"success": True, "error": serializer.errors},
#             status=status.HTTP_400_BAD_REQUEST,
#         )

#     try:
#         stored_image = default_storage.save(
#             (serializer.validated_data["image"].name).replace(" ", "-"),
#             serializer.validated_data["image"],
#         )
#         biometric_path = f"https:100097.pythonanywhere.com/media/{stored_image}"
#     except Exception as e:
#         return Response(
#             {"success": False, "error": str(e)}, status=status.HTTP_400_BAD_REQUEST
#         )

#     userdetails = {"username": serializer.validated_data["username"]}
#     updated_field = {"biometricID": biometric_path}

#     # Try to Fetch user profile data from 'user_profile' collection
#     response_validate_user = json.loads(
#         dowellconnection(
#             "login",
#             "bangalore",
#             "login",
#             "user_profile",
#             "user_profile",
#             "1168",
#             "ABCDE",
#             "fetch",
#             userdetails,
#             "null",
#         )
#     )
#     response_data = response_validate_user["data"]

#     # User Profile found, (username is valid)
#     if len(response_data) > 0:
#         response = json.loads(
#             dowellconnection(
#                 "login",
#                 "bangalore",
#                 "login",
#                 "personnel_ids",
#                 "personnel_ids",
#                 "1252001",
#                 "ABCDE",
#                 "update",
#                 userdetails,
#                 updated_field,
#             )
#         )

#         if response["isSuccess"]:
#             return Response(
#                 {"success": True, "message": "BiometricID saved successfully"},
#                 status=status.HTTP_200_OK,
#             )
#         else:
#             return Response(
#                 {"success": False, "error": "Failed to update BiometricID"},
#                 status=status.HTTP_400_BAD_REQUEST,
#             )
#     else:
#         return Response(
#             {"success": False, "error": "Invalid Username"},
#             status=status.HTTP_400_BAD_REQUEST,
#         )


# @api_view(["POST"])
# def get_all_users_faceId(request):
#     serializer = GetAllUsersVoiceIDSerializer(data=request.data)
#     if not serializer.is_valid():
#         return Response(
#             {"success": False, "error": serializer.errors},
#             status=status.HTTP_400_BAD_REQUEST,
#         )

#     response = json.loads(
#         dowellconnection(
#             "login",
#             "bangalore",
#             "login",
#             "personnel_ids",
#             "personnel_ids",
#             "1252001",
#             "ABCDE",
#             "fetch",
#             {},
#             "null",
#         )
#     )
#     if response["isSuccess"] == True:
#         all_users_data = response["data"]
#         data = [
#             {"username": user["username"], "faceID": user["faceID"]}
#             for user in all_users_data
#             if user["faceID"]
#         ]
#         return Response({"success": True, "data": data}, status=status.HTTP_200_OK)
#     else:
#         return Response(
#             {"success": False, "error": "Failed to fetch all users faceID"},
#             status=status.HTTP_400_BAD_REQUEST,
#         )
