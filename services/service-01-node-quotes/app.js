const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/health',(r,s)=>s.send('OK'));
app.get('/',(r,s)=>s.json({service:'quotes'}));

app.listen(PORT,'0.0.0.0',()=>console.log('quotes on '+PORT));
