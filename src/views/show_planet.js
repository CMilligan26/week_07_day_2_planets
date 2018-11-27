const PubSub = require('../helpers/pub_sub.js')

const ShowPlanet = function (){

};

ShowPlanet.prototype.bindEvents = function (){
  PubSub.subscribe("SolarSystem:planet-data", (event) => {
    const planetData = event.detail;
    this.displayPlanetDetails(planetData);
    this.displayPlanetImage(planetData);
  })
}

ShowPlanet.prototype.displayPlanetDetails = function (planetData){
  const section = document.querySelector(".planet-details");
  const list = document.createElement("div");
  list.className = 'planet-details';
  const dataArray = Object.values(planetData);
  const dataKeys = Object.keys(planetData);
  dataArray.splice(dataArray.length-1, 1)
  for (const data of dataArray) {
  list.appendChild(this.createCustomElement('p',"textContent",`${dataKeys[dataArray.indexOf(data)].toUpperCase().replace('_', ' ')}: ${data}`));
  }
  section.appendChild(list);
}

ShowPlanet.prototype.displayPlanetImage = function (planetData) {
  const section = document.querySelector(".planet-details");
  const image = this.createCustomElement('img', 'src', `../public/${planetData.image}`);
  image.className = "planet_image";
  section.appendChild(image);
}

ShowPlanet.prototype.createCustomElement = function (element,attr,value){
  const listItem = document.createElement(element);
  listItem[attr] = value;
  return listItem;
}

module.exports = ShowPlanet;
