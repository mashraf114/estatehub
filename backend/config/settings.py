INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    'properties',
    "rest_framework",
    "corsheaders",
    "accounts",
]

REST_FRAMEWORK = {
 "DEFAULT_AUTHENTICATION_CLASSES": (
   "rest_framework_simplejwt.authentication.JWTAuthentication",
 )
}

CORS_ALLOW_ALL_ORIGINS = True

CELERY_BROKER_URL = 'redis://localhost:6379/0'
CELERY_RESULT_BACKEND = 'redis://localhost:6379/0'