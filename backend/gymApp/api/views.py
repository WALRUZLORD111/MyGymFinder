from django.shortcuts import render
from rest_framework import viewsets
from .models import Coach, Specialty, Gym
from .serializers import CoachSerializer,SpecialtySerializer,GymSerializer

# Create your views here.

class CoachViewSet(viewsets.ModelViewSet):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer
    

class SpecialtyViewSet(viewsets.ModelViewSet):
    queryset = Specialty.objects.all()
    serializer_class = SpecialtySerializer


class GymViewSet(viewsets.ModelViewSet):
    queryset = Gym.objects.all()
    serializer_class = GymSerializer