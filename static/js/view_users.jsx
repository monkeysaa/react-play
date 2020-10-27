"use strict";

function ViewUsers() {
  return (
    <React.Fragment>
      See all the users!
      Click <a href='/'>here </a> to return to the main menu!
      <p><img src='/static/high5.jpg'/></p>
    </React.Fragment>
  );
}

ReactDOM.render(
  <ViewUsers />, 
  document.querySelector('#app')
);
