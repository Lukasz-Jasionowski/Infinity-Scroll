// Import API Key
import { accessKey } from "./api.js";

// Unsplash API
const count = 10;
const apiKey = accessKey;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape`

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch error
    }
}

//  On Load
getPhotos();