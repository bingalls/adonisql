# Adonis v5 GraphQL Starter
See my Adonisql-spdr repo for the older Adonis v4 example.
Adonis.js made a disruptive change to Typescript, breaking any v4 examples you might find.

This is a simple example of a Careers site, where an email key posts a description.
Current v0.3 is stable, but awaits upgrade of Adonis testing library

## Requirements
* nodejs >= v14.x LTS
* sqlite or other database

## Setup

Use the adonis command to install the blueprint

```bash
git clone https://github.com/bingalls/adonisql.git
cd adonisql
npm install
cp .env.example .env
node ace key:generate   #copy generated key into .env
npm run start
```

## Run
`open http://127.0.0.1:3333/graphiql` # OSX; Linux: `xdg-open`

In the left graphiql window, try these example graphql statements
* QUERY: ` {careers{email, description}} `
* ` {career{email, description}} `    # first listing, only
* ` mutation{ createCareer(email: "email@example.com", description: "job description") } `

## Database Option
Sqlite is the default database for development.
Create empty database & grant permissions.
Edit database configuration in .env
Note that env.ts type-checks your .env

### Migrations
Run the following command to run startup migrations.

```bash
cd adonisql
node ace invoke @adonisjs/lucid   # select your database driver
node ace build
```
If the following commands are available, run them. This section is impacted
by Adonis v5 coming out of RC status.
```bash
node ace migration:run
node ace db:seed
```
## How to Use
Currently, this serves a simplistic example API for a job posting site, where 
each posting has an email address & description.
Change this to your need, by editing 
* app/data/schema.ts
* app/data/resolvers.ts
After changing the name of your schema from Careers, update
* app/Models/Career.ts
* start/routes.ts

## Notice
It might be necessary to disable CSRF in config/shield.js to allow the /graphiql development tool (i.e. route).
Re-enable CSRF for production

Npm package dependencies can be version sensitive. Upgrade carefully in
small increments, and stay with Node LTS versions.

Adonisjs v5 rc does not yet support unit test creation.
[A v4 TDD tutorial may help you
](https://dev.to/michi/tdd-course-with-adonisjs-1-let-s-build-a-simple-forum-199)

