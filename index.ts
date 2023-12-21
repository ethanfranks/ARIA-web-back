import 'dotenv/config';
import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.listen(PORT, () => {
  console.log(`ARIA Web Back listening on port ${PORT}.`);
});

app.get("/", (req: Request, res: Response) => {
  res.send(
    "ARIA Web Back is a RESTful API which serves resources from a PostgreSQL database to be consumed by ARIA Web Front, the Active Recall Intelligent Assistant learning platform."
  );
});
