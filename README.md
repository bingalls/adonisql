# Adonis v5 GraphQL Starter
See my Adonisql-spdr repo for the older Adonis v4 example.
Adonis.js made a disruptive change to Typescript, breaking the v4 examples you might find.

This is an example of a Careers site, where an email key posts a description.
To keep it simple, this only provides 

## Requirements
* nodejs > v13

### Recommended
* [Volta](https://volta.sh/) Ensures correct node version. Also as `brew install volta`

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
Skip this section, if you are happy to keep sqlite
Create empty database & grant permissions.
Edit database configuration in .env

### Migrations

Run the following command to run startup migrations.

```bash
cd adonisql
node ace invoke @adonisjs/lucid   # select your database driver
node ace build
node ace migration:run
node ace db:seed
```
## Notice
It might be necessary to disable CSRF in config/shield.js to allow the /graphiql development tool (i.e. route).
Re-enable CSRF for production
