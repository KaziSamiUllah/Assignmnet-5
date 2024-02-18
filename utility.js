function changeInnerTextByID(elemetnID , Text){
document.getElementById(elemetnID).textContent = Text;
}
function getInnerTextById(ID){
    const text = document.getElementById(ID).innerText;
    return text;
}


function getValueById(ID){
   var inputValue = document.getElementById(ID).value
   return inputValue;
}

function addAttributeByID(ID, attribute){
    document.getElementById(ID).classList.add = attribute;
}
function removeAttributeByID(ID, attribute){
    const element = document.getElementById(ID)
    element.classList.remove(attribute);

}

function discount(totalPrice , discountRate){
    var discounted = totalPrice * discountRate * 0.01;
    return discounted
}

function grandTotal(total , discount){
   let grand = total - discount;
    return grand;
};


// function ifInputExist(inputID){
//     var input = document.getElementById(inputID).value;
//     if(input){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


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