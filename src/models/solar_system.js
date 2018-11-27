const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents(){
  PubSub.subscribe("MenuChoice:planet-chosen", (event )=> {
    planet = event.detail;
    this.getPlanetData(planet);
  });
}



module.exports = SolarSystem;
