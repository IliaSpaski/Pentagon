import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/img', express.static(path.join(__dirname, 'data', 'img')));


const USERS_FILE_PATH = path.join(__dirname, 'data', 'users.json');
const PEOPLE_FILE_PATH = path.join(__dirname, 'data', 'people.json');

const readJsonFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            try {
                const jsonData = JSON.parse(data);
                resolve(jsonData);
            } catch (parseError) {
                reject(parseError);
            }
        });
    });
};

const writeJsonFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const users = await readJsonFile(USERS_FILE_PATH);

        if (users.find(user => user.username === username)) {
            return res.status(409).json({ message: 'Username already exists' });
        }

        users.push({ username, password });
        await writeJsonFile(USERS_FILE_PATH, users);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const users = await readJsonFile(USERS_FILE_PATH);

        const user = users.find(user => user.username === username && user.password === password);

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/people', async (req, res) => {
    try {
        const people = await readJsonFile(PEOPLE_FILE_PATH);
        res.status(200).json(people);
    } catch (error) {
        console.error('Error fetching people data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/people/:id', (req, res) => {
    const personId = req.params.id;
    const people = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'people.json')));
    const person = people.find(p => p.id === personId);
    if (person) {
        res.json(person);
    } else {
        res.status(404).json({ message: 'Person not found' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});