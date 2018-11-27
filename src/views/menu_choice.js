const PubSub = require('../helpers/pub_sub.js')

const MenuChoice = function (nav){
  this.nav = nav;
}

MenuChoice.prototype.selectedOption = function (){
    this.nav.addEventListener('click', (event) => {
      this.clearPlanet();
      this.sendPlanet(event.target.id);
    });
}

MenuChoice.prototype.sendPlanet = function (id){
  PubSub.publish("MenuChoice:planet-chosen", id);
  event.preventDefault();
}

MenuChoice.prototype.clearPlanet = function (){
  const section = document.querySelector(".planet-details");
  section.textContent = '';
}



module.exports = MenuChoice;
