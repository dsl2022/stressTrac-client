## Introduction
This is my first capstone project at Thinkful, StreSTrac is an inspiration I got based on my memory of the many years in the past when I suffered anxiety and stress during my college years.I wish I could build a tool to track my stress events and later I can analyze it. 

StreSTrac at its core is a logging tool for recording stress events, in addition it provides data analysis through charts based on the data entry from the users. 

<div style="display: flex; justify-content: center;">
<img src='/src/assets/images/readme-demo-1.png' alt='chart_3' width='600px'/>
</div>
figure a: Landing Page

<div style="display: flex; justify-content: center;">
<img src='/src/assets/images/readme-demo-2.png' alt='chart_3' width='600px'/>
</div>


figure b: Demo page 

StreSTrac has a beautiful client built with React(see figures above), and it has a fully functional backend with a CRUD-featured [server](https://github.com/JizongL/strestrac-server) built with Node.js and Express and the databases built with PostgreSQL, that stores user's entry data and handle the client's queries, and it also has a users registration system along with authentification function and the server is hosted on Heroku while the client is hosted on Zeit. 

New users can access the demo without registration and experience all features of StreSTrac, such as the charts, user data, adding data etc.(see figures below) 

<div style="display: flex; justify-content: center;">
<img src='/src/assets/images/readme-demo-4.png' alt='chart_3' width='600px' />
</div>
StreSTrac provides charts for insight

<div style="display: flex; justify-content: center;">
<img src='/src/assets/images/readme-demo-3.png' alt='chart_3' width='600px'/>
</div>
user events layout demo 

<div style="display: flex; justify-content: center;">
<img src='/src/assets/images/readme-demo-5.png' alt='chart_3' width='600px'/>
</div>
Sign in page


## Future improvement 

* Integrate more charts features

* Allow color theme customized

* Record more stress features. 

* Include a feedback system for users to share their thoughts about StreSTrac

* An About page



For progress of the project please
view the [The Kanban](https://github.com/JizongL/capstone-1-ideas/projects/3) to see project progress

## How to use this app for developer

### Clone repository to your local machine 

Make a local project folder, then clone the repository to that directory. 

```
mkdir project_dir && cd project_dir
git clone https://github.com/JizongL/stressTrac-client.git strestrac_client

```

### Install Node module

```
npm i

```

## To RUN TEST

```
npm t
```
### Start the app

```
npm start
```

