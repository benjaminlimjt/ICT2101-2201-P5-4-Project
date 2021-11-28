# ICT2101-2201-Team-Project

Project Description

## Development Workflow

1. Always commit to dev branch before main branch.
2. Do feature work only in ur own feature branch.
3. Before working on feature branches, members should pull changes from main branches to ensure that the feature branches are up to date with the dev branch.
4. The team should commit to the repository regularly.
5. When unit testing is done, commit/push final changes and initiate pull request to dev. 
6. After commiting the changes, pull any changes from the main branch and ensure that there are no conflicts. (resolve conflicts if any.)
7. Pull request should be approved by the Scrum Master (Celine) or the Tech Lead (Chia Wei), at any point of time the Scrum Master or Tech Lead is not available, the pull request can be approved by the other team members. Members should not approve their own pull requests.
8. When approving the pull request, the approver should input some comments before merging the branch to dev or main branch.

## Project Setup

Installation instructions

Windows

```
cd venv

virtualenv -p python3 .

Scripts\activate

pip install -r requirements.txt
```

to run:

``python app.py``

Whenever libraries are installed through pip, please update requirements.txt with the following command:

``pip freeze > requirements.txt``

http://localhost:5000

# Errors

Scripts\activate cannot be loaded because running scripts is disabled on this system.

``Set-ExecutionPolicy Unrestricted -Scope Process``


# NOTE, AFTER INSTALLATION, BEFORE YOU DO ANYTHING, please do ``Scripts\activate`` to activate the venv 
you should see (venv) <Directory> in your command prompt/wsl/etc

  
## Directory Structure
```
  
├── venv/            
│   └── classes/ # Store Classes here
│       └── user/ # Files belonging to user class
│   └── static/
│       └── css/ # CSS files
│       └── js/ # Javascript files
│   └── templates/ # Pages
│       └── admin/ # Pages belonging to admin
|       └── base.html
|       └── login.html
│   └── .gitignore
│   └── app.py # Main
│   └── db.py # DB Config File
│   └── requirements.txt
└── README.md
```
  
## Frontend Folder Structure
  
```
.
├── venv/            
│   └── static/
│       └── css/ # CSS files
│       └── js/ # Javascript files
│   └── templates/ # Pages
│       └── admin/ # Pages belonging to admin
|       └── base.html
|       └── login.html
│   └── .gitignore
│   └── app.py # Main
│   └── db.py # DB Config File
```
  
## Backend Folder Structure

```
.       
├── venv/            
│   └── classes/ # Store classes here
│       └── user/ # Files belonging to user class
│   └── static/ 
│       └── css/ # CSS files
│       └── js/ # Javascript files
│   └── .gitignore
│   └── app.py # Main
│   └── db.py # DB Config File
```

## Naming Conventions

variables/function names: camelCase  
component/model names: PascalCase
