[Notable](https://aa-notable.herokuapp.com/#/)

Notable. It is a word that connotates something worthy of attention or remarkable. It is also a word that captures the essence of Notable, a full-stack web application, inspired by Evernote, and built with React/Redux, Ruby on Rails, and PostgreSQL. Notable enables users to readily create notebooks and populate them with copious notes, from grocery and to-do lists to workout plans and class lecture notes. With features including autosaving, rich-text editing, and the ability to search notebooks by title, you never miss a point with Notable!

## Features
Notable has many features, all of which work to give the user the best experience imaginable.

* Secure and safe user authentication that bootstraps user to prevent logout on resfresh
* Demo user button enables users to try the application for themselves
* Creation of a notebook on signup, so you can instantly get started! 
* Ability to add notebooks, change their titles, and delete them at the touch of a button
* Search for notebooks by title, autocomplete will show the notebooks that match your query
* Create notes at the touch of a button. Wherever you are in the app, Notable will add the note to your most recent notebook
* Edit notes with our rich-text editor, which empowers users to add inline-styling to the text of their notes
* Autosaving of notes on edit, so you don't need to worry about losing your progress
* Make a mistake or finish your to-do list? You can erase notes with the touch of a button

##Requirements
* Node ```v10.13.1```
* Rails ```5.2.3```
* Bundler version ```2.02```
* PostgreSQL

##Run Notable locally:
1. Clone github repo

2. Install the dependencies and packages:
  ```
  bundle install
  npm install
  ```
  
 3. Create local PostgreSQL database:
 ```
 bundle exec rails db:create
 ```
 
 4. Activate the rails server and webpack:
 ```
 rails server
 npm start
 ```
 
 5. Navigate to local localhost:3000 in your borwser
 
 6. Start using Notable!
 
##About the Project
Notable was designed and build over the course of ten days. A proposal was drafted, which included a database schema, a frontend sample-state, timeline, and frontend and backend routes. The timeline was systematically followed, from user authentication to rich text editing to ensure the creation of an aesthetic and functional app, which matches Evernote in both appearance and functionality.

##The Technology
###Backend
Notable was built on Ruby on Rails and is hosted on Heroku. Backend-frontend integration is achieved through rails controllers and JBuilder views. The rails controller send back JSON responses depending on which API route was hit. PostgreSQL is used to manage the database.

Creating an account on Notable is quick and seamless, requiring only an email and a password. However, behind the scenes, many steps are taken to ensure protection of users and their credentials. Built-in Cross-site request forgery (CSRF) protection is also provided, protecting users from malicious attacks

Here is a snipped from the User model, where some of these features can be seen:


Note the use of BCrypt for password salting and hashing. Plain text passwords are never stored in the database. Instead, passwords only exist for a moment as instance variables, where they are then salted and hashed with 128-bit encryption before commitment to the database.


