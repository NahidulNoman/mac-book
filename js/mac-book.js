function getValue(elementId,value){
    let allElementId = document.getElementById(elementId);
    parseFloat(allElementId.innerText);
    allElementId.innerText = value;
}

function innerTextValue(text){
    let memory = document.getElementById(text);
    let memoryInner = parseFloat(memory.innerText);
    return memoryInner;
}

// function eight(){
//     let eightRam = 100;
//     let memory = document.getElementById('memory-price');
//     memory.innerText = eightRam;
// }

function subTotal(){
    let total = innerTextValue('memory-price');
    let storage = innerTextValue('storage-price');
    let ram = innerTextValue('delivery-price');

    let totalSub = total + storage + ram;

    let sub = document.getElementById('basic-subtotal');
    let inSub = sub.innerText = totalSub;

    let underTotal = document.getElementById('total');
    underTotal.innerText = inSub;
}
document.getElementById('8GB-RAM').addEventListener('click',function(){
    getValue('memory-price',0);
    subTotal();
    
})
// function sixteen(){
//     let sixteenGb = 200;
//     let memory = document.getElementById('memory-price');
//     memory.innerText = sixteenGb;
// }
document.getElementById('16GB-RAM').addEventListener('click',function(){
    getValue('memory-price',100);
    subTotal();
})
// function towHundred(){
//     let twoHundredRam = 300;
//     let storage = document.getElementById('storage-price');
//     storage.innerText = twoHundredRam;
// }
document.getElementById('256GB-Storage').addEventListener('click',function(){
    getValue('storage-price',200);
    subTotal();
})
// function fiveHundred(){
//     let fiveHundredRam = 400;
//     let storage = document.getElementById('storage-price');
//     storage.innerText = fiveHundredRam;
// }
document.getElementById('512GB-Storage').addEventListener('click',function(){
    getValue('storage-price',300);
    subTotal();
})
// function oneTb(){
//     let oneTbRam = 500;
//     let storage = document.getElementById('storage-price');
//     storage.innerText = oneTbRam;
// }
document.getElementById('1TB-Storage').addEventListener('click',function(){
    getValue('storage-price',400);
    subTotal();
})
// function deliveryFun(){
//     let delivery = 20;
//     let deliveryPrice = document.getElementById('delivery-price');
//     deliveryPrice.innerText = delivery;
// }
document.getElementById('fastDelivery').addEventListener('click',function(){
    getValue('delivery-price',20);
    subTotal();
})

document.getElementById('promo-code-click').addEventListener('click',function(){
    let promo = document.getElementById('promo-code').value;
    if(promo === 'forgiveMe'){
        let totalPro = document.getElementById('basic-subtotal').innerText;
        let promoTotal = parseFloat(totalPro) * 0.2;
        let getTotal = document.getElementById('total');
        getTotal.innerText = promoTotal;
    }
    else{
        alert('Please inter a valid code!!')
    }
})