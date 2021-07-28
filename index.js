const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes/index'));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('assets')); //For accessing css,js, images files in assets folder

app.listen(port, (err) => {
    if(err){
        console.log("Error running the server");
    }
    console.log(`server run successfully on port: ${port}`);
})