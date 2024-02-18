
const new15Rate = document.getElementById('new-15').childNodes[1].childNodes[1].childNodes[0].innerText;
const new15Coupon = document.getElementById('new-15').childNodes[3].childNodes[1].innerText;
const couple20 = document.getElementById('cpl-20').childNodes[1].childNodes[1].childNodes[0].innerText;
const couple20Coupon = document.getElementById('cpl-20').childNodes[3].childNodes[1].innerText;
const apply = document.getAnimations('apply-btn')




var totalTickets = 0;
var ticketLeft = getInnerTextById('ticket-left');
console.log(ticketLeft);
var total = 0;
var seatButtons = document.querySelectorAll(".seat");
for (seat of seatButtons) {
    const seatNum = seat.innerText;
    seat.addEventListener('click', function () {
        this.classList.add('bg-green-200');
        // console.log(seat);
        addItemToBill(seatNum);
        totalTickets = totalTickets + 1;
        ticketLeft = ticketLeft - 1;

        console.log(totalTickets);
        changeInnerTextByID('small-green', totalTickets)
        total = total + 550;
        changeInnerTextByID('total', total);
        changeInnerTextByID('grand-total', total)
        changeInnerTextByID('ticket-left', ticketLeft);
        this.disabled = true;
        if (totalTickets >= 4) {
            document.getElementById('coupon-field').disabled = false;
        }
    }
    )

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
    }
    else if (foundCoupon === couple20Coupon) {
        console.log('coupon matched')
        let discountPrice = discount(total, couple20)
        console.log(discountPrice);
        changeInnerTextByID('discount-price', discountPrice);
        removeAttributeByID('discountBox', 'hidden')
        const grand = grandTotal(total, discountPrice)
        changeInnerTextByID('grand-total', grand);
    }
    else {
        alert("please enter a valid Coupon")
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

function ticketBooked() {
    const nameInput = getValueById('name');
    console.log(nameInput);
    const phoneInput = getValueById('phone');
    console.log(phoneInput);
    const emailInput = getValueById('email');
    console.log(emailInput);
    if (nameInput && phoneInput && emailInput) {
        console.log("good to go")
        addAttributeByID('main' , 'hidden')
        removeAttributeByID('success', 'hidden')
    }
    else {
        console.log("check input");
        alert("Please enter the info in the form");
}
}

