let forms = ["Statistics", "Contact Information", "New Entry"]

hmbStatistics.onclick=function(s){
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

function callAPI(URL) {
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
        console.log(this.responseText);
        let message = ""
        let apiData = JSON.parse(this.responseText)
        for (i = 0; i <= 49; i++) {
            //console.log(`${apiData.results[i].name}`)
            message = message + "Country:" + apiData.response[i].country + "\n" + "Cases:" + apiData.response[i].cases.total + "\n" + "Deaths:" + apiData.response[i].deaths.total + "\n" + "\n"
    }
    // change name of textArea below
    txtStatistics.value = message
    // if want to add to database call a function here that does that
    // addToDatabase()
  }
});

xhr.open("GET", "https://covid-193.p.rapidapi.com/statistics");
xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "44e2526cdemsh9e968d77ec9aee0p176cb1jsncc53cadc1cb7");

xhr.send(data);
}



btnViewStatistics.onclick=function(){
  callAPI() 
}


covidStatistics.onshow=function(){
  // set size of text area
  // change name of text area below:
  txtStatistics_contents.style.height = "150px"
  txtStatistics.Width = "500px"
  hmbStatistics.clear()
  for (i = 0; i <= forms.length - 1; i++)
    hmbStatistics.addItem(forms[i])
}
