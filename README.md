# hkca-esg-admin-webapp

## Development Guide

### Node.js
You will need Node.js to run this project. You can install Node.js by using `nvm` (Node Version Manager).

Download and install `nvm` by following the instruction in its website.
https://github.com/nvm-sh/nvm#installing-and-updating

Once you got `nvm` installed. Install Node.js and `npm` (Node Package Manager) by using this command.
```
$ nvm install 15
```
The above will install version 15 of Node.js. Verify that you can now use `node` and `npm`.
```
$ node -v
$ npm -v
```

<br>

### Database
You will need a local mysql database when working on tinyboom-webapp.
Download and install a mysql database in your local machine.

#### Database Setup
You will need the following:
1. A database (schema): `hkcadb`
2. A user with `username`/`password`: `hkcadbuser`/`xvw56kLnEev5tz6g`

#### Initial Table Definition and Initial Data
This webap will handle the creation of tables and records in your local setup.
You will have the following users by default (created during first run of the webapp):
- `dev.rowellpica@gmail.com`/`abc123`

<br>

### Source Code
The source code is hosted in github. Get the code my cloning it to your local machine
```
$ git clone git@github.com:JSESG/hkca-esg-admin-webapp.git
```

### Running the webdapp in your local machine
The webapp uses npm to download the dependencies.
```
$ cd hkca-esg-admin-webapp
$ npm install
```

To run this webapp (still in `hkca-esg-admin-webapp` directory):
```
$ npm start
```

In your browser, go to: http://localhost:1337

<br>

### Generate new page, api or model
Please check the generators here: https://sailsjs.com/documentation/reference/command-line-interface/sails-generate
