'use strict';

$(document).ready(init);

function init(){
  $('#getRandom').click(getRandom);
  $('#evens').on('click', '.box', root);
}

function getRandom(){
  $.getJSON('https://qrng.anu.edu.au/API/jsonI.php?length=20&type=uint8', function(response){
    console.log(response.data);

    var arr = response.data;

    arr.forEach(function(e) {
      var $div = $('<div>');
      $div.addClass('box');
      if(e % 2 === 0) {
        $div.text(e);
        $('#evens').append($div);
      } else if(e % 3 === 0) {

        $div.text(e);
        $('#threes').append('<p>'+ e + '</p>');
      }
      else {
        $div.text(e);
        $('#others').append('<p>'+ e + '</p>');

      }
    })
  });
}

    function root(){
      var text = $(this).text();
      $(this).text(Math.sqrt(text).toPrecision(3));
    }
