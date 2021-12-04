from flask import Flask, render_template, session, redirect, request, flash
from functools import wraps
from classes.user.models import User
from db import db
from topsecrets import SECRET_KEY
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
    return render_template('/dashboard/index.html')

# Generic Routes such as: Login, Dashboard, 

@app.route('/login', methods=['GET','POST'])
@logged_in
def login():

    if request.method == 'GET':
        return render_template('login.html')
    
    if request.method == 'POST':
        return User().login()
    
@app.route('/logout', methods=['GET', 'POST'])
def logout():
    return User().logout()

@app.route('/challenges', methods=['GET'])
def viewChallenges():
    return render_template('/challenges/index.html')



# Admin Specific Routes such as Manage Users, Manage Games, View Student Progress

# Manage Users
@app.route('/admin/manageUsers', methods=['GET'])
@admin_only
def manageUsers():
    userList = db.users.find()
    return render_template('/admin/manageUsers/manageUsers.html', userList = userList)

@app.route('/admin/manageUsers/createUser', methods=['GET', 'POST'])
@admin_only
def createUser():
    if request.method == 'GET':
        return render_template('/admin/manageUsers/createUser.html')

    if request.method == 'POST':
        return User().createUser()

@app.route('/admin/manageUsers/updateUser', methods=['GET','POST'])
@admin_only
def updateUser():
    if request.method == 'GET':
        return redirect('/')
    
    if request.method == 'POST':
        user = db.users.find_one({'_id': request.form.get('_id')})
        return render_template('/admin/manageUsers/updateUser.html', user=user)

@app.route('/admin/manageUsers/updateUserFlow', methods=['GET','POST'])
@admin_only
def updateUserFlow():
    if request.method == 'GET':
        return redirect('/')
    
    if request.method == 'POST':
        flash(User().updateUser())
        return redirect('/admin/manageUsers')

@app.route('/admin/manageUsers/deleteUser', methods=['GET','POST'])
@admin_only
def deleteUser():
    if request.method == 'GET':
        return redirect('/')
    
    if request.method == 'POST':
        flash(User().deleteUser())
        return redirect('/admin/manageUsers')




# Manage Challenge
@app.route('/admin/manageChallenges')
#@admin_only
def viewManageChallenges():
    return render_template('/admin/manageChallenges/manageChallenges.html')

@app.route('/admin/manageChallenges/createChallenges', methods=['GET'])
#@admin_only
def viewCreateChallenges():
    return render_template('/admin/manageChallenges/createChallenges.html')

@app.route('/admin/manageChallenges/updateChallenges', methods=['GET'])
#@admin_only
def viewUpdateChallenges():
    return render_template('/admin/manageChallenges/updateChallenges.html')




if __name__ == '__main__':
    app.run(debug = True)
