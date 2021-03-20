from django.urls import path
from .views import TodoView
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('',TodoView,'todoview')

urlpatterns = router.urls
