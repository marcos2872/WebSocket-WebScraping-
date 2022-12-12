import { Router, Request, Response } from "express";
import { scraping } from "../Scraping";


const route = Router();

route.get('/', async (req: Request, res: Response) => {
  const re = await scraping()
  console.log(re);
  
  res.json(re);
});

export default route;
