import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const formData = {email: "", message: ""};

form.addEventListener('input', throttle(onForm, 500));

function onForm(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));  
}

function getItemLs(){
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));

    if(data){
     email.value = data.email || "";
     message.value = data.message || "";
    }
}
getItemLs();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset();;
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");

 })

