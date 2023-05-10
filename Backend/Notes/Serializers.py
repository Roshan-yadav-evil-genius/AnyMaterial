from rest_framework import serializers
from .models import Notes, Topics, Branch, Likes
from Authentication.Serializers import UserSerializer
from django.db.models import Q


class TopicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topics
        exclude = ["created_on", "updated_on"]


class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        exclude = ["created_on", "updated_on"]


class NotesCardSerializer(serializers.ModelSerializer):
    topics = serializers.SerializerMethodField()
    author = serializers.SerializerMethodField()
    branch = serializers.SerializerMethodField()
    rating = serializers.SerializerMethodField()
    likes = serializers.SerializerMethodField()

    class Meta:
        model = Notes
        exclude = ["created_on", "updated_on", "notes"]

    def get_topics(self, obj):
        return [topic.name for topic in obj.topics.all()]

    def get_branch(self, obj):
        return [branch.name for branch in obj.branch.all()]

    def get_author(self, obj):
        return dict(id=obj.author.id, name=obj.author.get_full_name(), email=obj.author.email)

    def get_rating(self, obj):
        data = Likes.objects.filter(note=obj.id)
        return round(sum([notes.rating for notes in data])/data.count(), 1)

    def get_likes(self, obj):
        query = Q(note=obj.id) & Q(like=True)
        data = Likes.objects.filter(query)
        return data.count()
