import React from 'react';
import CardList from "../cards/list/CardList";


export default function CardSpecific() {
    return (
      function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

var id = getQueryStringValue("id");
console.log(id);

var myData;
var cardImage = document.getElementById('cardImage');
var cardDetails = document.getElementById('cardDetails');

fetch('https://api.magicthegathering.io/v1/cards/' +  id)
.then((response) => {
    return response.json();
})
.then((result) => {
  showContent(result);
  myData = result.card;
})
.catch(error => alert("There was an error trying to process your request."))


function showContent(response) {
  var information = response.card;
  cardImage.innerHTML += "<img src=\"" + information.imageUrl + "\" width=\"100%\">";
  cardDetails.innerHTML += "<h2>" + information.name + "</h2>" + "<div><b>About:  </b>" + information.text + "</div>" + "<div><b>Rarity: </b>" + information.rarity + "</div>" + "<div><b>Color: </b>" + information.colors + "</div>";

};
 

    );
}
