console.log('hello world from settings.js');

// Put all onload AJAX calls here, and event listeners
$(document).ready(() => {

  // listen for login submission
  $('#submit-button').submit((e) => {
    e.preventDefault();

    const form = document.getElementById('ib-first-name');

    console.log(form); 
  });

  $('#informationCenter').submit((e) => {
    e.preventDefault();
    console.log('button pressed');
    const form = document.getElementById('informationCenter');
    const firstname = form.ibfirstname.value;
    const middlename = form.ibmiddlename.value;
    const city = form.ibcity.value;
    console.log(firstname);
    console.log(middlename);
    console.log(city);
    console.log(form);
  });
});