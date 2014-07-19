function findMaxProfit(homesValue) {
     //Initializing to include the first home value
    var includingHomeValue = homesValue[0];

    //Setting the current max profit to 0
    var excludingHomeValue = 0;
    var excludingHomeValueNew;
   
    for (var i = 1; i < homesValue.length; i++) {
      // Current Maximum Profit excluding homesValue[i] */
      excludingHomeValueNew = (includingHomeValue > excludingHomeValue)? includingHomeValue: excludingHomeValue;
   
      // Current Maximum Profit including homesValues[i]
      includingHomeValue = excludingHomeValue + homesValue[i];
      excludingHomeValue = excludingHomeValueNew;
    }
   
    // Return Maximum Profit of includingHomeValue and excludingHomeValue
    return ((includingHomeValue > excludingHomeValue)? includingHomeValue : excludingHomeValue);
}

function displayMaxProfit(){
  var result = "";
  var hv = document.getElementById("homesvalues").value;
  if(hv !== "") {
    var homes_values = hv.split(" ");
    var homes_values_integers = [];
    
    for (var i = 0; i < homes_values.length; i++) {
      if(homes_values[i] !== "")
        homes_values_integers.push(parseInt(homes_values[i],10));
    } 

    result = findMaxProfit(homes_values_integers);
  }

  document.getElementById("maxprofit").innerHTML = result; 
  
}