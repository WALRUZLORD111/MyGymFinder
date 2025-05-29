from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Coach(models.Model):
    name = models.CharField(max_length = 50)
    specialty = models.CharField(max_length=30)
    experience = models.TextField()
    def __str__(self):
        return self.name

class Specialty(models.Model):
    SPECIALTY_CHOICES = [("Karate", "Karate"), ("Wrestling","Wrestling"), ("BJJ","BJJ"), ("Judo", "Judo"), ("Muay Thai/Kickboxing","Muay Thai/Kickboxing"), ("MMA", "MMA"), ("Boxing", "Boxing")]
    name = models.CharField(max_length=20, choices = SPECIALTY_CHOICES)
    def __str__(self):
        return self.name

class Gym(models.Model):
    name = models.CharField(max_length=50)
    address = models.TextField()
    phone_number = models.CharField(max_length=11, blank = True, null=True)
    website = models.URLField()
    email = models.EmailField(blank = True, null=True)
    coaches = models.ManyToManyField(Coach)
    monthlyPrice = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(1000)]
    )
    def __str__(self):
        return self.name