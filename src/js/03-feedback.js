import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const updateLocalStorageThrottled = throttle (() => {
    const email = form.el.email.value;
    const message = form.el.message.value;
    const data = {email, message};
    localStorage.setItem(localStorageKey, JSON.stringify(data));}, 500);

    form.addEventListener('input', () => {
        updateLocalStorageThrottled();
    });

    form.el.email.value = localStorage.getItem(localStorageKey) ?? "";
    form.el.message.value = localStorage.getItem(localStorageKey) ?? "";

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const storedData = localStorage.getItem(localStorageKey);
        if (storedData) {
            try {
                const { email, message} = JSON.parse(storedData);
                console.log("Feedback submitted:");
                console.log("Email:", email);
                console.log("Message:", message);

            } catch (error) {
                console.error('Error parsing stored data:', error);
            }
        }
        localStorage.removeItem(localStorageKey);
        form.reset();
    })

    


