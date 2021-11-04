import type { NextApiRequest, NextApiResponse } from 'next'

const data = {
  name: "matheus henrique",
  email: "matherique@gmail.com",
  password: "admin",
  username: "admin"
}

type Data = {
  data?: typeof data
  token?: string
  error?: string
}

// ozJCvYlO9C5TN0TxiLOtwNPo9K2RkmQBmnZBtoCezWuVnXSEm7EZSSHJlTkJm6TK
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const bearerToken = req.headers.authorization
  
  if (bearerToken) {
    const token = bearerToken.replace('Bearer ', '')

    if (token !== 'ozJCvYlO9C5TN0TxiLOtwNPo9K2RkmQBmnZBtoCezWuVnXSEm7EZSSHJlTkJm6TK') {
      return res.status(401).json({ error: 'invalid token' })    
    } 

    return res.status(200).json({ data })
  }

  return res.status(400).json({ error: 'missing token' })
}
