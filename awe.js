var form = document.getElementById('form');
var F_name = document.getElementById('F_name');
var number = document.getElementById('number');
var order = document.getElementById('order');
var email = document.getElementById('email');
var much = document.getElementById('much');
var date = document.getElementById('date');
var address = document.getElementById('address');
var money = document.getElementById('money');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

var setError = (element, message) => {
    var inputControl = element.parentElement; //.inputControl
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

var setSuccess = element => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

var isValidEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var isValidDate = date =>{
    var re = /^[0-3]?[0-9]\/[01]?[0-9]\/[12][90][0-9][0-9]$/;
    return re;
}



// fuction that check from user inputs and trim fuction remove all whiteSpace
var validateInputs = () => {
    var F_nameValue = F_name.value.trim();
    var numberValue = number.value.trim();
    var orderValue = order.value.trim();
    var emailValue = email.value.trim();
    var muchValue = much.value.trim();
    var dateValue = date.value.trim();
    var addressValue = address.value.trim();
    var moneyValue = money.value.trim();
    
    if(F_nameValue === '') {
        setError(F_name, 'F_name can not be blank');
        return false;
    } else {
        setSuccess(F_name);
    }
    
    /* isNan() function check whether passed variable 
       is number or not*/
    if(numberValue === '') {
      setError(number, 'number can not be blank');
      return false;
    }else if (isNaN(numberValue)) {
      setError(number, 'Provide a valid number');
      return false;
    } 
    else {
      setSuccess(number);
    }

    if(orderValue === '') {
        setError(order, 'Order can not be blank');
    } 
    else {
        setSuccess(order);
    }

    if(emailValue === '') {
      setError(email, 'Email can not be blank');
      return false;
    }else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email ');
      return false;
    } 
    else {
      setSuccess(email);
    }

    if(muchValue === '') {
      setError(much, 'number can not be blank');
      return false;
    }else if (isNaN(muchValue)) {
      setError(much, 'Provide a valid number');
      return false;
    } 
    else {
      setSuccess(much);
    }

    if(dateValue === '') {
      setError(date, 'date can not be blank');
      return false;
    }
    else {
      setSuccess(date);
    }


    if(moneyValue === '') {
      setError(money, 'you have to enter the money');
      return false;
    }else if (isNaN(moneyValue)) {
      setError(money, 'Provide a valid currency');
      return false;
    }else if(orderValue==''){
      setError(money, 'Fill the order');
      return false;
    }else if(moneyValue==20.00 && orderValue=='chicken and chips'){
      setSuccess(money);
    }else if(moneyValue==15.00 && orderValue=='chicken pizza'){
      setSuccess(money);
    }else if(moneyValue==15.00 && orderValue=='fish pizza'){
      setSuccess(money);
    }else if(moneyValue==15.00 && orderValue=='meat pizza'){
      setSuccess(money);
    }else if(moneyValue==5.00 && orderValue=='turkey burgers'){
      setSuccess(money);
    }else if(moneyValue==5.00 && orderValue=='beef burgers'){
      setSuccess(money);
    }else if(moneyValue==5.00 && orderValue=='veggie burgers'){
      setSuccess(money);
    }else if(moneyValue==3.00 && orderValue=='mango juice'){
      setSuccess(money);
    }else if(moneyValue==3.00 && orderValue=='lemon juice'){
      setSuccess(money);
    }else if(moneyValue==3.00 && orderValue=='recipe red juice'){
      setSuccess(money);
    }
    else{
      setError(money,'the money is greaterthan or lessthan that you are required');
      return false;
    }

    if(addressValue === '') {
      setError(address, 'address can not be blank');
      return false;
    }
    else{
        setSuccess(address);
        var Subtotal=muchValue*moneyValue;
        var discount=Subtotal*5/100;
        var Totalamount=Subtotal-discount+15;
        alert("                              Safari Restaurent"+"\n"+"                          mogadishu state, 5678"+"\n"+"                                123--456--7890"+"\n"+"................................................................................"+"\n"
        +"Your name is:         "+F_nameValue+"\n"+"Your number is:     "+numberValue+"\n"+"Your order is:         "+orderValue+"\n"+"Your email is:         "+emailValue+"\n"+"Your address is:     "+addressValue+"\n"+"Date is:                  "+dateValue+"\n"+"Quantity is:            "+muchValue+"\n"+"The price is:           "+moneyValue+"$\n"+".........................................................................."+"\n"+"Subtotal:                 "+Subtotal+"$\n"+"Delivery Charge:     "+"15$"+"\n"+"Discount:                "+"5%"+"\n"+"Total Amount:         "+Totalamount+"$");
    } 
};













































































































































































//menu-bars side of #menu-bars is icon-name
let menu=document.querySelector('#Menu-bars');
let navbar=document.querySelector('.navbar');

//fa-times means close is icon-name
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = ()  =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = ()  =>{
    document.querySelector('#search-form').classList.remove('active');
}

// home slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

//review slider
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    640:{
      slidesPerView:2,
    },
    786:{
      slidesPerView:3,
    },
    1024:{
      slidesPerView:4,
    },
  },
});