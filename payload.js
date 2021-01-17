const obj = document.querySelectorAll('input[id^="input-"]');
let str = null;

const exampleUserData = {
  firstname: 'Will',
  middlename: 'Kantor',
  lastname: 'Pringle',
  address: '200 XXX st',
  city: 'Kingston',
  postalCode: 'XXXXXX',
  phoneNumber: '3331114444',
  phoneExtension: '',
  jobTitle: [],
  jobCompany: [],
  jobLocation: [],
  school: 'University of Guelph',
  gpa: '3.68',
  socialWebsite: '',
  socialLinkedIn: 'https://www.linkedin.com/in/will-pringle/',
}

console.log(document.title);

for (let i = 0; i < obj.length; i++) {
  str = obj[i].outerHTML;
  str = str.slice(str.indexOf('data-automation-id'), str.length);
  str = str.slice(str.indexOf('\"') + 1, str.length);
  str = str.slice(0, str.indexOf('\"'));
  console.log(str);

  enterUserData(str, exampleUserData, obj[i]);
}

console.log(obj.length);

function enterUserData(type, userData, element) {
  if (type === 'legalNameSection_firstName') {
    element.value = exampleUserData.firstname;
  }
  else if (type === 'legalNameSection_middleName') {
    element.value = exampleUserData.middlename;
  }
  else if (type === 'legalNameSection_lastName') {
    element.value = exampleUserData.lastname;
  }
  else if (type === 'addressSection_addressLine1') {
    element.value = exampleUserData.address;
  }
  else if (type === 'addressSection_city') {
    element.value = exampleUserData.city;
  }
  else if (type === 'phone-number') {
    element.value = exampleUserData.address;
  }
  else if (type === 'phone-extension') {
    element.value = exampleUserData.address;
  }
  else if (
    type === 'jobTitle' || type === 'company' || type === 'location' 
    ) {
    console.log('job');
  }
  else if (type === 'school') {
    element.value = exampleUserData.school;
  }
  else if (type === 'gpa') {
    element.value = exampleUserData.gpa;
  }
  else if (type === 'website') {
    element.value = exampleUserData.socialWebsite;
  }
  else if (type === 'linkedinQuestion') {
    element.value = exampleUserData.socialLinkedIn;
  }
}


// send the page title as a  message
chrome.runtime.sendMessage(document.title);

/*
// Here is a list of attributes that are checked for in workday

legalNameSection_firstName
legalNameSection_middleName
legalNameSection_lastName
addressSection_addressLine1
addressSection_city
addressSection_postalCode
phone-number
phone-extension
school
gpa
website
linkedinQuestion
*/