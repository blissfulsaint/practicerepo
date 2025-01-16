const express = require('express');
const app = express();
const port = process.env.port | 3000;

const cors = require('cors');

app.use(cors())

const users = [
    { id: 1, name: 'Brandon' },
    { id: 2, name: 'Ephraim' },
    { id: 3, name: 'Preston' },
    { id: 4, name: 'Amy' },
]

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/users', (req, res) => {
    res.json(users);
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})