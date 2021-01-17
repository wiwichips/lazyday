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
		const roledescription = form.ibroledescription.value;
		const school = form.ibschool.value;
		const field = form.ibfield.value;
		const gpa = form.ibgpa.value;
		const certific = form.ibcertific.value;
		const certificnum = form.ibcertificnum.value;
		const specialty = form.ibspecialty.value;
		const skills = form.ibskills.value;
		const resumefile = form.ibresumefile.value;
		const linkedin = form.iblinkedin.value;
		const twitter = form.ibtwitter.value;
		const google = form.ibgoogle.value;
		const facebook = form.ibfacebook.value;
		const name = form.ibname.value;
		const employeeid = form.ibemployeeid.value;
		//const  = form.ib.value;

		const jobtitle2 = 'XXX - NOT ASSIGNED TO ANYTHING YET';
		const company2 = 'XXX - NOT ASSIGNED TO ANYTHING YET';
		const joblocation2 = 'XXX - NOT ASSIGNED TO ANYTHING YET';
		const roledescription2 = 'XXX - NOT ASSIGNED TO ANYTHING YET';

		const exampleUserData = {
			firstname: firstname,
			middlename: middlename,
			lastname: lastname,
			address: address,
			city: city,
			province: province,
			postalCode: postalcode,
			phoneNumber: phonenumber,
			phoneCode: phonecode,
			phoneExtension: phoneext,
			jobTitle: [
				jobtitle,
				jobtitle2,
			],
			jobCompany: [
				company,
				company2,
			],
			jobLocation: [
				joblocation,
				joblocation2,
			],
			roledescription: [
				roledescription,
				roledescription2,
			],
			school: school,
			field: field,
			gpa: gpa,
			certific: certific,
			certificnum: certificnum,
			specialty: specialty,
			skills: skills,
			resumefile: resumefile,
			socialWebsite: '',
			socialLinkedIn: linkedin,
		}

		console.log(twitter);
		console.log(google);
		console.log(facebook);
		console.log(name);
		console.log(employeeid);
		//console.log();
	
    console.log(form);
	});
	
	$('#add_button').submit((e) => {
    e.preventDefault();

    console.log('ADD BUTTON WAS JUST PRESSED');
  });


});

// $(document).ready(function() {
// 	var max_fields      = 16;
// 	var wrapper   		= $(".input_fields_wrap");
// 	var add_button      = $(".add_field_button");
	
// 	var x = 0;
// 	$(add_button).click(function(e){
// 		e.preventDefault();
// 		if(x < max_fielfds){ 
// 			x++ +4; 
// 			$(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field ">Remove</a></div>'); 
// 		}
// 	});
	
// 	$(wrapper).on("click",".remove_field", function(e){ 
// 		e.preventDefault(); $(this).parent('div').remove(); x--;
// 	})
// });