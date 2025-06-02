from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
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


    # Sorts the results on price by ascending order
    @action(detail=False, methods=['get'], url_path='sortByPrice')
    def sort_by_price(self, request):
        gyms = Gym.objects.order_by('monthlyPrice')
        serializer = GymSerializer(gyms, many=True)
        return Response(serializer.data)
    

    # Filters the results to get gyms less than or equal to the price
    @action(detail=False, methods=['get'], url_path='filterByPrice/(?P<price>\d+)')
    def filter_by_price(self, request, price=None):
        gyms = Gym.objects.all()
        filtered_gyms = []
        for gym in gyms:
            if gym.monthlyPrice <= int(price):
                filtered_gyms.append(gym)
        serializer = GymSerializer(filtered_gyms, many=True)
        return Response(serializer.data)
    

    # Sorts the gyms by number of coaches in descending order
    @action(detail=False, methods=['get'], url_path='sortByNumCoaches')
    def sort_by_num_coaches(self, request):
        gyms = Gym.objects.all()
        gym_list = list(gyms)
        def merge_sort(gym_list):
            if len(gym_list) <= 1:
                return gym_list
            mid = len(gym_list) // 2
            left = gym_list[:mid]
            right = gym_list[mid:]

            left = merge_sort(left)
            right = merge_sort(right)

            return merge(left, right)

        def merge(left, right):
            merged = []
            left_index = 0
            right_index = 0

            while left_index < len(left) and right_index < len(right):
                if len(left[left_index].coaches.all()) >= len(right[right_index].coaches.all()):
                    merged.append(left[left_index])
                    left_index += 1
                else:
                    merged.append(right[right_index])
                    right_index += 1

            merged.extend(left[left_index:])
            merged.extend(right[right_index:])
            return merged
        
        sorted_gyms = merge_sort(gym_list)
        serializer = GymSerializer(sorted_gyms, many=True)
        return Response(serializer.data)

    # Filters the results by the coach specialty
    @action(detail = False, methods=['get'], url_path='filter_by_coach_specialty/(?P<speciality>\d+)')
    def filter_by_coach_specialty(self, request, specialty=None):
        gyms = Gym.objects.all()
        filtered_gyms = []
        for gym in gyms:
            for coach in gym.coaches:
                if coach.specialty == specialty:
                    filtered_gyms.append(gym)
        serializer = GymSerializer(filtered_gyms, many=True)
        return Response(serializer.data)
    

    




