fetch('patient_data.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');

        const patients = xmlDoc.getElementsByTagName('patient');

        const table = document.getElementById('patientTable');

        for (let i = 0; i < patients.length; i++) {
            const patient = patients[i];
            const name = patient.querySelector('name').textContent;
            const age = patient.querySelector('age').textContent;
            const gender = patient.querySelector('gender').textContent;

            const row = table.insertRow();
            const nameCell = row.insertCell(0);
            const ageCell = row.insertCell(1);
            const genderCell = row.insertCell(2);

            nameCell.innerHTML = name;
            ageCell.innerHTML = age;
            genderCell.innerHTML = gender;
        }
    })
    .catch(error => console.error('Error fetching patient data:', error));
    
    setInterval(d,1000);
    function d(){
        let a = new Date();
    document.getElementById("demo").innerHTML ="Records on date:- " +a.getMonth()+ " "+ a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    }