// Add item functionality
const addItemBtn = document.getElementById("addItemBtn");

const priceToUpdate = document.getElementById("priceToUpdate").innerText;
const originalPrice = parseInt(priceToUpdate);
let priceToUpdateNum = parseInt(priceToUpdate);

addItemBtn.addEventListener('click',function(){
    const quantity= document.getElementById("quantity").value;
    let quantityNum = parseInt(quantity);
    quantityNum++;

    document.getElementById("quantity").value = quantityNum;
    priceToUpdateNum += originalPrice;
    document.getElementById("priceToUpdate").innerText = priceToUpdateNum;

    const subTotal = document.getElementById("subTotal").innerText;
    let subTotalNum = parseFloat(subTotal.replace(/,/g, ''));
    subTotalNum += originalPrice;
    document.getElementById("subTotal").innerText = subTotalNum;

    const total = document.getElementById("total").innerText;
    console.log(total);
    let totalNum = parseFloat(total.replace(/,/g, ''));
    totalNum += originalPrice;
    document.getElementById("total").innerText = totalNum;
})