const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.get('/health',(r,s)=>s.send('OK'));
app.get('/',(r,s)=>s.json({service:'users'}));

app.listen(PORT,'0.0.0.0',()=>console.log('users on '+PORT));
