document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fbName").value;
    const feedback = document.getElementById("fbText").value;

    const entry = `Name: ${name}\nFeedback: ${feedback}\n------------------\n`;

    // 1. Save to localStorage
    let stored = localStorage.getItem("feedbackData") || "";
    stored += entry;
    localStorage.setItem("feedbackData", stored);

    // 2. Create downloadable file
    const blob = new Blob([stored], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "feedback.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 3. Flash message
    const msg = document.getElementById("flashMsg");
    msg.style.display = "block";

    setTimeout(() => {
        msg.style.display = "none";
    }, 3000);

    // 4. Reset form
    document.getElementById("feedbackForm").reset();
});


