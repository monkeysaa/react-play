"use strict";

function Homepage() {
  return (
    <React.Fragment>
      Welcome, user!
      Click <a href='/profile'>here </a> to see your profile page!
      <p><img src='/static/high5.jpg'/></p>
    </React.Fragment>
  );
}

ReactDOM.render(
  <Homepage />, 
  document.querySelector('#app')
);
