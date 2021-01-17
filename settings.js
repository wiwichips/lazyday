console.log('hello world from settings.js');

// Put all onload AJAX calls here, and event listeners
$(document).ready(() => {


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
		
		const jobtitle2 = form.ibjobtitle2.value;
		const company2 = form.ibcompany2.value;
		const joblocation2 = form.ibjoblocation2.value;
		const roledescription2 = form.ibroledescription2.value;
		
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
			linkedin: linkedin,
			twitter: twitter,
			google: google,
			facebook: facebook,
			name: name,
			employeeid: employeeid,
		}

		console.log(name);
		console.log(employeeid);
	
    console.log(form);
	});
});

// function onButtonClicked (){
//   console.log('btnComment worked');
// }

// document.getElementById('plzworkbtn').addEventListener('click', onButtonClicked());