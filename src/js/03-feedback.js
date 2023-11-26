import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const updateLocalStorageThrottled = throttle (() => {

    const data = {email: form.email.value, message: form.message.value};
    localStorage.setItem(localStorageKey, JSON.stringify(data));}, 500);

    form.addEventListener('input', () => {
        updateLocalStorageThrottled();
    });
const {email, message} = localStorage.getItem(localStorageKey)? JSON.parse(localStorage.getItem(localStorageKey)): {email: "", message:""};

    form.email.value = email;
    form.email.placeholder = "valid email address";
    form.message.value = message;
    form.message.placeholder = "Write your feedback";

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const storedData = localStorage.getItem(localStorageKey);
        if (storedData) {
            try {
                const { email, message} = JSON.parse(storedData);
                console.log("Feedback submitted:");
                console.log("Email:", email);
                console.log("Message:", message);
console.log({email, message});
            } catch (error) {
                console.error('Error parsing stored data:', error);
            }
        }
        localStorage.removeItem(localStorageKey);
        form.reset();
    });

    


