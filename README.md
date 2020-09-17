# TIKTOK CLONE App BACKEND

Tutorial reference from<br/>
[https://www.youtube.com/watch?v=g8yGxDMyGiE&t=2767s](https://www.youtube.com/watch?v=g8yGxDMyGiE&t=2767s)

## FRONTEND

- REACT
- Material UI
- Flexbox
- 3rd party Ticker, Scroll snap
- Firebase Hosting

## BACKEND

- NodeJS
- ExpressJS
- MongoDB
- Mongoose
- Heroku Hosting

1. Create package.js file `npm init`, (enter enter aja)
2. Install express and mongoose `$ npm i express mongoose`
3. Create Account or Sign In to [https://www.mongodb.com/](https://www.mongodb.com/)
4. Click `Project` > `+ New Project`
5. Name Your Project `tictok-clone`
6. In Add Member just Click `Create Project`
7. On Cluster Area click `Build a Cluster` button
8. Choose Shared Clusters and click `Create a Cluster` button
9. Choose `AWS` for Cloud Provider and choose `N. Virgiana for Region`
10. Choose `M0 Sandbox (Shared RAM, 512 MB Storage)` in Cluster Tier
11. Choose `MongoDB 4.2, No Backup` in Additional Settings
12. Choose `Cluster0` in Cluster Name
13. Click `Create Cluster` button
14. Install nodemon `$ npm i -g nodemon`
15. Run the server file `$ nodemon server.js`
16. To check GET Request with Postman

- Open postman
- Setup to GET request
- Fill the request url with `http://localhost:9000/` and click `SEND`
- Have a look the result in Body tab

17. To check GET Data from data.js with Postman

- Open postman
- Setup to GET request
- Fill the request url with `http://localhost:9000/v1/posts` and click `SEND`
- Have a look the result in Body tab

18. Setup Database in MongoDB cloud

- Click `Database Access button`
- Click `Add New Database User`
- Choose `Password` on Authentication Method
- Fill the user column with `admin` on Password Authentication
- Click `Autogenerate Secure Password` button and Click `SHOW` to display the password that has been generated and click `COPY` button. for example the password has been generated `hUquWla4CkVH5***`
- Click `Add User` button

19. Setup Network Access in MongoDB Cloud

- Click `Network Access` button
- Click `Add IP Address` button
- Click `ALLOW ACCESS FROM ANYWHERE`
- Click `Confirm`
