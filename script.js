// Event Handling

// Button click event
document.getElementById('clickButton').addEventListener('click', () => {
    alert('Button clicked!');
});

// Hover effect
const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseover', () => {
    hoverButton.style.backgroundColor = 'blue';
});
hoverButton.addEventListener('mouseout', () => {
    hoverButton.style.backgroundColor = '';
});

// Keypress detection
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        alert('Enter key pressed!');
    }
});

// Bonus: Double-click event
document.getElementById('clickButton').addEventListener('dblclick', () => {
    alert('Double-clicked!');
});

// Interactive Elements

// Button to change text and color
document.getElementById('changeButton').addEventListener('click', () => {
    const changeButton = document.getElementById('changeButton');
    changeButton.textContent = 'Text and Color Changed!';
    changeButton.style.backgroundColor = 'red';
});

// Slideshow
let currentImage = 0;
const images = ['https://via.placeholder.com/300', 'https://via.placeholder.com/300/ff0000', 'https://via.placeholder.com/300/0000ff'];
const slideshowImage = document.getElementById('slideshowImage');

setInterval(() => {
    slideshowImage.src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
}, 3000);

// Tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        tab.classList.add('active');
    });
});

// Form Validation

// Real-time email validation
document.getElementById('email').addEventListener('input', function() {
    const emailFeedback = document.getElementById('email-feedback');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(this.value)) {
        emailFeedback.textContent = 'Invalid email format';
        emailFeedback.style.display = 'block';
    } else {
        emailFeedback.textContent = 'Valid email format';
        emailFeedback.style.display = 'none';
    }
});

// Password validation
document.getElementById('password').addEventListener('input', function() {
    const passwordFeedback = document.getElementById('password-feedback');
    if (this.value.length < 8) {
        passwordFeedback.textContent = 'Password must be at least 8 characters long';
        passwordFeedback.style.display = 'block';
    } else {
        passwordFeedback.textContent = '';
        passwordFeedback.style.display = 'none';
    }
});

// Submit validation
document.getElementById('form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!emailInput.value || !passwordInput.value || passwordInput.value.length < 8) {
        event.preventDefault();
        alert('Please fill in the form correctly!');
    }
});
