"use strict";

function Profile() {
  return (
    <React.Fragment>
      User, meet your profile page!
      Click <a href='/'>here </a> to return to the main menu!
      <p><img src='/static/high5.jpg'/></p>
      Click <a href='/view_users'>here </a> to see more users!
    </React.Fragment>
  );
}

ReactDOM.render(
  <Profile />, 
  document.querySelector('#app')
);
