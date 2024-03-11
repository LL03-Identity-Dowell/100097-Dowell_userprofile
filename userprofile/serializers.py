from rest_framework import serializers
from django.conf import settings


class SectionSerializer(serializers.Serializer):
    Section_Name = serializers.CharField()
    MyProfile = serializers.BooleanField(required=False)
    VerifyUsername_Password_Strength = serializers.BooleanField(required=False)
    DeviceDetails = serializers.BooleanField(required=False)
    PersonalIDs = serializers.BooleanField(required=False)
    PersonalReferences = serializers.BooleanField(required=False)
    IDVerification_Status = serializers.BooleanField(required=False)
    OrganisationDetails = serializers.BooleanField(required=False)
    GeographicProfile = serializers.BooleanField(required=False)
    DemographicProfile = serializers.BooleanField(required=False)
    PsychographicProfile = serializers.BooleanField(required=False)
    BehaviouralProfile = serializers.BooleanField(required=False)
    UsageProfile = serializers.BooleanField(required=False)


IdVerification_Choices = [
    "Rejected_After_Verification",
    "Not_Started",
    "In_Progress",
    "Accepted_After_Verification",
]


class IdVerificationSerializer(serializers.Serializer):
    phone_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    email_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    voiceID_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    faceID_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    biometricID_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    videoID_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    idCard1_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    idCard2_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    idCard3_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    idCard4_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    idCard5_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    signature_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    socialMedia_Verification = serializers.ChoiceField(choices=IdVerification_Choices)
    personalReference_Verification = serializers.ChoiceField(
        choices=IdVerification_Choices
    )
    personal_Verification_By_Witness = serializers.ChoiceField(
        choices=IdVerification_Choices
    )
    organisation_Verification = serializers.ChoiceField(choices=IdVerification_Choices)


class UserSerializer(serializers.Serializer):
    userID = serializers.CharField()
    username = serializers.CharField()
    section = SectionSerializer(required=False)
    idverification = IdVerificationSerializer(required=False)

    def validate(self, attrs):
        if "section" not in attrs and "idverification" not in attrs:
            raise serializers.ValidationError(
                "Either 'section' or 'idverification' should be provided."
            )
        if "section" in attrs and "idverification" in attrs:
            raise serializers.ValidationError(
                "Both 'section' or 'idverification' cant be updated at one."
            )
        return attrs


server_passcode = "login123"


class GetAllUsersVoiceIDSerializer(serializers.Serializer):
    passcode = serializers.CharField(required=True)

    def validate(self, attrs):
        req_passcode = attrs.get("passcode")
        # if req_passcode != settings.GET_ALL_USERS_VOICEID_PASSCODE:
        if req_passcode != server_passcode:
            raise serializers.ValidationError("Invalid Passcode!")
        return attrs


class UpdateUsersBiometricSerializer(serializers.Serializer):
    username = serializers.CharField(required = True)
    image = serializers.ImageField(required = True)