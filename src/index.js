const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

// Conectar ao MongoDB
mongoose
  .connect(
    "mongodb+srv://jardeljcadm:Caleby07&Josue08@cluster0.iyvhm27.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB", err);
  });

// Definir o modelo de usuário
const Usuario = mongoose.model("Usuario", {
  nome: String,
  email: String,
  senha: String,
  confirmacaoSenha: String,
});

// Rota GET para a raiz
app.get("/", async (req, res) => {
  const usuarioList = await Usuario.find();
  res.send(usuarioList);
});

// Rota POST para criar um novo usuário
app.post("/", async (req, res) => {
  const novoUsuario = new Usuario({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    confirmacaoSenha: req.body.confirmacaoSenha,
  });
  await novoUsuario.save();
  res.send(novoUsuario);
});

// Rota DELETE para excluir um usuário
app.delete("/:id", async (req, res) => {
  const usuarioDeletar = await Usuario.findByIdAndDelete(req.params.id);
  return res.send(usuarioDeletar);
});

// Rota PUT para atualizar um usuário
app.put("/:id", async (req, res) => {
  const usuarioAtualizar = await Usuario.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      confirmacaoSenha: req.body.confirmacaoSenha,
    },
    {
      new: true,
    }
  );
  return res.send(usuarioAtualizar);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Aplicativo rodando ok na porta ${port}`);
});
