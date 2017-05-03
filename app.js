var map; 
justmap();
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