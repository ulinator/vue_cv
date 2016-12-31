$(document).ready( function() {
  $('.subMenu').smint();
});

function randomizer(min,max) {
	var number = Math.floor(Math.random() * max + min);
	return number;
};

Vue.component('introduction', {
  template: '#introduction'
});

Vue.component('personalize', {
  template: '#personalize'
});

var app = new Vue({
  el: '#app',
  data: {
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false,
    isActive5: false,
    isActive6: false,
    isActive7: false,
    isActive8: false,

    name: 'Morgan Jackson',
    job: 'Frontend Developer',
    hobby: 'traveller',
    firstName: 'Morgan',
    lastName: 'Jackson',
    mainSkills: ['Semantic HTML','CSS3, also with preprocessors (LESS, SASS, SCSS)','JavaScript, also ES6','Polish (proficient) and English (native)'],
    secondarySkills: ['Angular.js','Vue.js','jQuery','RWD','SVG','React.js','CoffeeScript']
  },
  methods: {
  	randomizePerson: function() {
  		var rand1 = randomizer(0,6);
  		var rand2 = randomizer(0,6);
  		var rand3 = randomizer(0,6);
  		var rand4 = randomizer(0,6);

      this.firstName = data.name[rand1];
      this.lastName = data.surname[rand2];
  		this.job = data.job[rand3];
  		this.hobby = data.hobby[rand4];
  	},
  },
  filters: {
    lowercase: function(str){
      if(!str) {
        return "";
      }
      return str.toLowerCase();
    }
  },
  mounted: function() {
    var el = document.querySelector('.contact-info');
    setTimeout( function(){
      el.classList.add("active");
    }, 1000);
  }

});