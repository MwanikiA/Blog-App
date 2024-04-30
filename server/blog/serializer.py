from rest_framework.serializers import ModelSerializer
from .models import Blog

class BlogSerializer (ModelSerializer):
    '''
    Creates a serialized data (API) with the blog model instance
    (It will have all the fields the Blog model has)
    '''
    class Meta:
        model = Blog 
        fields = '__all__'