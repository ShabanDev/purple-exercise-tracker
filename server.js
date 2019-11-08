const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('./public'));

app.use('/api/exercise', userRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

