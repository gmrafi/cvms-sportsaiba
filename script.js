async function searchCertificate() {
    let query = document.getElementById("searchInput").value.trim().toLowerCase();
    let resultDiv = document.getElementById("result");

    try {
        let response = await fetch("certificates.json");
        let certificates = await response.json();

        let found = certificates.find(cert => cert.cert_no.toLowerCase() === query || cert.id.toLowerCase() === query);

        if (found) {
            resultDiv.innerHTML = `
                <h2>Certificate Found ✅</h2>
                <p><strong>Name:</strong> ${found.name}</p>
                <p><strong>Event:</strong> ${found.event}</p>
                <p><strong>Batch:</strong> ${found.batch}</p>
                <p><strong>Section:</strong> ${found.section}</p>
                <p><strong>Student ID:</strong> ${found.id}</p>
                <p><strong>Certificate Number:</strong> ${found.cert_no}</p>
                <p><strong>Comment:</strong> ${found.comment}</p>
            `;
        } else {
            resultDiv.innerHTML = "<h2>Certificate Not Found ❌</h2>";
        }
    } catch (error) {
        console.error('Error fetching certificates:', error);
        resultDiv.innerHTML = `
            <h2>Error fetching certificate ❌</h2>
            <p>Please contact with <b> Rafi </b> at <a href="https://wa.me/8801300560126" target="_blank">+8801300560126</a> on WhatsApp for assistance.</p>
        `;
    }
}

document.getElementById('verifyButton').addEventListener('click', searchCertificate);