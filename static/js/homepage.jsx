"use strict";

function ClearHTML() {
  document.getElementById("home").innerHTML = "";
  document.getElementById("boo").style.display = "block";
}

function Homepage() {
  return (
    <React.Fragment>
      <section id="home">
        <p>Click <a href='/profile'onClick={ClearHTML}>here </a> to see your profile page!</p>
        <p><img src='/static/high5.jpg' /></p>
        <button type="button" onClick={ClearHTML} > Delete page</button>
      </section>
      <div id="boo" style={{ display: 'none' }}>
        Boo!
        <p><img src='/static/boo.gif' /></p>
      </div>
    </React.Fragment>
  );
}


function PrintUsers() {

  const [users, setUsers] = React.useState([])


  fetch('/view_users')
    .then(response => response.json())
    .then(data => console.log(data));
}


ReactDOM.render(
  <Homepage />,
  document.querySelector('#main')
);
// render Homepage and then hierarchy
// Within Homepage, render Ghost 
// Show ghost --> Show Users --> Add User --> Modals? --> CSS