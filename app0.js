justmap();
// $(document).ready(init); 

var csvarray; 
var map; 

function init(){
  $.ajax({
    type: "GET",
    url: "exercise_data.csv",
    dataType: "text",
    success: function(data) {
      processData(data, getmap);
    }
  });
}

// console.log(Papa);
// var papatest = Papa.parse("exercise_data.csv")
// console.log("papatest: ", papatest);
// Papa.parse("exercise_data.csv", {
//     complete: function(results) {
//         console.log("Finished:", results.data);
//     }
// });
// getmap(); 
// var map; 


function processData(allText, next){
  console.log(Papa.parse(allText));
  csvarray = Papa.parse(allText);
  console.log(csvarray); 
  next(csvarray) 

}


function getmap(csvarray){
  console.log("csvarray in getmap: ", csvarray);
  /**
   * Create the map
   */
   var map = AmCharts.makeChart("chartdiv", {
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
        preSelectCountries( ["AO","AR","AU","BR","CA","CN","CZ","DZ","ES","FR","HN","IN","KZ","NG","NI","RU","SD","TZ","US"], map);
      }
    }]
  });

 }

  /**
   * Function which extracts currently selected country list.
   * Returns array consisting of country ISO2 codes
   */
  //  function preSelectCountries(list, map) {
  //   console.log("map in preSelectCountries: ", map);
  //   for(var i = 0; i < list.length; i++) {
  //     var area = map.getObjectById(list[i]);
  //     area.showAsSelected = true;
  //     map.returnInitialColor(area);
  //   }
  // }



var map; 
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

function preSelectCountries(list) {
  for(var i = 0; i < list.length; i++) {
    var area = map.getObjectById(list[i]);
    area.showAsSelected = true;
    map.returnInitialColor(area);
  }
}