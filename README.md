# ICT2101-2201-Team-Project

Project Description

## Development Workflow

1. Always commit to dev branch before main branch.
2. Do feature work only in ur own feature branch.
3. Commit regularly.
4. 

1. Every member should have their own branch with their names on it
2. Before starting to work on their own branches, the team should always pull changes from the main branches to ensure that their respective branches is up to date with the main branch.
3. The team should commit to their respective branches regularly
4. After committing the changes to the respective branches, pull changes from the main branch, ensure that there are no conflicts (reslove conflict if any)
5. If there are any changes made after pulling changes main branch, remember to commit the changes to the respective branches first
6. Raise a pull request
7. Pull request should be approved by the Scrum Master (Celine) or the Tech Lead (Chia Wei), at any point of time the Scrum Master or Tech Lead is not available, the pull request can be approved by the other team members. Members should not approve their own pull requests
8. When approving the pull request, the approver should input some comments before merging the branch to main branch.

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
