const express =  require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('bodyParser');

app.use(bodyParser.json());
app.use('/posts', postsRoutes);
//When we are on the '/' we render the postsRoutes
//who's the postsController file 


app.listen(5500, () => console.log('Server started: 5500'));
