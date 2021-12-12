const express =  require('express');
const app = express();
require('./models/dbConfig');

const postsRoutes = require('./routes/postsController');

app.use('/', postsRoutes);
//When we are on the '/' we render the postsRoutes
//who's the postsController file 


app.listen(5500, () => console.log('Server started: 5500'));
