// API
function pokeSearch() {
  let pokemon = $(".pokemon").val();
  console.log(pokemon);

  const request = new XMLHttpRequest();
  console.log(request);

  const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon.toLowerCase();

  request.open("GET", url);
  request.onload = function () {
    if (this.response === "Not Found") {
      $("#res").text(`Search result for: ${pokemon}`);
      $("#pokeId").text("This is not an official Pokemon in the Pokedex!");
    } else {
      let data = JSON.parse(this.response);
      console.log(data);
      if (request.status >= 200 && request.status < 400) {
        let frontImg = data.sprites.front_default;
        let pokeId = data.id;
        $("#res").text(`Search result for; ${pokemon}`);
        $("#pokeId").text(`This Pokemon's ID in the Pokedex is ${pokeId}`);
        $("#front").attr(`src`, frontImg);
      }
    }
  };

  request.send();
}

let cart = [];

function addToCart(item) {
  cart.push(item);
  alert(`${item} has been added to your cart!`);
}


// Purpose in index.html

var words = ['Our Purpose'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 30,
    speed = 110;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});