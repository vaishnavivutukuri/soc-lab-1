document.getElementById("submitBtn").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    const xmlData = `<patient>
                        <name>${name}</name>
                        <age>${age}</age>
                        <gender>${gender}</gender>
                    </patient>&`;  // Add '&' to separate entries

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/submit", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(xmlData);

    alert("Patient information saved on server!");
});
