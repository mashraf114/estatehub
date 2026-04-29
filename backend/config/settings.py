INSTALLED_APPS = [
    'properties',
    "rest_framework",
    "corsheaders",
    "accounts",
    "properties",
]

REST_FRAMEWORK = {
 "DEFAULT_AUTHENTICATION_CLASSES": (
   "rest_framework_simplejwt.authentication.JWTAuthentication",
 )
}

CORS_ALLOW_ALL_ORIGINS = True