const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents= function (){
  PubSub.subscribe("MenuChoice:planet-chosen", (event )=> {
    const planet = event.detail;
    PubSub.publish("SolarSystem:planet-data",
    this.getPlanetData(planet))
  });
}

SolarSystem.prototype.getPlanetData = function (id){
  let planetData = null;
  for (const planet of this.planets){
    if (planet.name === id){
      planetData = planet;
    };
  }
  return planetData;
}

module.exports = SolarSystem;
