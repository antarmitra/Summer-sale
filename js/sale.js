// total price and name 
let total = 0;
function clickedMe(target){
    const infoContainer = document.getElementById('info');
    const item = target.childNodes[3].childNodes[3].innerText;
    console.log(item)
    const count = infoContainer.childElementCount;
    const p = document.createElement("p");
    p.innerText =`${count+1}. `+ item;
    infoContainer.appendChild(p);

    const price =  target.childNodes[3].childNodes[5].innerText;
    total = parseFloat(total) + parseFloat(price)
    const totalPriceToFixed = total.toFixed(2)
    document.getElementById('total').innerText = totalPriceToFixed


        // button disabled

        const button = document.getElementById('apply-btn');
        if( total >= 200){
            button.removeAttribute('disabled')
        }
        else{
            button.setAttribute('disabled', true)
        }

        const purchaseButton = document.getElementById('purchase-btn');
        if(total > 0){
            purchaseButton.removeAttribute('disabled')
        }
        else{
            purchaseButton.setAttribute('disabled', true)
        }


}



    document.getElementById('apply-btn').addEventListener('click', function(){
        const couponInput = document.getElementById('coupon')
        
        if(couponInput.value === 'SELL200'){

            discount = (20 * total) / 100;
            const discountField = discount.toFixed(2);
            const discountTotal = document.getElementById('discount')
            discountTotal.innerText = discountField;

            totalPrice = total - discountField; 
            const totalInput = totalPrice.toFixed(2);
            const totalElement = document.getElementById('total-price');
            totalElement.innerText = totalInput;
        }
        else{
            alert('Please input valid coupon')
        }

    })


    document.getElementById('go-home-button').addEventListener('click', function(){
        window.location.href = 'index.html'
    })
  
// discount
    

