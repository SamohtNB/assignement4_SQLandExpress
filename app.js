const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
}); 

app.get('/api/compute/:number', (req, res) => {
    const inputNumber = parseInt(req.params.number);
    const result = computeValue(inputNumber);
    res.json({ input: inputNumber, result });
});
  

app.all('*', (req, res) => {
    res.status(404).send('404 not found');
});

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}, you can access it at http://localhost:${PORT}`)});

function computeValue(input) {
    return input * 2;
}
