from flask import Flask, render_template, session, redirect
from functools import wraps
from classes.user.models import User
from topsecrets import SECRET_KEY
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
    return render_template('home.html')

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

@app.route('/challenges', methods=['GET'])
def viewChallenges():
    return render_template('/challenges/index.html')

# Admin Specific Routes such as Manage Users, Manage Games, View Student Progress

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

if __name__ == '__main__':
    app.run(debug = True)
