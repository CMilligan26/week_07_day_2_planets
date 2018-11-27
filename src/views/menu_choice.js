const PubSub = require('../helpers/pub_sub.js')

const MenuChoice (nav){
  this.nav = nav;

}


MenuChoice.prototype.selectedOption(){
  for (link in this.nav){
    link.addEventListener('click', sendPlanet);
  }
}

MenuChoice.prototype.sendPlanet(){
  PubSub.publish("MenuChoice:planet-chosen", event.target.id);
}

module.exports = MenuChoice;
