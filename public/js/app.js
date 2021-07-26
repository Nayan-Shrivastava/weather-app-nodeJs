const weatherForm = document.querySelector('form');
const searchField = document.querySelector('input');
const messageOne = document.querySelector('#msg-1');
const messageTwo = document.querySelector('#msg-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.textContent = 'Loading...';
    const location = searchField.value;
    fetch('http://localhost:3000/weather?location=' + location).then(
        (response) => {
            response.json().then((data) => {
                if (data.error) {
                    console.log(data.error);
                    messageOne.textContent = data.error;
                } else {
                    console.log(data.location);
                    messageOne.textContent = data.location;
                    console.log(data.temperature);
                    messageTwo.textContent = data.temperature;
                }
            });
        }
    );
});
