// script.js
// Dummy data for dynamic reviews
const reviews = [
    { name: "John Doe", review: "PsychBot has been a game-changer for me. The chatbot's insights have made a positive impact on my mental well-being." },
    { name: "Jane Smith", review: "I appreciate the support and understanding I get from PsychBot. It feels like having a personal psychologist at my fingertips." },
    { name: "Chris Johnson", review: "The simplicity of the login process and the dynamic reviews section make PsychBot a user-friendly platform for mental health." },
];

// Function to display dynamic reviews
function displayReviews() {
    const reviewContainer = document.getElementById("review-container");

    reviews.forEach((reviewData, index) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `<strong>${reviewData.name}</strong><p>"${reviewData.review}"</p>`;
        reviewContainer.appendChild(reviewElement);
    });

    // Set up dynamic review display
    let currentIndex = 0;
    setInterval(() => {
        const reviews = document.querySelectorAll('.review');
        reviews.forEach((review, index) => {
            review.style.display = index === currentIndex ? 'block' : 'none';
        });

        currentIndex = (currentIndex + 1) % reviews.length;
    }, 5000); // Change the review every 5 seconds
}

// Function to redirect to the chatbot page
function redirectToChatbotPage() {
    // Redirect to the chatbot page
    window.location.href = "chatbot.html";

    // Prevent form submission
    return false;
}

// Call the function to display dynamic reviews on page load
displayReviews();
