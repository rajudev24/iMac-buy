const memoryCost = document.getElementById('memory-cost')
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost')



document.getElementById('eightGbMemory').addEventListener('click', function(){
        memoryCost.innerText = '0';
        getTotal();

})
document.getElementById('sixteenGbMemory').addEventListener('click', function(){
        memoryCost.innerText = '180';
        getTotal();
})
document.getElementById('singleStorge').addEventListener('click', function(){
        storageCost.innerText = '0';
        getTotal();
})
document.getElementById('dubleStorge').addEventListener('click', function(){
        storageCost.innerText = '100';
        getTotal();
})
document.getElementById('tbStorge').addEventListener('click', function(){
        storageCost.innerText = '180';
        getTotal();
})
document.getElementById('freeDelivery').addEventListener('click', function(){
        deliveryCost.innerText = '0';
        getTotal();
})
document.getElementById('paidDelivery').addEventListener('click', function(){
        deliveryCost.innerText = '20';
        getTotal();
})

function getTotal(){
        const memoryValue = parseFloat(memoryCost.innerText);
        const storageValue = parseFloat(storageCost.innerText);
        const deliveryValue = parseFloat(deliveryCost.innerText);
        const total = memoryValue + storageValue + deliveryValue + 1299;
        document.getElementById('total-cost').innerText = total;
        document.getElementById('total-price').innerText = total
}

//Promo Code Apply

let totalPrice = getTotal();

document.getElementById('cupon-apply').addEventListener('click', function(){
        let updatePrice = document.getElementById('total-price');
        let finalPrice = parseFloat(updatePrice.innerText);
        let promo = document.getElementById('cupon-input');
        let promoCode = promo.value;
        if(promoCode == 'stevekaku'){
                let promoApply = finalPrice - ((finalPrice/100)*20);
                updatePrice.innerText = promoApply;
                
        }else{
                return 0;
        }
      promo.value = '';
})
