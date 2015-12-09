# COMP388FrontEnd
This is the front end for the final project in Web Services Programming at Loyola University Chicago, taught by Dr. Berhane Zewdie.

## Project Overview
This project issues POST and GET requests on a Heroku backend with our RESTful API. We use this to create a front-end for  
a mocked e-commerce site. We use HATEOAS by parsing through XML from backend responses to generate links dynamically to operate our  
front-end.

## Launching our Front End
In order to launch our front end project...

* Clone our repo  
* cd into the root directory  
* execute: python -m SimpleHTTPServer 8000 (note: you can launch this on your server of choice, we just chose 8000)  
* Ensure your browser has Javascript enabled
* As a precaution, the best experience of our site's front-end is achieved through executing: localStorage.clear(), as we emulate user sessions with local storage tokens.
* Navigate to http://127.0.0.1:8000 on your web browser  

You are now at our project's homepage! Enjoy your time at Zewdie Market.
