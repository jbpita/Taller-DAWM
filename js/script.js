/*
  1. Realice una petición asincrónica al unir las constantes URL y RECURSO

  2. Extraiga y reemplace en la plantilla por los valores correspondientes del JSON del segundo elemento con el título "Grave of the Fireflies":

  {{title}} por title
  {{image}} por image
  {{description}} por description, los primeros 70 caracteres y seguido por '...'
  {{original_title}} por original_title

  Utilice como referencia el sitio https://ghibliapi.herokuapp.com/#tag/Films para identificar mejor la estructura del JSON.

  3. Agregue el nuevo valor al inicio del elemento div con identificador "list"
 */

const URL = 'http://ghibliapi.herokuapp.com/'
const RECURSO = "films"
let plantilla = `
<div class="product product-container">
  <div class="inner-product">
    <div class="figure-image">
      <a href="single.html"><img src="{{image}}" alt="{{title}}"></a>
    </div>
    <h3 class="product-title"><a href="#">{{title}}</a></h3>
    <small class="price">{{original_title}}</small>
    <p>{{description}}</p>
    <a href="cart.html" class="button">Watch it</a>
    <a href="#" class="button muted">Read Details</a>
  </div>
</div> <!-- .product -->`