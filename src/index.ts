import { Hono } from 'hono'

const app = new Hono()

app.get('/helloworld', (c) => {
  return c.json({ result: 'Hello World!' })
})

export default app
