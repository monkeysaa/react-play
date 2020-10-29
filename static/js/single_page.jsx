"use strict";

function ClearHTML(e) {
  e.preventDefault();
  document.getElementById("home").innerHTML = "";
  document.getElementById("boo").style.display = "block";
}

function Homepage() {
  return (
    <React.Fragment>
      <section id="home">
        <p>Click <a href='/profile' onClick={ClearHTML}>here </a> to see your profile page!</p>
        <p><img src='/static/high5.jpg' /></p>
        <button type="button" onClick={ClearHTML} > Clear </button>
      </section>
      <div id="boo" style={{ display: 'none' }}>
        Boo!
        <p><img src='/static/boo.gif' /></p>
      </div>
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
    content.push(value);
  }

  return <div>{content}</div>
}


ReactDOM.render(
  <Homepage />,
  document.querySelector('#main')
);

ReactDOM.render(
  <PrintUsers />,
  document.querySelector('#users')
)
// render Homepage and then hierarchy
// Within Homepage, render Ghost + render Users
// Show ghost --> Show Users --> Show Users in React --> Add User --> Modals? --> CSS