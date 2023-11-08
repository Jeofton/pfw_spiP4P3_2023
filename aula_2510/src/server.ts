import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import superheroRoutes from './routes/superhero.routes';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Conectar ao MongoDB
const mongoURL = 'mongodb+srv://jeoftoncosta:8p7VNcC0PyxlQlQb@superhero.x7k6itx.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { })
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });

// Rotas
app.use('/api', superheroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});
