
const new15Rate = document.getElementById('new-15').childNodes[1].childNodes[1].childNodes[0].innerText;
const new15Coupon = document.getElementById('new-15').childNodes[3].childNodes[1].innerText;
const couple20 = document.getElementById('cpl-20').childNodes[1].childNodes[1].childNodes[0].innerText;
const couple20Coupon = document.getElementById('cpl-20').childNodes[3].childNodes[1].innerText;
const apply = document.getElementById('apply-btn')
const perTicket = getInnerTextById('per-ticket')




var totalTickets = 0;
var ticketLeft = getInnerTextById('ticket-left');
console.log(ticketLeft);
var total = 0;
var seatButtons = document.querySelectorAll(".seat");

for (seat of seatButtons) {
    const seatNum = seat.innerText;
    seat.addEventListener('click', function () {
        totalTickets++;
        ticketLeft--;
        // this.classList.add('bg-green-200');
        // console.log(seat);
        // addItemToBill(seatNum);
        if (totalTickets <= 4) {
           
            this.classList.add('bg-green-200');
            addItemToBill(seatNum);
            console.log(totalTickets);
            changeInnerTextByID('small-green', totalTickets)
            total = totalTickets * perTicket;
            changeInnerTextByID('total', total);
            changeInnerTextByID('grand-total', total)
            changeInnerTextByID('ticket-left', ticketLeft);
            this.disabled = true;
        }

        else {
           alert('You can buy maximum 4 tickets at once!')
        }
        if(totalTickets === 4){
            document.getElementById('coupon-field').disabled = false;
            document.getElementById('apply-btn').disabled = false;
        }

    }
    )
    if (totalTickets > 4) {
        seat.removeAttributeByID('click', clickhandler);
    }
}

function applyCoupon() {
    const foundCoupon = getValueById('coupon-field');
    console.log(foundCoupon);
    if (foundCoupon === new15Coupon) {
        console.log('coupon matched')
        let discountPrice = discount(total, new15Rate)
        console.log(discountPrice);
        changeInnerTextByID('discount-price', discountPrice);
        removeAttributeByID('discountBox', 'hidden')
        const grand = grandTotal(total, discountPrice)
        changeInnerTextByID('grand-total', grand);
        addAttributeByID('couponBox', 'hidden')
    }
    else if (foundCoupon === couple20Coupon) {
        console.log('coupon matched')
        let discountPrice = discount(total, couple20)
        console.log(discountPrice);
        changeInnerTextByID('discount-price', discountPrice);
        removeAttributeByID('discountBox', 'hidden')
        const grand = grandTotal(total, discountPrice)
        changeInnerTextByID('grand-total', grand);
        addAttributeByID('couponBox', 'hidden')

    }
    else {
        alert("please enter a valid Coupon");
        document.getElementById('coupon-field').value = '';

    }

}

function addItemToBill(item) {
    var container = document.getElementById('bill-table')
    var newTableRow = document.createElement('tr')
    var seatID = document.createElement('td');
    seatID.innerText = item;
    var seatClass = document.createElement('td');
    seatClass.innerText = "Economy";
    var fare = document.createElement('td');
    fare.innerText = "550";
    newTableRow.appendChild(seatID);
    newTableRow.appendChild(seatClass);
    newTableRow.appendChild(fare);
    container.appendChild(newTableRow);
}



function openModal() {
    const nameInput = getValueById('name');
    console.log(nameInput);
    const phoneInput = getValueById('phone');
    console.log(phoneInput);
    const emailInput = getValueById('email');
    console.log(emailInput);

    if (totalTickets >= 1) {
        if (nameInput && phoneInput && emailInput) {
            console.log("good to go")
            document.getElementById('my_modal_7').checked = true;
            
        }
        else{
            alert('Please fill out the fields')
        }}
    else {
        alert('Please select at least one seat')
    }
}















// function ticketBooked() {
//     const nameInput = getValueById('name');
//     console.log(nameInput);
//     const phoneInput = getValueById('phone');
//     console.log(phoneInput);
//     const emailInput = getValueById('email');
//     console.log(emailInput);
//     if (nameInput && phoneInput && emailInput) {
//         console.log("good to go")
//     }
//     else {
//         console.log("check input");
//         alert("Please enter the info in the form");

// }
// }


//    const nameInput = getValueById('name');
//     console.log(nameInput);
//     const phoneInput = getValueById('phone');
//     console.log(phoneInput);
//     const emailInput = getValueById('email');
//     console.log(emailInput);
//     if (!nameInput || !phoneInput || !emailInput) {
//         console.log("check input");
//         alert("Please enter the info in the form");

//     } 




