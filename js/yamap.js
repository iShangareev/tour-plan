ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [7.838121727868376, 98.29886040139762],
    zoom: 15,
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [7.838121727868376, 98.29886040139762], // координаты точки
    },
  });
  myMap.geoObjects.add(myGeoObject);
}
