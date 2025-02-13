const ADMIN_PASSWORD = "admin123"; // Change this to your secure password

let certificates = [];

function checkAdmin() {
    let pass = document.getElementById("adminPass").value;
    if (pass === ADMIN_PASSWORD) {
        document.getElementById("adminPanel").style.display = "block";
    } else {
        alert("Incorrect password!");
    }
}

function addCertificate() {
    let newCert = {
        event: document.getElementById("event").value,
        name: document.getElementById("name").value,
        batch: document.getElementById("batch").value,
        section: document.getElementById("section").value,
        id: document.getElementById("studentId").value,
        cert_no: document.getElementById("certNo").value,
        comment: document.getElementById("comment").value
    };

    certificates.push(newCert);
    document.getElementById("certData").value = JSON.stringify(certificates, null, 4);
    
    alert("Certificate added! Copy and update `certificates.json`.");
}
