from django.shortcuts import render
from .serializer import BlogSerializer
from .models import Blog
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(["GET"]) #this scopes the view to only be a get request
def home(request):
    try:

        blogs = Blog.objects.all()
        if blogs:

            serializer = BlogSerializer(blogs, many=True)

            #returns all blogs in a serialized manner (API View of the blogs)
            return Response(serializer.data)
        else:
            return Response({"message" : "No blog found"})
    except Exception as e:
        return Response({"message" : "Error in fetching blogs"})
    


    
@api_view(["GET", "POST"])
def create(request):
    if request.method == "POST":
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message" : "Blog created successfully"})
    elif request.method == "GET":
        return Response({"message" : "Create a blog"})
    


def update(request, id):
    blog = get_object_or_404(Blog, id=id)
    serializer = BlogSerializer(instance=blog, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Blog updated successfully"})
    
    
def delete(request):
    blog = get_object_or_404(Blog, id=id)
    blog.delete()
    return Response({"message": "Blog deleted successfully"})


