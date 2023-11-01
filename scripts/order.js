function calculatePrice(){
    var selectElement = document.getElementById("floatingSelect");
    var selectedValue = selectElement.value;
    if (selectedValue === "bubble")
    {
        var selectedSize = document.querySelector('input[name="options-outlined_A"]:checked');
        if (selectedSize) {
            var sizeType = selectedSize.id;
            var priceElement = document.getElementById("price");
            
            if (sizeType === "small-outlined") {
                var newPrice = 10;
                priceElement.textContent = newPrice;
            } else if (sizeType === "medium-outlined") {
                var newPrice = 15; 
                priceElement.textContent = newPrice;
            } else if (sizeType === "large-outlined") {
                var newPrice = 20; 
                priceElement.textContent = newPrice;
            }
        }
    }

    else if (selectedValue === "iced"){
        var selectedSize = document.querySelector('input[name="options-outlined_A"]:checked');
        if (selectedSize) {
            var sizeType = selectedSize.id;
            var priceElement = document.getElementById("price");
            
            if (sizeType === "small-outlined") {
                var newPrice = 20;
                priceElement.textContent = newPrice;
            } else if (sizeType === "medium-outlined") {
                var newPrice = 25; 
                priceElement.textContent = newPrice;
            } else if (sizeType === "large-outlined") {
                var newPrice = 30; 
                priceElement.textContent = newPrice;
            }
        }
    }
}

function validateForm() {

var name = document.getElementById("nameInput").value.trim();
if (name === "") {
    alert("Please enter your name.");
    return false; 
}

var selectedSize = document.querySelector('input[name="options-outlined_A"]:checked');
var selectElement = document.getElementById("floatingSelect");
var selectedValue = selectElement.value;
if (!selectedSize) {
    if (selectedValue === "selectPlease"){
        alert("Please select a drink.");
        return false;
    }
    else{
        alert("Please select a size.");
        return false;
    }
}
else if (selectedSize) {
    if(selectedValue === "selectPlease"){
        alert("Please select a drink first.");
        return false;
    }
}

var selectedIce = document.querySelector('input[name="options-outlined_B"]:checked');
if (!selectedIce) {
    alert("Please select Ice level.");
    return false;
}

var selectedSweetness = document.querySelector('input[name="options-outlined_C"]:checked');
if (!selectedSweetness) {
    alert("Please select Sweetness.");
    return false;
}

return true;

}


function placeOrder(event) {
    event.preventDefault(); // Prevent default form submission behavior
    if (validateForm()){
        //alert("Order placed successfully! Thank you for your order.");
        var name = document.getElementById("nameInput").value.trim();
        var selectElement = document.getElementById("floatingSelect");
        var selectedValue = selectElement.value;

        var orderData = [name, selectedValue];
        var selectedSize = document.querySelector('input[name="options-outlined_A"]:checked');
        var selectedIce = document.querySelector('input[name="options-outlined_B"]:checked');
        var selectedSweetness = document.querySelector('input[name="options-outlined_C"]:checked');
        if (selectedSize) {
            orderData.push(selectedSize.id);
        }
        if (selectedIce) {
            orderData.push(selectedIce.id);
        }
        if (selectedSweetness) {
            orderData.push(selectedSweetness.id);
        }

        //存储
        localStorage.setItem("orders", JSON.stringify(orderData));
        $("#orderSuccess").removeClass("d-none");
        $("#orderSuccess").html('<div id="orderSuccessMessage">'+"Order placed successfully! Thank you for your order."+'</div>');
        $("#orderSuccess").addClass("alert alert-success").attr("role","alert");
        $("#orderSuccess").fadeIn(500).delay(3000).fadeOut(500, function(){
            $("#orderSuccessMessage").remove();
            $("#nameInput").removeClass("error-free");
            $("#floatingSelect").removeClass("error-free");
            $("#preview").addClass("d-none");
        });
        // Reset the form to its initial state
        document.getElementById("listener").reset();
        // Reset the displayed price
        document.getElementById("price").textContent = "0";
    }   
}   


$(document).ready(function() {
    //Error Detection- Name
    $("#nameInput").on("input",function(){
        var name = $(this).val().trim();
        console.log(name);
        if(name == ""){
            $(this).addClass("error").removeClass("error-free");
        }else{
            $(this).addClass("error-free").removeClass("error");
        }
    })
    //Error Detection- Drink selection
    $("#floatingSelect").change(function(){
        var drinkSelection = $(this).val();
        if (drinkSelection == "selectPlease"){
            $(this).addClass("error").removeClass("error-free");
        } else {
            $(this).addClass("error-free").removeClass("error");
        }
         //Show image
       if(drinkSelection != "selectPlease"){
            $("#preview").removeClass("d-none");
            if (drinkSelection == "bubble"){
                $("#drinkImage").attr("src", "assets/bubble-milktea.png");
                $("#drinkImage").attr("alt", "Bubble Milktea");
            } else if (drinkSelection == "iced"){
                $("#drinkImage").attr("src", "assets/iced-latte.jpg");
                $("#drinkImage").attr("alt", "Iced Latte");
            };
        } else {
            $("#preview").addClass("d-none");
        };
    });

});
