import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { createServer } from 'node:http'
import connectDB from './db'
import globalRouter from './routes/global-router'
import { logger } from './logger'
import { listBuckets } from './middlewares/s3-middleware'

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use('/api/v5', globalRouter)

listBuckets()

const server = createServer(app)

server.listen(5000, () => {
  console.log('server running at http://localhost:5000/api/v5')
})
