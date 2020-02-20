from django.contrib import admin
from .models import *
from django.contrib.auth.models import Group
from django.contrib.gis.admin import OSMGeoAdmin
from django.contrib.gis.db import models
from leaflet.admin import LeafletGeoAdmin

admin.site.unregister(Group)


admin.site.register(BannerVideo)
admin.site.register(Event)
admin.site.register(ChurchAdverts)
admin.site.register(Denomination)
admin.site.register(PastorsDetails)
admin.site.register(LeaderDetails)
admin.site.register(Feed_list)
admin.site.register(Comment)

@admin.register(Platform)
class PlatformAdmin(LeafletGeoAdmin):
    list_display = ('church_name', 'geom')
