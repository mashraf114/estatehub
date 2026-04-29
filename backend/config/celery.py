import os
from celery import Celery

# ضبط إعدادات ديجانجو الافتراضية
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

# هنا بقى اللعبة: لو المتغير ده اسمه app، يبقى لازم تناديه بـ config.celery:app
app = Celery('config')

app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()