import express from 'express'

import route from './routers';

const app = express();
app.use(express.json())

app.use(route)

app.listen(3333, () => console.log('server running on port 3333'))
