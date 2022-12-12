import { Router, Request, Response } from "express";
import { scraping } from "../Scraping";
// import io from "../server";


const route = Router();

route.get('/', async (_req: Request, res: Response) => {
  const re = await scraping()  
  res.json(re);
});

export default route;
