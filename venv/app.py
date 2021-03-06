from topsecrets import SECRET_KEY
from db import db
from classes.car.dataProcessor import Processor
from flask import Flask, render_template, session, redirect, request, flash
from functools import wraps
from classes.user.models import User
from classes.challenge.models import Challenge
app = Flask(__name__)
app.secret_key = SECRET_KEY


# Decorators
def logged_in(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'loggedIn' in session:
            return redirect('/')
        else:
            return f(*args, **kwargs)

    return wrap


def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'loggedIn' in session:
            return f(*args, **kwargs)
        else:
            return redirect('/login')

    return wrap


def admin_only(f):
    @wraps(f)
    @login_required
    def wrap(*args, **kwargs):
        if session['user']['role'] == 'admin':
            return f(*args, **kwargs)
        else:
            return redirect('/')

    return wrap

# ROUTES

# Home Route such as: /


@app.route('/')
@login_required
def home():
    return render_template('home.html')

# Generic Routes such as: Login, Dashboard,


@app.route('/login', methods=['GET', 'POST'])
@logged_in
def login():

    if request.method == 'GET':
        return render_template('login.html')

    if request.method == 'POST':
        return User().login()


@app.route('/logout', methods=['GET', 'POST'])
def logout():
    return User().logout()


@app.route('/freeDriving', methods=['GET'])
def freeDriving():
    return render_template('/freeDriving/freeDriving.html')


@app.route('/freeDriving', methods=['POST'])
def sendMovementCommand():
    return Processor().sendMovementCommand()


@app.route('/freeDriving/getCarCommands', methods=['GET'])
def getMovementCommand():
    return Processor().getMovementCommand()


@app.route('/freeDriving/getSensorData', methods=['GET'])
def getSensorData():
    return Processor().getSensorData()


@app.route('/freeDriving/sensorData/<data>', methods=['GET', 'POST'])
def updateSensorData(data):
    res = Processor().updateSensorData(data)
    return res + "Data from request = " + data


# Challenge Routes
@app.route('/challenges', methods=['GET'])
@login_required
def viewChallenges():
    challenges = db.challenges.find()
    return render_template('/challenges/index.html', challenges=challenges)


@app.route('/tutorial', methods=['GET', 'POST'])
@login_required
def viewTutorial():
    challenge = db.challenges.find_one({'challengeID': "0"})
    return render_template('/challenges/tutorial.html', challenge=challenge)


@app.route('/challenges/<id>', methods=['GET', 'POST'])
@login_required
def viewChallenge(id):
    challenge = db.challenges.find_one({'challengeID': id})
    return render_template('/challenges/challenge.html', challenge=challenge)

# Admin Specific Routes such as Manage Users, Manage Challenges, View Student Progress


@app.route('/dashboard', methods=['GET'])
@login_required
def viewDashboard():
    return render_template('/dashboard/index.html')

# Admin Specific Routes such as Manage Users, Manage Games, View Student Progress

# Manage User
@app.route('/admin/manageUsers')
@admin_only
def viewManageUsers():
    return render_template('/admin/manageUsers/manageUsers.html')

@app.route('/admin/dashboard', methods=['GET'])
@admin_only
def viewAdminDashboard():
    return render_template('/admin/dashboard/index.html')


# Admin Specific Routes such as Manage Users, Manage Challenges, View Student Progress

# Manage Users
@app.route('/admin/manageUsers', methods=['GET'])
@admin_only
def manageUsers():
    userList = db.users.find()
    return render_template('/admin/manageUsers/manageUsers.html', userList=userList)


@app.route('/admin/manageUsers/createUser', methods=['GET', 'POST'])
@admin_only
def createUser():
    if request.method == 'GET':
        return render_template('/admin/manageUsers/createUser.html')

    if request.method == 'POST':
        return User().createUser()


@app.route('/admin/manageUsers/updateUser', methods=['GET', 'POST'])
@admin_only
def updateUser():
    if request.method == 'GET':
        return redirect('/')

    if request.method == 'POST':
        user = db.users.find_one({'_id': request.form.get('_id')})
        return render_template('/admin/manageUsers/updateUser.html', user=user)


@app.route('/admin/manageUsers/updateUserFlow', methods=['GET', 'POST'])
@admin_only
def updateUserFlow():
    if request.method == 'GET':
        return redirect('/')

    if request.method == 'POST':
        flash(User().updateUser())
        return redirect('/admin/manageUsers')


@app.route('/admin/manageUsers/deleteUser', methods=['GET', 'POST'])
@admin_only
def deleteUser():
    if request.method == 'GET':
        return redirect('/')

    if request.method == 'POST':
        flash(User().deleteUser())
        return redirect('/admin/manageUsers')

# Manage Challenge


@app.route('/admin/manageChallenges')
@admin_only
def viewManageChallenges():
    return render_template('/admin/manageChallenges/manageChallenges.html')


@app.route('/admin/manageChallenges/createChallenges', methods=['GET', 'POST'])
@admin_only
def viewCreateChallenges():

    if request.method == 'GET':
        return render_template('/admin/manageChallenges/createChallenges.html')

    if request.method == 'POST':
        flash(Challenge().createChallenge())
        return redirect('/admin/manageChallenges/createChallenges')

@app.route('/initialSetup', methods=['GET'])
def initialStartup():
    Challenge().insertChallenge()
    User().insertUser()
    return render_template('initialSetup.html')

@app.route('/admin/manageChallenges/updateChallenges', methods=['GET'])
@admin_only
def viewUpdateChallenges():
    return render_template('/admin/manageChallenges/updateChallenges.html')


# Profile Page
@app.route('/profile')
@logged_in
def viewProfile():
    userList = db.users.find()
    return render_template('/profile.html', userList=userList)


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
