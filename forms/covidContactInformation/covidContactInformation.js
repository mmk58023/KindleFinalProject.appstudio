
hmbContacts.onclick=function(s){
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


covidContactInformation.onshow=function(){
    // set height of textarea control
    txtContacts_contents.style.height = "100px"
    txtContacts.Width = "500px"
      hmbContacts.clear()
      for (i = 0; i <= forms.length - 1; i++)
        hmbContacts.addItem(forms[i])
}


btnViewContacts.onclick=function(){
    query = "SELECT * FROM contacts"
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mmk58023&pass=pok$Mon*dia9&database=mmk58023&query=" + query);

    if (req.status == 200) { //transit worked.
        // req1.responseText is a JSON object with the results of the query in it.
        // Now to format it in a nicer format that you can work with - 
        // parse it from JSON object (JS Object Notaton) into an array that holds
        // each row as an array in it. 
        
        results = JSON.parse(req.responseText)
        console.log(results)
        
    if (results.length == 0)
        NSB.MsgBox("There are no contacts.")
    else {        
        // output all of the contacts
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + "Name: " + results[i][1] + " " + results[i][2] + "\n" + "Phone: " + results[i][3] + "\n" + "Email: " + results[i][4] + "\n" + "Date of Contact: " + results[i][5] + "\n" + "Duration of Contact: " + results[i][6] + " hour(s)" + "\n" + "\n"
        txtContacts.value = message
    } // end else

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req.status)

}
