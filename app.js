const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static('public'));

const port = 5000;

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(process.env.PORT || port, () => {
    console.log(`listening on port ${port}`);
});