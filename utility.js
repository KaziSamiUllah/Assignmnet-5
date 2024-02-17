function changeInnerTextByID(elemetnID , Text){
document.getElementById(elemetnID).textContent = Text;
}
function getValueById(ID){
   var inputValue = document.getElementById(ID).value
   return inputValue;
}

function addAttributeByID(ID, attribure){
    document.getElementById(ID).classList.add = attribure;
}
function removeAttributeByID(ID, attribure){
    document.getElementById(ID).classList.remove= attribure;
}

function discount(totalPrice , discountRate){
    var discounted = totalPrice * discountRate * 0.01;
    return discounted
}



// //  var button = document.getElementById("toggleButton");

// //  // Initial state (off)
//  var isSelected = false;

//  // Function to toggle the button state and update its text
//  function toggleButton() {
//    if (isSelected) {
//      button.textContent = "Off";
//    } else {
//      button.textContent = "On";
//    }
//    // Toggle the state
//    isSelected = !isSelected;
//  }

//  // Add a click event listener to the button
//  button.addEventListener("click", toggleButton);