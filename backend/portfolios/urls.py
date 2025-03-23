from django.urls import path
from .views import PortfolioDetailAPIView

urlpatterns = [
    path('portfolio/<str:username>/', PortfolioDetailAPIView.as_view(), name='portfolio-detail'),
]
