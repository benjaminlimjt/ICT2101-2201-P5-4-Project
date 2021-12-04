from flask import Flask, render_template, session, redirect, request
from functools import wraps
from classes.user.models import User
from classes.challenge.models import Challenge
from topsecrets import SECRET_KEY
from db import db
app = Flask(__name__)
app.secret_key = SECRET_KEY


# Decorators
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
    return render_template('/dashboard/index.html')

# Generic Routes such as: Login, Dashboard, 

@app.route('/login', methods=['GET'])
def viewLogin():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    return User().login()
    
@app.route('/logout', methods=['GET', 'POST'])
def logout():
    return User().logout()

# Challenge Routes

@app.route('/challenges', methods=['GET'])
def viewChallenges():
    challenges = db.challenges.find()
    return render_template('/challenges/index.html', challenges=challenges)

@app.route('/challenges/<id>', methods=['GET', 'POST'])
def viewChallenge(id):
    challenge = db.challenges.find_one({'challengeID': id})
    return render_template('/challenges/'+id+'.html', challenge=challenge)

# Admin Specific Routes such as Manage Users, Manage Challenges, View Student Progress

@app.route('/dashboard', methods=['GET'])
def viewDashboard():
    return render_template('/dashboard/index.html')

@app.route('/admin/dashboard', methods=['GET'])
def viewAdminDashboard():
    return render_template('/admin/dashboard/index.html')

# Manage User
@app.route('/admin/manageUsers')
@admin_only
def viewManageUsers():
    return render_template('/admin/manageUsers/manageUsers.html')

@app.route('/admin/manageUsers/createUser', methods=['GET'])
@admin_only
def viewCreateUser():
    return render_template('/admin/manageUsers/createUser.html')

@app.route('/admin/manageUsers/createUser', methods=['POST'])
@admin_only
def adminCreateUser():
    return User().createUser()

# Manage Challenge
@app.route('/admin/manageChallenges')
#@admin_only
def viewManageChallenges():
    return render_template('/admin/manageChallenges/manageChallenges.html')

@app.route('/admin/manageChallenges/createChallenges', methods=['GET'])
#@admin_only
def viewCreateChallenges():
    return render_template('/admin/manageChallenges/createChallenges.html')

@app.route('/xx', methods=['GET'])
def xx():
    return Challenge().insertChallenge()

@app.route('/admin/manageChallenges/updateChallenges', methods=['GET'])
#@admin_only
def viewUpdateChallenges():
    return render_template('/admin/manageChallenges/updateChallenges.html')




if __name__ == '__main__':
    app.run(debug = True)
