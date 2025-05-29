from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CoachViewSet, SpecialtyViewSet, GymViewSet

router = DefaultRouter()
router.register(r'coaches', CoachViewSet, basename='coach')
router.register(r'specialties', SpecialtyViewSet, basename='specialty')
router.register(r'gyms', GymViewSet, basename='gym')

urlpatterns = [
    path('', include(router.urls)),
]