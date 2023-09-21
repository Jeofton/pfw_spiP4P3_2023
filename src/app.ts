import bodyParser from 'body-parser';
import express from 'express';
import superHeroRoutes from './routes/superHeroRoutes';


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/superheroes', superHeroRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})