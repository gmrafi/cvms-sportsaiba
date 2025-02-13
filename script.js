async function searchCertificate() {
    let query = document.getElementById("searchInput").value.trim().toLowerCase();
    let resultDiv = document.getElementById("result");

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
}

document.getElementById('verifyButton').addEventListener('click', function() {
    const searchId = document.getElementById('searchInput').value.trim();
    fetch('certificates.json')
        .then(response => response.json())
        .then(certificates => {
            const results = certificates.filter(cert => cert.id === searchId || cert.cert_no === searchId);
            const resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = '';

            if (results.length > 0) {
                results.forEach(cert => {
                    const certDetails = `
                        <div class="certificate">
                            <p><strong>Event:</strong> ${cert.event}</p>
                            <p><strong>Name:</strong> ${cert.name}</p>
                            <p><strong>Batch:</strong> ${cert.batch}</p>
                            <p><strong>Section:</strong> ${cert.section}</p>
                            <p><strong>ID:</strong> ${cert.id}</p>
                            <p><strong>Certificate No:</strong> ${cert.cert_no}</p>
                            <p><strong>Comment:</strong> ${cert.comment}</p>
                        </div>
                    `;
                    resultContainer.innerHTML += certDetails;
                });
            } else {
                resultContainer.innerHTML = '<p>Certificate Not Found</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching certificates:', error);
        });
});
