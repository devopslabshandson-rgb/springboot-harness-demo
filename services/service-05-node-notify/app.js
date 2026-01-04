const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;

app.get('/health',(r,s)=>s.send('OK'));
app.get('/',(r,s)=>s.json({service:'notify'}));

app.listen(PORT,'0.0.0.0',()=>console.log('notify on '+PORT));
