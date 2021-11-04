import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  token?: string
  error?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username, password } = req.body

  if (!username) return res.status(400).json({ error: 'username is required' })
  if (!password) return res.status(400).json({ error: 'password is required' })

  if (username === 'admin' && password === 'admin') {
    return res.json({ token: 'ozJCvYlO9C5TN0TxiLOtwNPo9K2RkmQBmnZBtoCezWuVnXSEm7EZSSHJlTkJm6TK' })
  }

  return res.status(400).json({ error: 'invalid username or password' })
}
