from rest_framework import serializers
from .models import Realtor

class RealtorsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Realtor
        fields='__all__'