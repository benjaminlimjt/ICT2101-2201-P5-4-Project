# Project Guido

The goal of this project is to educate children (8-12 y/o) on programming essential via block coding. Through the robotic car Guido, the team plans to create a gamified system that would engage students with feedback in multiple ways, allowing children to get a better concept of logical programming through demonstration. The project will have a web portal, through which students can control the robotic car by building set commands. One core functionality of the web portal would be in-built games that students can play, involving maneuvering the robotic car through the web portal. Through gameplay, the objective is to effectively improve students’ understanding of logical programming by engaging students through visual feedback of the robotic car. To further improve students’ understanding of logical programming, the web portal will be designed to allow students to freely move the car, such that they can create their own games. 

# M3 Requirements

### [How To Run](#how-to-run)
### [Development Workflow](#development-workflow)
### [User Acceptance Testing (UAT)](#user-acceptance-testing)
### [Whitebox Testing](#whitebox-testing)


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

As part of workflow, there were to be four different branch types:

1. Main
2. Dev
3. Feature
4. Bugfix

## Main Branch

The main branch contains production-ready codes, codes that have been tested, finalized and ready to be released.

## Dev Branch

The dev branch contains code that have not been fully tested, but have been tested by automated Unit Tests and are ready to be pushed to main after testing. Feature branches branch off the dev branch.

## Feature Branch

The feature branch contains code of a specific feature, and is branched off by developers when working on features. Upon completion and testing of the feature, the feature branch is then merged to the dev branch and removed.

## Bugfix Branch

The bugfix branch contains code that hotfixes/bugfixes existing features, and can be branched off the dev branch, or feature branch. Upon completion of bugfixes, the bugfix branch is then merged to the dev/feature branch and removed.

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

## Use Cases 

| Use Case ID | Use Case Name | Use Case Purpose | Fulfilled (Y/N) | Reason of unfulfillment |
| ----------- | ------------- | ---------------- | --------------- | ----------------------- |
| UC1 | Authenticate User | Verify user credentials and grant them access to the web portal | Y | - |
| UC2 | Create User Account | Allow staff to create user accounts | Y | - |
| UC3 | Store user credentials | Allow web portal to store user credentials to the database | Y | - |
| UC4 | Update User Account | Allow staff to update user accounts | Y | - |
| UC5 | Delete User Account | Allow staff to delete user accounts | Y | - |
| UC6 | Create Game | Allow staff to create challenge | Y | - |
| UC7 | Update Game | Allow staff to update challenge | N | Implementation Limitations |
| UC8 | Delete Game | Allow staff to delete challenge | Y | - |
| UC9 | Display Data | Allow web portal to display sensor data from robotic car to user | Y | - |
| UC10 | Map path travelled by robotic car | Maps and displays the path travelled by the robotic car onto the web portal | N | Hardware Limitations |
| UC11 | Display List of Commands | Allow web portal to display the list of commands available to the users | Y | - |
| UC12 | Play block coding game | Allow users to play games through the web portal | Y | - |
| UC13 | Display previous actions of robotic car | Allow web portal to display previously executed commands of the robotic car | Y | - |
| UC14 | Award Users | Award users when games are completed | N | Low priority use case | 
| UC15 | View Student Progress | Allow staff to view user progress | N | Low priority use case |
| UC16 | Send sensor data to web portal | Allow robotic car to send sensor data to web portal | Y | - |
| UC17 | Move according to web portal commands | Allow robotic car to move according to commands received from the web portal | Y | - |

## User Acceptance Testing

User Acceptance Testing tests done in M3 has slight variations as compared to those created in M2 due to functionality changes (e.g. website having more features) 

