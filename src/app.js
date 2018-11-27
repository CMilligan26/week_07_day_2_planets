const planetsData = require('./data/planets.js');
const MenuChoice = require('./views/menu_choice.js');
const ShowPlanet = require('./views/show_planet.js');
const SolarSystem = require('./models/solar_system.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  const menuChoice = new MenuChoice(document.querySelector('.planets-menu'));
  menuChoice.selectedOption();
  const showPlanet = new ShowPlanet();
  showPlanet.bindEvents();
});
