const express =  require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const cors = require('cors');
/* const mongoose = require('mongoose') */
//These lines are necessary if there is warning message about Deprecation
/* mongoose.set('useFindAndModify', false); */

app.use(bodyParser.json());
app.use(cors());
/* app.use(cors({origin: 'https://axel-raboit.fr'})); <- To allow a website to access */ 
//Cors allow everybody to access to the API (We can put params)
app.use('/posts', postsRoutes);
//When we are on the '/' we render the postsRoutes
//who's the postsController file 


app.listen(5500, () => console.log('Server started: 5500'));
