var Navbar = {
  templateUrl: require('./templates/navbar.html'),
  scope: {},
  controller: function(){

  },
  controllerAs: 'ctrl'
}

angular
  .module('williams')
  .component('navbar', Navbar)
