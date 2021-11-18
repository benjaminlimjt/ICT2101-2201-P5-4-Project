# ICT2101-2201-Team-Project

Project Description

## Development Workflow

1. Every member should have their own branch with their names on it
2. Before starting to work on their own branches, the team should always pull changes from the main branches to ensure that their respective branches is up to date with the main branch.
3. The team should commit to their respective branches regularly
4. After committing the changes to the respective branches, pull changes from the main branch, ensure that there are no conflicts (reslove conflict if any)
5. If there are any changes made after pulling changes main branch, remember to commit the changes to the respective branches first
6. Raise a pull request
7. Pull request should be approved by the Scrum Master (Celine) or the Tech Lead (Chia Wei), at any point of time the Scrum Master or Tech Lead is not available, the pull request can be approved by the other team members. Members should not approve their own pull requests
8. When approving the pull request, the approver should input some comments before merging the branch to main branch.

## Project Setup

Install nodemon globally

```
npm i nodemon -g
```

Create .env file and enter necessary configurations (follow keys in .env.example)

```
// In root folder
touch .env
```

Install packages in both frontend and backend folders. Run `npm install` in root folder.

```
// In root folder
npm install
```

Run both frontend and backend applications concurrently. Run `npm run dev` in root folder.

```
// In root folder
npm run dev
```

## Frontend Folder Structure

assets - store all images or files needed for project

components - create a folder for each component inside this folder

constants - store constant variables to be used throughout the app

utils - useful code to use throughout the application

## Backend Folder Structure

config - database configurations and connections

constants - store constant variables to be used througout the app

controllers - functions to handle each request

middleware - middleware such as api authorization and rate limiter modules

models - models for each class

routes - routing for each request call

## Naming Conventions

variables/function names: camelCase  
component/model names: PascalCase
