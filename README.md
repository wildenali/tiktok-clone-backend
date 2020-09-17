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
- Click `Autogenerate Secure Password` button and Click `SHOW` to display the password that has been generated and click `COPY` button. for example the password has been generated `lFAYiX3ykiGi6TDd`
- Click `Add User` button

19. Setup Network Access in MongoDB Cloud

- Click `Network Access` button
- Click `Add IP Address` button
- Click `ALLOW ACCESS FROM ANYWHERE`
- Click `Confirm`

20. Setup Clusters, (after point 4,5,6,7,8,9,10,11,12,13)

- Click `Clusters` button
- Click `Connect` button
- Click `Connect yout application` button
- Click `Copy` button to copy the url for connecting our app to mongodb cloud. example `mongodb+srv://admin:<password>@cluster0.fiukr.mongodb.net/<dbname>?retryWrites=true&w=majority`
- Create constanta in server.js and paste the url
- Change `<password>` with password has been generated
- Change `<dbname>` with `tiktok-clone`

21. POST request

- Open postman
- Setup to POST request
- Fill the request url with `http://localhost:9000/v2/posts`
- Click `Body` > `raw` > change form `Text` to `JSON(application/json`
- Fill with

```
{
	"url": "/Videos/contoh2.mp4",
	"channel": "wildenali",
	"description": "Wow Epic MERN TOKTOK Clone App",
	"song": "Hey whatsup cool 3 2 1 clone the door",
	"likes": "1200",
	"messages": "120",
	"shares": "12"
}
```

- Click `Send` button
- Have a look for result

22. Check the database in mongodb cloud after step 21

- Click `COLLECTIONS` button
- Have a look for the result
