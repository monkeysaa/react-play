"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <section id="welcome">
        <p>Click for <a href='/profile' onClick={DisplayProfile}> your profile page! </a> </p>
        <p>Link to <a href='/view_users' onClick={DisplayUsers}> display users. </a> </p>
        <p><img src='/static/high5.jpg' /></p>
        <button type="button" onClick={ClearHTML} > Clear </button>
      </section>      
      <div id="boo" style={{ display: 'none' }}>
        Boo!
        <p><img src='/static/boo.gif' /></p>
      </div>
      <section id="profile" style={{ display: 'none' }}>
        <p>(Your future profile)</p>
      </section>
    </React.Fragment>
  );
}


function User(props) {
  const { user } = props;
  return (
    <div>
      <h1>{user.email}</h1>
      <p>{user.password}</p>
    </div>
  )
}

function PrintUsers() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/view_users')
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, [])

  const content = []

  for (let [key, value] of Object.entries(users)) {
//    console.log(key, value);
    content.push(<p>{value}</p>);
  }

  return <div>{content}</div>
}


function ClearHTML() {
  document.getElementById("welcome").innerHTML = "";
  document.getElementById("users").innerHTML = "";
  document.getElementById("boo").style.display = "block";
}

function DisplayProfile(e) {
  e.preventDefault();
  document.getElementById("welcome").innerHTML = "";
  document.getElementById("boo").style.display = "block";
  document.getElementById("profile").style.display = "block";
}

function DisplayUsers(e) {
  e.preventDefault();
  document.getElementById("welcome").innerHTML = "";
  document.getElementById("users").style.display = "block";
  ReactDOM.render(
    <PrintUsers />,
    document.getElementById('users')
  );
}

ReactDOM.render(
  <Homepage />,
  document.querySelector('#main')
);


// render Homepage and then hierarchy
// Within Homepage, render Ghost + render Users
// Show ghost --> Show Users --> Show Users in React --> Add User --> Modals? --> CSS