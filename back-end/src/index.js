const express = require("express")
const mongoose = require('mongoose');

const app = express()
const port = 3000
mongoose.connect('mongodb+srv://jardeljcadm:<password>@cluster0.iyvhm27.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.get("", (req, res) => {
  res.send("Olá mundo")
})

app.listen(port, () => {
  console.log('aplicativo rodando ok')
})



//parei no video https://www.youtube.com/watch?v=zaWFnHagbrM em 30' continuarei a montagem do banco de dados