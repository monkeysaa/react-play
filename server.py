from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from model import User, connect_to_db

app = Flask(__name__)
app.secret_key = "needs to be reset"


print('Connected to the db!')


# next step: Print all users to the console
# print(User.query.all())
# next step: Print all users to console when get to view_users
# next: print inside html for view_users

@app.route('/')
def show_homepage():
    """Show the application's homepage."""

    return render_template('homepage.html')


@app.route('/profile')
def show_profile():
    """Show the users profile page."""

    return render_template('profile.html')

@app.route('/view_users')
def show_users():
    """Show all users."""
    
    users = User.query.all()
    return render_template('view_users.html', users=users)



if __name__ == '__main__':  #if name = server.py in server... b/c don't run this line unless you actually called server from console
    connect_to_db(app) # Does this go here?
    app.run(debug=True, host='0.0.0.0')
