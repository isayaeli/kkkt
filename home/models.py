from __future__ import unicode_literals
from datetime import datetime
from django.db import models
from django.contrib.gis.db import models
from django.contrib.gis.geos import Point
from django.db.models import Manager as GeoManager
from django.contrib.auth.models import User
from django.utils import timezone
import math


class Platform(models.Model):
    users = models.ManyToManyField(User)
    dominion = models.CharField(max_length= 100, default= 'Lutheran')
    church_name = models.CharField(max_length=100, blank=True, null=True)
    region = models.CharField(max_length=100,blank=True, null=True)
    image = models.ImageField(upload_to='platform_image', blank=True, null=True)
    descriptions = models.TextField(blank=True, null=True)
    geom = models.PointField(blank=True, null=True)
    objects = GeoManager()

    def user_count(self):
        return self.users.count()
    

    def __str__(self):
        return self.church_name

class BannerVideo(models.Model):
    STATUS  = (
    ( 0 , 'Draft'),
    ( 1 ,  'Public')
    )
    name = models.CharField(max_length=100, blank=False, null=False)
    video = models.FileField(upload_to= "video" ,null = True, blank = True)
    status = models.IntegerField(choices=STATUS)
    create_on = models.DateTimeField(default= datetime.now)

    def __str__(self):
        return self.name

class Event(models.Model):

    EVENT_STATUS = (
            (0, 'NO'),
            (1,'YES')
        )

    is_live = models.BooleanField(choices=EVENT_STATUS,)
    title = models.CharField( max_length=120)
    event_date = models.DateTimeField(default= datetime.now)
    # venue = models.ForeignKey(Venue, on_delete=models.CASCADE)
    venue = models.CharField(max_length=255, blank=True, null=True)
    organiser = models.CharField(max_length=200,null=True,blank=True)
    description = models.TextField(blank=True)
    church = models.ManyToManyField(Platform)
    file = models.FileField(upload_to='files', null=True, blank=True)
    # slug = models.SlugField(max_length=200, unique=True)
    updated_on = models.DateTimeField(default= datetime.now)
    created_on = models.DateTimeField(default= datetime.now)
    attendees = models.ManyToManyField(User)
    # status = models.IntegerField(choices=ADVERTS_STATUS, default=0)

    def __str__(self):
        return self.title

class ChurchAdverts(models.Model):
    ADVERTS_STATUS = (
    (0, "Draft"),
    (1, "Publish")
    )
    church = models.ManyToManyField(Platform)
    title = models.CharField(max_length=200, unique=True)
    file = models.FileField(upload_to='files', null = True, blank=True)
    # slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')
    updated_on = models.DateTimeField(auto_now=True)
    description = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=ADVERTS_STATUS, default=0)

    class Meta:
        ordering = ['-created_on']
        verbose_name_plural = 'ChurchAdverts'

    def __str__(self):
        return self.title

class Denomination(models.Model):
    it_belongs_to = models.ForeignKey(Platform, on_delete=models.CASCADE)
    denomination_name = models.CharField(max_length=100, null=True, blank=True)
    create_on = models.DateTimeField(default=datetime.now)
    users= models.ManyToManyField(User, null= True, blank= True)

    class Meta:
        verbose_name_plural = "Denomination"

    def __str__(self):
        return self.denomination_name

class PastorsDetails(models.Model):
    ChurchDetails = models.ForeignKey(Platform, on_delete=models.CASCADE)
    pastor_name = models.OneToOneField(User,null= True, blank = True, on_delete= models.CASCADE)
    class Meta:
        verbose_name_plural = "Pastor"
    def __str__(self):
        return self.pastor_name.username
    

class LeaderDetails(models.Model):
    LEADERSHIP_TREE = (
        ('Mchungaji Kiongozi','Mchungaji Kiongozi'),
        ('Mchungaji Msaidizi','Mchungaji Msaidizi'),
        ('Muinjilisti','Muinjilisti'),
        ('Mzee wa Kanisa','Mzee wa Kanisa'),
        ('Mzee wa kanisa/Mama','Mzee wa kanisa/Mama'),

    )
    a_leader_for = models.ForeignKey(Platform, on_delete=models.CASCADE)
    leader_name = models.ForeignKey( User, on_delete=models.CASCADE, null=True, blank=True)
    leader_title = models.CharField(max_length=255, choices=LEADERSHIP_TREE)
    class Meta:
        verbose_name_plural = "Leader "
    def __str__(self):
        return self.leader_title


class Feed_list(models.Model):
    STATUS = (
    (0, "Draft"),
    (1, "Publish")
    )
    posted_by = models.ForeignKey(Platform, on_delete= models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(upload_to='feed_image', null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    status = models.IntegerField(choices=STATUS)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.posted_by} Church feed'

    def published(self):
        now = timezone.now()

        diff = now - self.updated
        if diff.days == 0 and diff.seconds >= 0 and diff.seconds < 60:
            seconds = diff.seconds
            if seconds == 1:
                return str(seconds) + " second ago"
            else:
                return str(seconds) + " seconds ago"
        
        if diff.days == 0 and diff.seconds >= 60 and diff.seconds < 3600:
            minutes = math.floor(diff.seconds/60)
            if minutes == 1:
                return str(minutes) + " minute ago"
            else:
                return str(minutes) + " minutes ago"
    
        if diff.days == 0 and diff.seconds >= 3600 and diff.seconds < 86400:
            hours = math.floor(diff.seconds/3600)
            if hours == 1:
                return str(hours) + " hour ago"
            else:
                return str(hours) + " hours ago"

        if diff.days >= 1 and diff.days < 30:
            days = diff.days
            if days == 1:
                return str(days) + " day ago"
            else:
                return str(days) + " days ago"
        
        if diff.days >= 30 and diff.days < 365:
            months = math.floor(diff.days/30)
            if months == 1:
                return str(months) + " month ago"
            else:
                return str(months) + " months ago"

        if diff.days >= 365:
            years = math.floor(diff/365)
            if years == 1:
                return str(years) + " year ago"
            else:
                return str(years) + " years ago"




class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Feed_list, on_delete=models.CASCADE)
    contents = models.TextField(max_length=100)
    # reply = models.ForeignKey('Comment', null=True, related_name='replies',on_delete=models.CASCADE)
    commented_on = models.DateTimeField(auto_now_add=True, auto_now=False)

    def __str__(self):
        return str(self.user.username)

    



