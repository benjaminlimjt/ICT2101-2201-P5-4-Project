# Project Guido

The goal of this project is to educate children (8-12 y/o) on programming essential via block coding. Through the robotic car Guido, the team plans to create a gamified system that would engage students with feedback in multiple ways, allowing children to get a better concept of logical programming through demonstration. The project will have a web portal, through which students can control the robotic car by building set commands. One core functionality of the web portal would be in-built games that students can play, involving maneuvering the robotic car through the web portal. Through gameplay, the objective is to effectively improve students’ understanding of logical programming by engaging students through visual feedback of the robotic car. To further improve students’ understanding of logical programming, the web portal will be designed to allow students to freely move the car, such that they can create their own games. 

## Development Workflow

1. Always commit to dev branch before main branch.
2. Do feature work only in ur own feature branch.
3. Before working on feature branches, members should pull changes from main branches to ensure that the feature branches are up to date with the dev branch.
4. The team should commit to the repository regularly.
5. When unit testing is done, commit/push final changes and initiate pull request to dev. 
6. After commiting the changes, pull any changes from the main branch and ensure that there are no conflicts. (resolve conflicts if any.)
7. Pull request should be approved by the Scrum Master (Celine) or the Tech Lead (Chia Wei), at any point of time the Scrum Master or Tech Lead is not available, the pull request can be approved by the other team members. Members should not approve their own pull requests.
8. When approving the pull request, the approver should input some comments before merging the branch to dev or main branch.
9. Delete feature branches after merging dev to main.

## Project Setup

## Installation instructions

### Windows

### Prerequisites

```
Python3 (3.6.x and above)
pip (21.x.x and above)
npm (6.14.x and above)
MongoDB (5.0.5 and above)
```

### [Missing Prerequisites?](#prerequisites-installation-guide)

### Setup Instructions

Run Powershell as Administrator and run the following commands:

```
git clone https://github.com/benjaminlimjt/ICT2101-2201-P5-4-Project.git

cd venv

virtualenv -p python3 .

Scripts\activate

pip install -r requirements.txt

cd static

npm init -y

npm install shepherd.js
```

Create the following file:

``topsecrets.py`` in the venv folder (venv/) with the following contents:

```
SECRET_KEY = '<randomizedSecret>'
```

where randomizedSecret is passphrase of choice.

## Errors during installation

### "Scripts\activate cannot be loaded because running scripts is disabled on this system."

Run Powershell as Administrator and run the following command:

``Set-ExecutionPolicy Unrestricted -Scope Process``


### "Error: EPERM: operation not permitted, rename"

Run Powershell as Administrator and run the following command:

``npm cache clean --force``


## How to Run

Run Powershell as Administrator and run the following commands:

```
Scripts\activate

python app.py
```

The website can be accessed at: http://localhost:5000

## Directory Structure
```
  
├── venv/            
│   └── classes/  ----- Classes should be placed into this folder as a sub-folder. (e.g. Car class in car folder)
│       └── car/ 
│       └── challenge/ 
│       └── user/ 
│   └── static/   ----- Assets should be placed into this folder into their respective sub-folders. (e.g. Images into img folder)
│       └── css/
│       └── fonts/
│       └── img/
│       └── js/
│       └── node_modules/
│   └── templates/ ----- Webpages should be placed into this folder into their respective sub-folders. (e.g. Challenge pages into challenges folder)
│       └── admin/
│       └── challenges/
│       └── dashboard/
│       └── freeDriving/
│   └── .gitignore
│   └── app.py
│   └── db.py 
│   └── requirements.txt
│   └── topsecrets.py
└── README.md
```

### Prerequisites Installation Guide

### Check if Python is already Installed

Open a command prompt and type the following command:

``python`` and press **Enter**. 

If Python is installed correctly, you should see an output similar to what is shown below.

```
Python 3.9.2 (tags/v3.9.2:1a79785, Feb 19 2021, 13:44:55) [MSC v.1928 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
```

### Installing Python on Windows

Download the latest version of Python 3 [here](https://www.python.org/downloads/)

### Check if pip is already Installed

Open a command prompt and type the following command:

``pip --version`` and press **Enter**.

If pip is installed correctly, you should see an output similar to what is shown below.

```
pip 21.3.1 from c:\users\User\appdata\local\programs\python\python39\lib\site-packages\pip (python 3.9)
```

### Installing Pip on Windows

1. Download [get-pip.py](https://bootstrap.pypa.io/get-pip.py) to a folder on your computer.
2. Open a command prompt and navigate to the folder containing the get-pip.py installer.
3. Run the following command:
``python get-pip.py``

### Check if npm is already Installed

Open a command prompt and type the following command:

``npm --version`` and press **Enter**.

If npm is installed correctly, you should see an output similar to what is shown below.

```6.14.14```

### Check if MongoDB is already Installed

Open a command prompt and type the folllowing command:

``mongo`` and press **Enter**.

If MongoDB is installed correctly, you should see an output similar to what is shown below.
```
MongoDB shell version v5.0.5
```

### Installing MongoDB on Windows

1. Download [MongoDB.msi](https://www.mongodb.com/try/download/community) to a folder on your computer.
2. Run the installer.

## Naming Conventions

variables/function names: camelCase  
component/model names: PascalCase
