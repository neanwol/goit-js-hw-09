
const formData = {
    email: "",
    message: ""
};

const formEl = document.querySelector('.feedback-form');

const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    formEl.email.value = formData.email;
    formEl.message.value = formData.message;
}

formEl.addEventListener('input', e => {
    const { name, value } = e.target;

    if (name === 'email' || name === 'message') {
        formData[name] = value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

formEl.addEventListener('submit', e => { 
    e.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    formEl.reset();
});