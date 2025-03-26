document.addEventListener("DOMContentLoaded", function () {
    const chatbox = document.getElementById("chatbox");
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const studyResourceInput = document.getElementById("studyResource");

    function askQuestion() {
        let question = prompt("Ask StudyHive a question:");
        if (question) {
            displayMessage("You", question);
            getAIResponse(question);
        }
    }

    function displayMessage(sender, message) {
        chatbox.innerHTML += `<p><strong>${sender}:</strong> ${message}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function getAIResponse(question) {
        setTimeout(() => {
            let response = generateAIResponse(question);
            displayMessage("AI", response);
        }, 1000);
    }

    function generateAIResponse(question) {
        const responses = {
            "hello": "Hi there! How can I assist you?",
            "what is AI?": "AI stands for Artificial Intelligence, which enables machines to learn and make decisions.",
            "study resources": "You can find study resources in our library section.",
        };

        return responses[question.toLowerCase()] || "I'm not sure, but I'm always learning!";
    }

    function loginUser(event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        fetch("/api/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert("Login successful!");
            } else {
                alert("Invalid credentials!");
            }
        })
        .catch(error => console.error("Error:", error));
    }

    function searchStudyResources() {
        let query = studyResourceInput.value.toLowerCase();
        const resources = {
            "python": "Check out Python tutorials at python.org",
            "machine learning": "You can start with Coursera's ML course by Andrew Ng.",
        };

        let result = resources[query] || "No study materials found!";
        alert(result);
    }

    window.askQuestion = askQuestion;
    window.searchStudyResources = searchStudyResources;
    loginForm.addEventListener("submit", loginUser);
});
