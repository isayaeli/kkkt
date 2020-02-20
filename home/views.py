from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404
from .models import *
from django.views.generic import ListView
from django.db.models import Q
from django.core.serializers import serialize
import json
from django.http import HttpResponse,JsonResponse
from .forms import commentForm

# Create your views here.

# Create your views here.
def home(request):
    video = BannerVideo.objects.all()
    context = {
        'video':video
    }
    return render(request, 'home/home_page.html', context)

def video_play(request):
    video = BannerVideo.objects.all()
    context = {
        'video':video
    }
    return render(request, 'home/video_play.html', context)

def listing(request):
    data = Platform.objects.all()
    query = request.GET.get('q')
    if query:
        data = Platform.objects.filter(
            Q(church_name__icontains=query)|
            Q(descriptions__icontains=query)|
            Q(dominion__icontains=query)
        )
    context = {
        'data':data

    }
    return render(request, 'home/listing.html', context)

# def search(request):
#     query = request.GET.get('q')
#     if query:
#         plat = Platform.objects.filter(
#             Q(church_name=query),
#             Q(descriptions=query),
#         )
#     context = {
#         'plat':plat
#     }
#     return render(request, 'home/search.html', context)

class SearchView(ListView):
    model = Platform
    template_name ='home/search.html'
    context_object_name = 'data'

    def get_queryset(self): # new
        query = self.request.GET.get('q')
        if query:
            return Platform.objects.filter(
                Q(church_name__icontains=query) | Q(descriptions__icontains=query)
        )

def platfrom_data(request):
    platforms = serialize('geojson', Platform.objects.all())
    return JsonResponse(json.loads(platforms))

def single_church(request, id):
    data = Platform.objects.get(id=id)
    event = Event.objects.all()
    ads = ChurchAdverts.objects.all()
    denom = Denomination.objects.get(id=id)
    pastor = PastorsDetails.objects.get(id=id)
    context = {
        'data':data,
        'event':event,
        'ads':ads,
        'denom':denom,
        'pastor':pastor
    }
    return render(request, 'home/listing-single.html', context)

def leaders_view(request, id):
    leader = LeaderDetails.objects.get(id=id)
    data = Platform.objects.get(id=id)
    pastor = PastorsDetails.objects.get(id=id)
    denom = Denomination.objects.all()
    context = {
        'leader':leader,
        'data':data,
        'pastor':pastor,
        'denom':denom,
    }
    return render(request, 'home/leaders.html', context)

def feed_view(request):
    feed = Feed_list.objects.all()
    context = {
        'feed':feed
    }
    return render(request, 'home/feeds.html',context )

def comments(request, id):
    feed = Feed_list.objects.get(id=id)
    comment = Comment.objects.filter(post=feed,).order_by('-id')
    if request.method == 'POST':
        form = commentForm(request.POST)
        if form.is_valid():
           
            contents = form.cleaned_data['contents']
            # comments.save()
        return redirect('feed-details',id=id)
    form = commentForm()
    context = {
        'feed':feed,
        'comments':comment,
        'form':form
    }
    return render(request, 'home/more.html', context)