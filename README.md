## Habit Tracker

- This Application is used to track the habits on daily and weekly basis.
- ReactJs and localstorage is used in creation of this application.

### Usage:

- This Application has 3 pages mainly.
- The first one is the **home page**, where a form is provided in order to create and add the habits.
- The second page is the **habits page**, where all the created habits are shown and there current day status is also shown.
- The user can able to edit the current day's status to done/not done/pending in this page.
- The last page is **week status page**, where all the habits along with there status from last 6 days and current day's status is shown.
- In this page we can able to change the status of the habits in past 6 days and we can also change the current day's status.

### Folder Structure

```

Habits-Record
    |
    |               |--->index.html
    |--->public---->|--->robots.txt
    |
    |
    |                                |--->App.js
    |                                |--->Habits.js
    |                                |--->Habits.module.css
    |                                |--->Header.js
    |            |--->components---->|--->Header.module.css
    |            |                   |--->Home.js
    |            |                   |--->Home.modules.css
    |            |                   |--->WeekStatus.js
    |            |                   |--->WeekStatus.module.css
    |            |
    |            |             |--->actions.js
    |--->src---->|             |--->actionTypes.js
    |            |--->redux--->|--->helper.js
    |            |             |--->reduces.js
    |            |             |--->store.js
    |            |
    |            |--->App.css
    |            |--->index.css
    |            |--->index.js
    |
    |
    |-->node_modules
    |-->.gitignore
    |--> package-lock.json
    |--> package.json

```

### How to setup the project on local system

- Clone this project into the system.
- Run the command **npm i** or **npm install** for installing all the required dependencies.
- Now Run the command **npm start**.
- Open the browser and navigate to **http://localhost:3000/** to start the application.

### Hosting link

- https://habit-record-abfe5.web.app
