import express from 'express'
import { prismaClient } from 'db/client'

const app = express()
app.use(express.json())



app.post('/users', async (req, res) => {
    const { username , password } = req.body

    if (!username || !password) {
      res.status(400).send('Missing username or password')
      return
    }
    const user = await prismaClient.user.create ({
      data: {
        username,
        password,
      },
    })
    res.send(user)
  })


app.get('/users', async (req, res) => {
  const users = await prismaClient.user.findMany()
   .then((users) => {
     return users.map((user) => {
       return {
         id: user.id,
         username: user.username,
       }
     })
   })
   .catch((err) => {
     console.log(err)
     res.status(500).send('Error fetching users')
   })
})


app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
 