from flask import Flask, render_template, session, redirect, request
from functools import wraps

from flask.helpers import url_for
from classes.user.models import User
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
    return render_template('home.html')

# Generic Routes such as: Login, Dashboard, 

@app.route('/login', methods=['GET','POST'])
#@logged_in
def login():

    if request.method == 'GET':
        return render_template('login.html')
    
    if request.method == 'POST':
        return User().login()

@app.route('/logout', methods=['GET', 'POST'])
def logout():
    return User().logout()

# Admin Specific Routes such as Manage Users, Manage Games, View Student Progress

# Manage Users
@app.route('/admin/manageUsers', methods=['GET'])
@admin_only
def manageUsers():
    return render_template('/admin/manageUsers/manageUsers.html')

@app.route('/admin/manageUsers/createUser', methods=['GET', 'POST'])
@admin_only
def createUser():
    if request.method == 'GET':
        return render_template('/admin/manageUsers/createUser.html')

    if request.method == 'POST':
        return User().createUser()

if __name__ == '__main__':
    app.run(debug = True)
