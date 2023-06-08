# My Full-Stack eCommerce app
This app is built with :
- Django : for the backend
- React : for the frontend






## Environment
- LOCAL: React
    - Mettre dans le package.json : `"proxy": "http://localhost:8000/"` afin de ne pas retaper cette URL base dans les components

## Dependencies
- Voir le fichier requirements pour le backend Django
- Front end React :
    - react-scripts: -> 6 vulnerabilities. why ?
    - react-bootstrap
    - react-router-dom : #TODO
    - react-router-bootstrap : #TODO
    - axios : pour fetch les apis
    - redux : conteneur d'etats
    - react-redux : extension redux pour react
    - redux-devtools-extension : pour se connecter à l'extension sur le navigateur
    - reduxjs/toolkit : containing redux , redux-thunk (for asynchronous actions)
    - "history": "^4.10.1" : https://stackoverflow.com/questions/69502147/changing-from-redux-to-redux-toolkit


- Back end Django :
    - django-storages : django-storages is a collection of custom storage backends for Django (support AWS S3, Azure Storage..)
        - requirements : `pip install boto3`



## Deployment
- All frontend folder app is put in Django src (app root) folder
Execute the command from the react frontend folder : `npm run build` to get an optimized react production build
- Heroku : 
    - add Procfile in manage.py folder and add `web: gunicorn projet_name(here 'backend').wsgi --log-file -`
    - add runtime.txt in manage.py folder and add `python-{version}`
    - app site : set buildpack -> python
    - install : 
        - gunicorn
        - django-heroku
    - others : see settings > section heroku
    - be sure no extra services (add-ons..) in activated on web app
    - ### MONITORING :
        - Check who have access to the app : `heroku access -a app_name`
        - Open live logs of app : `heroku logs app_name`

## Troubleshoots
- if error while deploying : `Error while running '$ python manage.py collectstatic --noinput'.`, set in heroku web app the ENV VAR `DISABLE_COLLECTSTATIC=1` 
