# servers-app

## Available scripts

- npm run start:dev - starts development server with hot reload
- npm run build - builds a production bundle
- npm run test - runs tests (only utility tests have been added)
- npm run format - formats code using prettier

## Running application (development)

- npm install -> npm run start:dev -> You can reach application via http://localhost:8080/

## Running application (bundle)

- you can also start application using docker-compose
- docker-compose up -> This will spin nginx server -> You can reach application http://localhost/

## Tech stack

- Written in typescript
- Webpack for bundling the code
- React router for navigation
- Styled-components for styling application
- State managment is done using react context and hooks
