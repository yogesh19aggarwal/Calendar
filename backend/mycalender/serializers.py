from rest_framework import serializers
from .models import *

class AppointmentSerialzer(serializers.ModelSerializer):
    title = serializers.CharField(source='name')
    start = serializers.DateField(source='start_date')
    end = serializers.DateField(source='end_date')
    classNames = serializers.CharField(source='status')
    class Meta:
        model = Appointments
        fields = ('id','title', 'classNames', 'start', 'end')