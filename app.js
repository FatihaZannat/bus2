let firstClass= document.getElementById('first-class')
let economyClass= document.getElementById('economy-class')
let firstPlus= document.getElementById('first-plus')
let firstMinus= document.getElementById('first-minus')
let secondPlus= document.getElementById('second-plus')
let secondMinus= document.getElementById('second-minus')
let main = document.getElementById('main')

let subTotal= document.getElementById('sub-total')
let vat= document.getElementById('vat')
let total= document.getElementById('total')
let book = document.getElementById('book')
let message = document.getElementById('message') 

firstPlus.addEventListener('click', function(){
    handelIncreaseDecrease(firstClass,true)
})
 firstMinus.addEventListener('click', function(){
     handelIncreaseDecrease(firstClass,false)
 })
 secondPlus.addEventListener('click', function(){
     handelIncreaseDecrease(economyClass,true)
 })
secondMinus.addEventListener('click',function(){
    handelIncreaseDecrease(economyClass, false)
})
book.addEventListener('click',function(){
    main.style.display='none';
    message.style.display= 'block'

})


function handelIncreaseDecrease(classes,isIncrease){
    let classInput = parseInt(classes.value)
   
    let totalTicket =0
    if(isIncrease==true){
    totalTicket = classInput + 1
    
   }
    else if(isIncrease==false && classInput>0){
        totalTicket = classInput - 1
        
    }
     classes.value = totalTicket

   cost()
}
function cost (){
    let firstClassInput = parseInt(firstClass.value)
    let firstClassTotal = firstClassInput * 150
    
    
    let economyClassInput = parseInt(economyClass.value)
    let economyClassTotal = economyClassInput * 100
    let subTotalAmount = firstClassTotal +  economyClassTotal
    subTotal.innerText = subTotalAmount
   let vatAmount = subTotal.innerText * 0.1
    vat.innerText = vatAmount
    
    total.innerText =subTotalAmount +vatAmount
}