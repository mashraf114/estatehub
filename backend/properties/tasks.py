from celery import shared_task

@shared_task
def send_listing_email():
    print("Email sent")
