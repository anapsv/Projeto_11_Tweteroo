import express from 'express';
import cors from 'cors';
import { json } from 'express';

const app = express();
app.use(cors());
app.use(json());

const tweets = [];
const users = [];

app.post('/sign-up', (req, res) => {
    const body = req.body;
    users.push(body);
    console.log(body);
    res.send('Ok');
});

app.listen(5000, () => {
    console.log('app na porta 5000');
});