The User Acceptance Testing video can be found [here](https://youtu.be/ytr7Rdkj_5U).

| ID | Test Case Description | Precondition | Steps | Expected Result | Result | P/F |
| -- | --------------------- | ------------ | ----- | --------------- | ------ | --- |
| TC1 | Login to the web portal with valid credentials | In Login page | 1. key in username: "belle" <br /> 2. input password: "P@ssw0rd" <br /> 3. Click Login | Navigated to Landing Page | Navigated to Landing Page | P |
| TC2 | Login to the web portal with invalid credentials | In Login Page | 1. key in username: "test user" <br /> 2. input password: "123" <br /> 3. Click Login | Pop up Alert "Invalid Credentials" | Pop up Alert "Invalid Credentials" | P
| TC3 | Login with incomplete credentials | In Login Page | 1. key in username: "test user" <br /> 2. Leave password empty <br /> 3. Click Login | System prompts user to enter password | System prompts user to enter password | P
| TC4 | Tutorial Feature | Logged into system | 1. Click on "How To Play" <br /> 2. When pop up step is shown click "Next" till the end of the tutorial, click finish tutorial | The page shows the next tutorial step when next is clicked | The page shows the next tutorial step when next is clicked | P
| TC5 | Create challenge feature | Logged into system as admin | 1. Select "Create Challenges from the navigation bar <br /> 2. Enter Challenge ID "1" <br /> 3. Enter Challenge Name "UAT test challenge" <br /> 4. Enter Description: "this is a test game" <br /> 5. Click on the tiles to create a map. <br /> 6. Click create challenge | Pop up Alert "Successfully created challenge!" | Pop up Alert "Successfully created challenge!" | P
| TC6 | Display a challenge | Logged into system <br /> Challenges created | 1. Click on "Challenges" <br /> 2. Select a Challenge | The system displays challenges selected | The system displays challenges selected | P
| TC7 | Completing the game | Logged into system <br /> Challenges created <br /> Challenge selected | 1. Drag commands to the Code Container according to the map shown <br /> "moveFront x2" <br /> "Turn Left" <br /> "move Front x2" <br /> "Turn Left" <br /> "move Front x3" <br /> 2. Click Run! | Car moves. <br /> Command History displays executed commands <br /> The system prompts "Successfully completed the puzzle!" | Car moves. <br /> Command History displays executed commands <br /> The system prompts "Successfully completed the puzzle!" | P
| TC8 | Failed Game (Bang Wall) | Logged into system <br />  Challenges created <br /> Challenge selected | 1. Drag Commands to the Code Container according to the map shown <br /> "Move Back" <br />  2. Click Run! | The system prompts "Failed the Puzzle" | The system prompts "Failed the Puzzle | P
| TC9 | Failed Game (Not enough steps) | Logged into system <br /> Challenges created <br /> Challenge selected | 1. Drag Commands to the Code Container according to the map shown <br /> "move Front x2" <br /> "Turn Left" <br /> "move Front x2" <br /> "Turn Left" <br /> 2. Click Run! | The system prompts "Sorry, all steps have been run but you have not reached target! Try again! :)" | The system prompts "Sorry, all steps have been run but you have not reached target! Try again! :)" | P
| TC10 | Free Driving Page | Logged into system | 1. Click on "Free Driving" <br /> 2. Click the buttons to move the car | Guido moves accordingly to the arrow pressed | Guido moves accordingly to the arrow pressed | P

## Whitebox Testing

### Test Cases for Test Suite (and where they reside in the repo)
```
Test Script: venv/test_testSuite.py

<Functions Tested>
/classes/car/dataProcessor.py
sendMovementCommand()
getMovementCommand()
getSensorData()
updateSensorData()

/classes/challenge/models.py
insertChallenge()
createChallenge()

/classes/challenge/models.py
login() --> start_session()
logout()
createUser()
updateUser()
deleteUser()
fetchByUsername("test")
fetchBy_id("11a8fb36cb8946e79ec26a6ca984675f")
```

### Code Coverage Statistics
![testcasesuiteresults](https://user-images.githubusercontent.com/72612659/144931902-f1345dc3-e3e7-48de-a904-ac322d4ffbe6.jpg)

### Instructions to run test suite

```
pip install coverage
pip install pytest
python -m pytest #run pytest script (test_testSuite.py)
python -m coverage run test_dataProcessor.py    # run script with coverage.py
python -m coverage report # show test coverage
```

### Whitebox Testing Video
The whitebox testing video of the test case being ran can be found [here](https://www.youtube.com/watch?v=2D2k87EQ6Ns).

## Directory Structure
```
│
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

