const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./config/db');

const connection = mysql.createConnection(dbconfig);

const app = express();

app.get('/',(req,res,next)=>{
    connection.query("Select * from Users",(error,rows)=>{
        if(error) throw error;
        console.log(rows[0].id);
        res.send(rows);
    })
})

app.listen(3000,()=>{
    console.log("3000번 포트에서 서버 시작");
})