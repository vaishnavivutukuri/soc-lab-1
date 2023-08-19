const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/submit' && req.method === 'POST') {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            const xmlData = data.substring(0, data.length - 1); // Remove the trailing '&' character

            // Load existing XML content, if available
            let existingData = '';
            if (fs.existsSync('patient_data.xml')) {
                existingData = fs.readFileSync('patient_data.xml', 'utf8');
            }

            const updatedData = existingData.replace('</patients>', xmlData + '</patients>');

            fs.writeFileSync('patient_data.xml', updatedData);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Patient information saved in XML!');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
