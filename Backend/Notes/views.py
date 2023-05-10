from django.shortcuts import render
from django.http import HttpResponse

from .models import Notes
from .Serializers import NotesCardSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view()
def index(request):
    notes=NotesCardSerializer(Notes.objects.all(),many=True)
    return Response(notes.data)