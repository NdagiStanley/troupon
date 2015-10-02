from django.conf.urls import url
from .views import SingleDealView, DealView


urlpatterns = [
    url(r'^(?P<deal_id>\d+)/$', SingleDealView.as_view(), name='single_deal'),
    url(r'^$', DealView.as_view(), name='deal'),
]
