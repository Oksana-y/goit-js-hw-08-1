import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');


const formData = {email: "", message: ""};
getItemLs();

form.addEventListener('input', throttle(onForm, 500));

function onForm(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));  
}

function getItemLs(){
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));

    if(data){
    data.email ? formData.email = data.email : formData.email = ""; 
    data.message ? formData.message = data.message : formData.message = "";
}
    email.value = formData.email;
    message.value = formData.message;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
 if(email.value === "" || message.value === ""){
    alert("Заповнить всі поля");
    return;
 }

    e.target.reset();;
    console.log(formData);
  
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";

 })

