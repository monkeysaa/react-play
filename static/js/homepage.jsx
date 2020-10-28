"use strict";

function Homepage() {
  return (
    <React.Fragment>
      Click <a href='/profile'>here </a> to see your profile page!
      <p><img src='/static/high5.jpg'/></p>
    </React.Fragment>
  );
}

function PrintUsers () {

  const [users, setUsers] = React.useState([])

  
  fetch('/view_users')
  .then(response => response.json())
  .then(data => console.log(data));
}


ReactDOM.render(
  <Homepage />, 
  document.querySelector('#main')
);
