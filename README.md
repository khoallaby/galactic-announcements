# Galatic Advisors - Announcements

Hello team Galactic!

I was able to complete most of the requirements except I ran out of time implementing the pagination logic. 

I did get it working on the api side (see commented code in [routes/api.php](routes/api.php)) But not the React side.

Let me know how it looks!

---


## System Requirements
- [PHP](https://www.php.net/downloads.php) >= 8.2
- [Node JS](https://nodejs.org) >= 16.0
- [Composer](https://getcomposer.org/download/)

## Installation

1. Install the dependencies
```
composer install
npm install
npm run build
```

2. Set up the .env file
```
cp .env.example .env
php artisan key:generate
```

## Running the application

1. Run the PHP laravel server in 1 terminal window
```
php artisan serve
```

2. And run Vite (compiler) in a separate terminal window
```
npm run dev
```

3. Now open up [http://localhost:8000](http://localhost:8000) to view the app



---

## Mission Requirements

### Your Mission:

We have a need to display announcements to our users when they log into our system. We would like for you to implement a single page application that shows announcements based on the following criteria:
Frontend:
* The frontend framework should be the latest version of React or Vue.
* Over time there will be a lot of announcements so the app will need to handle paging over the data so that only a subset is retrieved and displayed at a time.
* The announcement should contain an `author`, a `date`, and the `body` defined in Markdown syntax.
* The page should render the announcement bodies in HTML with standard features such as hyperlinks working.
* You may use whatever tools and libraries you like, but make sure the result is something that we can run on our machine directly.
* Comment your code thoroughly


### Backend:

* Create a backend to feed announcements to your application
* This backend should be built with Laravel or Lumen
* Be sure to showcase your knowledge of Laravel’s design patterns
* You may pull in any packages or use any tools you deem useful for the mission
* Comment your code thoroughly
When complete please also include a detailed README explaining any steps needed to install and run the application on a local environment.
