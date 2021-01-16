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
	const lastname = form.iblastname.value;
	const address = form.ibaddress.value;
    const city = form.ibcity.value;
	const province = form.ibprovince.value;
	const postalcode = form.ibpostalcode.value;
	const phonecode = form.ibphonecode.value;
	const phonenumber = form.ibphonenumber.value;
	const phoneext = form.ibphoneext.value;
	const jobtitle = form.ibjobtitle.value;
	const company = form.ibcompany.value;
	const joblocation = form.ibjoblocation.value;
	//const roledescription = form.ibroledescription.value;
	const school = form.ibschool.value;
	const field = form.ibfield.value;
	const gpa = form.ibgpa.value;
	const certific = form.ibcertific.value;
	const certificnum = form.ibcertificnum.value;
	const specialty = form.ibspecialty.value;
	const resumefile = form.ibresumefile.value;
	const linkedin = form.iblinkedin.value;
	const twitter = form.ibtwitter.value;
	const google = form.ibgoogle.value;
	const facebook = form.ibfacebook.value;
	const name = form.ibname.value;
	const employeeid = form.ibemployeeid.value;
	//const  = form.ib.value;

    console.log(firstname);
    console.log(middlename);
	console.log(lastname);
	console.log(address);
    console.log(city);
	console.log(province);
	console.log(postalcode);
	console.log(phonecode);
	console.log(phonenumber);
	console.log(phoneext);
	console.log(jobtitle);
	console.log(company);
	console.log(joblocation);
	//console.log(roledescription)
	console.log(school);
	console.log(field);
	console.log(gpa);
	console.log(certific);
	console.log(certificnum);
	console.log(specialty);
	console.log(resumefile);
	console.log(linkedin);
	console.log(twitter);
	console.log(google);
	console.log(facebook);
	console.log(name);
	console.log(employeeid);
	//console.log();
	
    console.log(form);
  });
});