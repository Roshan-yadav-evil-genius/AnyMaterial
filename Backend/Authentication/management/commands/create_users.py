from django.core.management.base import BaseCommand, CommandError
from Authentication.models import User
import json,random

class Command(BaseCommand):
    help = 'Create users from a JSON fixture file'

    def add_arguments(self, parser):
        parser.add_argument('filename', nargs='+', type=str)

    def handle(self, *args, **options):
        for filename in options['filename']:
            with open(filename, 'r') as f:
                users = json.load(f)
                for user_data in users:
                    del user_data['id']
                    user = User.objects.create_user(userType=random.choice(["ST","TE"]),**user_data)
                    self.stdout.write(self.style.SUCCESS(f'Created user with id : {user.id} Email : {user.email}'))
