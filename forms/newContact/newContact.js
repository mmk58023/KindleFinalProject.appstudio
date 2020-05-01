
hmbNewEntry.onclick=function(s){
  if (typeof(s) == "object") {
    return
} else {
    switch(s) {
    case "Statistics":
      ChangeForm(covidStatistics)
      break;
    case "Contact Information":
      ChangeForm(covidContactInformation)
      break;
    case "New Entry":
      ChangeForm(newContact)
      break;
    }
  }
}



btnNewEntry.onclick=function(){
    let firstName = inpFirstName.value
    let dbFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
    let lastName = inpLastName.value
    let dbLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()
    let phoneNumber = inpPhoneNumber.value
    let emailAddress = inpEmailAddress.value
    let dateOfContact = inpDateOfContact.value
    let durationOfContact = inpDurationOfContact.value
    let query = "INSERT INTO contacts (firstName,lastName,phoneNumber,email,dateOfContact,durationOfContact) VALUES ('" + dbFirstName + "', '" + dbLastName + "', '" + phoneNumber + "', '" + emailAddress + "', '" + dateOfContact + "', '" + durationOfContact + "')"
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mmk58023&pass=pok$Mon*dia9&database=mmk58023&query=" + query);

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // means the insert succeeded
            NSB.MsgBox("You have successfully added the contact!")
        } else
            NSB.MsgBox("There was a problem with adding the contact to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req.status);
    }  

}


newContact.onshow=function(){
  inpFirstName.value = ""
  inpLastName.value = ""
  inpPhoneNumber.value = ""
  inpEmailAddress.value = ""
  inpDateOfContact.value = ""
  inpDurationOfContact.value = ""
      hmbNewEntry.clear()
      for (i = 0; i <= forms.length - 1; i++)
        hmbNewEntry.addItem(forms[i])
}

btnClear.onclick=function(){
  inpFirstName.value = ""
  inpLastName.value = ""
  inpPhoneNumber.value = ""
  inpEmailAddress.value = ""
  inpDateOfContact.value = ""
  inpDurationOfContact.value = ""
}
