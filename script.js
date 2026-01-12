document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("message", document.getElementById("message").value);

    fetch("submit.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("response").innerText = data;
        document.getElementById("contactForm").reset();
    });
});