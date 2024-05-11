const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;


const MONGODB_URI = 'mongodb+srv://root:root@cluster0.q4ld5sb.mongodb.net/Hackathon?retryWrites=true&w=majority';


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

const Schema = mongoose.Schema;
const userDataSchema = new Schema({
    name: String,
    age: Number,
    location: String
});

const UserData = mongoose.model('sme_info', userDataSchema);

app.use(cors())
app.use(bodyParser.json());


app.post('/api/user', async (req, res) => {
    try {
        
        const newUser = new UserData({
            name: req.body.name,
            age: req.body.age,
            location: req.body.location
        });

        await newUser.save();

        res.status(201).json({ message: 'User data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
