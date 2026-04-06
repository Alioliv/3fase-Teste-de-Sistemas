import express from 'express';

const PORT = 3000;
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// rotas 

app.listen(PORT, () => {
  console.log(`API rodando em: http://localhost:${PORT}`);
});

export default app;     
