from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from model import connect_to_db #, User

app = Flask(__name__)
app.secret_key = "needs to be reset"
db = SQLAlchemy() # copied from Model.py

print('Connected to the db!')

# Copied from Model.py to debug database retrieval
class User(db.Model):
    """A user."""

    __tablename__ = 'users'

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)

    # activities = a list of Activity objects

    def __repr__(self):
        return f'<User user_id={self.user_id} email={self.email}>'
# End_Copy from Model.py to debug database retrieval

# next step: Print all users to the console
# print(User.query.all())
# next step: Print all users to console when get to view_users
# next: print inside html for view_users

@app.route('/')
def show_homepage():
    """Show the application's homepage."""

    return render_template('homepage.html')


# @app.route('/profile')
# def show_profile():
#     """Show the users profile page."""

#     return render_template('profile.html')

@app.route('/view_users')
def show_users():
    """Show all users."""
    
    users = User.query.all()
    user_list = []

    # for u in users:

    #     user_list.append({"user_id": u.user_id, "email": u.email, "password": u.password})

    # return jsonify({"user_list": user_list})

    user_dict = {}
    
    for u in users: 
        user_dict[u.user_id] = u.email
    
    return jsonify(user_dict)

    





if __name__ == '__main__':  #if name = server.py in server... b/c don't run this line unless you actually called server from console
    connect_to_db(app, 'postgresql:///edvid', echo=False) # Does this go here or in model.py?
    app.run(debug=True, host='0.0.0.0')
