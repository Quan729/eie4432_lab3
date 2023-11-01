$(document).ready(function() {
    $.get("assets/drink-menu.json", function(data) {
      // Success Case Handling Here
      console.log("Sucess Load");
      console.log(data);
      data.forEach(function(drink){
        var cardComponents = 
            `
            <div class="col-lg-3 col-md-6 col-sm-12 row justify-content-center">
                <div class="drink py-2">
                    <img class="w-100 h-75 object-fit-cover border rounded" src="${drink.image}"
                        alt="${drink.name}" title="${drink.name}">
                    <h4 class = "drink-name ">${drink.name}</h2>
                    <botton type = botton class = "btn btn-success drink-type">${drink.type}</botton>
                    <p class = "drink-price w-auto">${drink.price}</p>
                </div>
            </div>
            `;
            console.log(cardComponents);
        $("#drink-menu").append(cardComponents);
      });
    }).fail(function(error) {
      // Fail Case Handling Here
      console.log("Error");
      $("#fail").removeClass("d-none");
      $("#fail").html('<div id="failMessage">'+"Failed to fatch drink menu. Please try again later."+'</div>');
      $("#fail").addClass("alert alert-danger").attr("role","alert");
      $("#orderSuccess").fadeIn(500);  
    });
  });