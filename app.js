// $(document).ready(init); 
$(document).ready(justmap); 

var map; 

function init(){
  $.ajax({
    type: "GET",
    url: "exercise_data.csv",
    dataType: "text",
    success: function(data) {
      processData(data, justmap);
    }
  });
}

// function processData(allText, next) {
//   console.log(Papa.parse(allText));
//   csvarray = Papa.parse(allText);
//   console.log(csvarray); 
//   // next(csvarray);
//   next();
// }

function processData(allText) {
  console.log(Papa.parse(allText));
  csvarray = Papa.parse(allText);
  console.log(csvarray); 
}


// justmap();
function justmap(){
  map = AmCharts.makeChart("chartdiv", {
    "type": "map",
    "theme": "light",
    "projection": "eckert3",
    "dataProvider": {
      "map": "worldLow",
      "getAreasFromMap": true
    },
    "areasSettings": {
      "selectedColor": "#CC0000",
      "selectable": true
    },
    /**
     * Add init event to perform country selection
     */
   "listeners": [{
      "event": "init",
      "method": function(e) {
        preSelectCountries( ["AR","AU","BR","CA","CN","CZ","DZ","ES","FR","HN","IN","KZ","NG","NI","RU","SD","TZ","US"]);
      }
    }]
  });
}

// function preSelectCountries(list) {
//   for(var i = 0; i < list.length; i++) {
//     var area = map.getObjectById(list[i]);
//     area.showAsSelected = true;
//     map.returnInitialColor(area);
//   }
// }

function preSelectCountries(list) {
  $.ajax({
    type: "GET",
    url: "exercise_data.csv",
    dataType: "text",
    success: function(data) {
      processData(data);
      for(var i = 0; i < list.length; i++) {
        var area = map.getObjectById(list[i]);
        area.showAsSelected = true;
        map.returnInitialColor(area);
      }
    }
  });
}