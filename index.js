const express = require('express');
const dbConnect = require('./config');
const app = express();

app.use(express.json());
app.get('/',(req,resp)=>{
  dbConnect.query("select * from persons",(err,result)=>{
    if (err) {
      resp.send("Connection Error");
    }
    else {
      resp.send(result);
    }
  })
})
app.post('/',(req,resp)=>{
  const data = req.body;
  dbConnect.query("INSERT INTO persons SET ?",data,(err,result,fields)=>{
    if (err) {
      resp.send("Connection Error");
    }
    else {
      resp.send(result);
    }
  })
})
app.listen(5000);

app.put('/:id',(req,resp)=>{
  const data = [req.body.LastName, req.body.FirstName, req.body.Age, req.body.admin ,req.params.id];

  dbConnect.query("UPDATE persons SET LastName=?,FirstName=?,Age=?,admin=? where id=?",data,(err,result,fields)=>{
    if (err) {
      resp.send("Connection Error");
    }
    else {
      resp.send(result);
    }
  })
});
app.delete('/:id',(req,resp)=>{
  const data = [req.params.id];

  dbConnect.query("DELETE FROM persons WHERE id = ?",data,(err,result,fields)=>{
    if (err) {
      resp.send("Connection Error");
    }
    else {
      resp.send(result);
    }
  })
});



// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     user: 'root',
//     host: 'localhost', 
//     password: 'abcd', // Replace with your actual password
//     database: 'test'
// });

// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err.message);
//     } else {
//         console.log('Connected to MySQL');
//         // Your code here
//     }
// });
//  connection.query("select * from persons",(err,result)=>{
//   console.log('result',result);
//  })