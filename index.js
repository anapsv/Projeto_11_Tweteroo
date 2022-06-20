import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const tweets = [];
const users = [];

app.post('/sign-up', (req, res) => {
    const body = req.body;
    users.push(body);
    console.log(body);
    res.send('Ok');
});

app.post('/tweets', (req, res) => {
    const body = req.body;
    const {username, tweet} = body;
    const {avatar} = users.find((user) => user.username === username);
    tweets.push({
        username,
        avatar,
        tweet
    });

    res.send('Ok');
});

app.get('/tweets', (req, res) => {
    if(tweets.length <= 10) return res.send([...tweets].reverse());
    else{
        res.send([...tweets].reverse().splice(0, 10));
    }
});

app.listen(5000, () => {
    console.log('app na porta 5000');
});