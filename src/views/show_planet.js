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
  const list = document.createElement("ul");
  const dataArray = Object.values(planetData);
  dataArray.splice(dataArray.length-1, 1)
  for (const data of dataArray) {
  list.appendChild(this.createCustomElement('li',"textContent",data));
  }
  section.appendChild(list);
}

ShowPlanet.prototype.displayPlanetImage = function (planetData) {
  const section = document.querySelector(".planet-details");
  const image = this.createCustomElement('img', 'src', `../public/${planetData.image}`);
  section.appendChild(image);
}

ShowPlanet.prototype.createCustomElement = function (element,attr,value){
  debugger;
  const listItem = document.createElement(element);
  listItem[attr] = value;
  return listItem;
}

module.exports = ShowPlanet;
