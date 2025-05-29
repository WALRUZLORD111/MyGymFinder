from rest_framework import serializers
from .models import Gym, Coach, Specialty

class CoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = '__all__'
class SpecialtySerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialty
        fields = '__all__'
class GymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gym
        fields = '__all__'
