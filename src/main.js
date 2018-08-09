import $ from 'jquery';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function()
{
  $("#dino").click(function(event)
    {
      event.preventDefault();
      let firstName = $('#firstName').val();
      $('#words').val();
      let lastName = $('#lastName').val();
      $('#paragraphs').val();

      let request = new XMLHttpRequest();
  //    let url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;
      let url = `http://api.icndb.com/jokes/random?escape=javascript&firstName=${firstName}&amp&lastName=${lastName}`;
      request.onreadystatechange = function()
      {
        if(this.readyState === 4 && this.status === 200)
        {
          let response = JSON.parse(this.responseText);
          getElements(response);
        }
      }
      request.open("GET", url, true);
      request.send();

      let getElements = function(response)
      {
        // let list = response.join().split(",").join(", ");
        //let list = response;
        $('#showIt').text(`${response.value.joke}`);
      }
    });
    });
