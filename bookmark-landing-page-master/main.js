// nav toggle

const navOpen = document.querySelector('.nav-open');
const navClose = document.querySelector('.nav-close');
const navMenu = document.querySelector('.nav-menu');

navOpen.addEventListener('click', () =>{
    navMenu.classList.add('active');
    navOpen.classList.add('active');
    navClose.classList.add('active')
})

navClose.addEventListener('click', () =>{
    navMenu.classList.remove('active');
    navOpen.classList.remove('active');
    navClose.classList.remove('active')
})

// tab toggle

const allTabItems = document.querySelectorAll('.tab-item');
const allTabs = document.querySelectorAll('.tab');

allTabItems.forEach((tabItems, index) => {
    tabItems.addEventListener('click', (e) =>{
        allTabItems.forEach((tabItems =>{tabItems.classList.remove('active')}))
        tabItems.classList.add('active');

        var line=document.querySelector('.tab-line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        allTabs.forEach(content=>{content.classList.remove('active')});
        allTabs[index].classList.add('active');
    })
});

// faq toggle

const faqs = document.querySelectorAll('.faq-panel');
faqs.forEach((faq) =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('active');
    });
});


// Form Validation
const form = document.getElementById('form'); 
const email = document.getElementById('email');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    inputsCheck();
})

function inputsCheck(){
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setErrorFor(email, "Whoops, make sure it's an email");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Invalid Email");
    }else{
        setSuccessFor(email)
    }
}

function setErrorFor(input, message){
    const inputControl = input.parentElement;
    const small = inputControl.querySelector('small')

    small.innerText = message;

    inputControl.className = 'input-control error'
}

function setSuccessFor(input){
    const inputControl = input.parentElement;

    inputControl.className = 'input-control success'
}

function isEmail(email){
   
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}