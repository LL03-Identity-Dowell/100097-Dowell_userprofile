from rest_framework import serializers

class SectionSerializer(serializers.Serializer):
    Section_Name = serializers.CharField()
    DeviceDetails = serializers.BooleanField(required=False)
    PersonalReferences = serializers.BooleanField(required=False)
    IDVerification_Status = serializers.BooleanField(required=False)
    OrganisationDetails = serializers.BooleanField(required=False)
    GeographicProfile = serializers.BooleanField(required=False)
    DemographicProfile = serializers.BooleanField(required=False)
    PsychographicProfile = serializers.BooleanField(required=False)
    BehaviouralProfile = serializers.BooleanField(required=False)
    UsageProfile = serializers.BooleanField(required=False)

class IdVerificationSerializer(serializers.Serializer):
    phone_Verification = serializers.BooleanField(required=False)
    email_Verification = serializers.BooleanField(required=False)
    voiceID_Verification = serializers.BooleanField(required=False)
    faceID_Verification = serializers.BooleanField(required=False)
    idCard2_Verification = serializers.BooleanField(required=False)
    idCard4_Verification = serializers.BooleanField(required=False)
    signature_Verification = serializers.BooleanField(required=False)
    socialMedia_Verification = serializers.BooleanField(required=False)
    personalReference_Verification = serializers.BooleanField(required=False)
    personal_Verification_By_Witness = serializers.BooleanField(required=False)
    organisation_Verification = serializers.BooleanField(required=False)

class UserSerializer(serializers.Serializer):
    userID = serializers.CharField()
    username = serializers.CharField()
    section = SectionSerializer(required=False)
    idverification = IdVerificationSerializer(required=False)

    def validate(self, attrs):
        if 'section' not in attrs and 'idverification' not in attrs:
            raise serializers.ValidationError("Either 'section' or 'idverification' should be provided.")
        if 'section' in attrs and 'idverification' in attrs:
            raise serializers.ValidationError("Both 'section' or 'idverification' cant be updated at one.")
        return attrs
