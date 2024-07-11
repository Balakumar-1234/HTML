// script.js
const video = document.getElementById('video');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
});

