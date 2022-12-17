// Functions goes here
function plusBtnFunc(inputId,priceId,originalPrice,priceToUpdateNum) {
    const quantity= document.getElementById(inputId).value;
    let quantityNum = parseInt(quantity);
    quantityNum++;
    document.getElementById(inputId).value = quantityNum;


    document.getElementById(priceId).innerText = priceToUpdateNum;

    const subTotal = document.getElementById("subTotal").innerText;
    let subTotalNum = parseFloat(subTotal.replace(/,/g, ''));
    subTotalNum += originalPrice;
    document.getElementById("subTotal").innerText = subTotalNum;

    const total = document.getElementById("total").innerText;
    let totalNum = parseFloat(total.replace(/,/g, ''));
    totalNum += originalPrice;
    document.getElementById("total").innerText = totalNum;
}


// Add item functionality
const addItemBtn = document.getElementById("addItemBtn");

const priceToUpdate = document.getElementById("priceToUpdate").innerText;
const originalPrice = parseInt(priceToUpdate);
let priceToUpdateNum = parseInt(priceToUpdate);

addItemBtn.addEventListener('click',function(){
    priceToUpdateNum += originalPrice;
    plusBtnFunc("quantity","priceToUpdate",originalPrice,priceToUpdateNum);
})

// Add item functionality for cover
const addItemBtnCvr = document.getElementById("addItemBtnCvr");
const priceToUpdateCvr = document.getElementById("priceToUpdateCvr").innerText;
const originalPriceCvr = parseInt(priceToUpdateCvr);
let priceToUpdateNumCvr = parseInt(originalPriceCvr);

addItemBtnCvr.addEventListener('click',function(){
    priceToUpdateNumCvr += originalPriceCvr;
    plusBtnFunc("quantityCvr","priceToUpdateCvr",originalPriceCvr,priceToUpdateNumCvr);
})