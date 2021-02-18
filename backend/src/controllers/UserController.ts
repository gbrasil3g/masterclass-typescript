import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: 'Guilherme', email: 'dev.guilhermebrasil@gmail.com' },
  { name: 'Test name', email: 'test.email@gmail.com' }
]

export default {  
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService()

    emailService.sendMail({
      to: { 
        name: 'Guilherme Brasil', 
        email: 'dev.guilhermebrasil@gmail.com' 
      }, 
      message: { 
        subject: 'Bem-vindo ao sistema', 
        body: 'Seja bem-vindo' 
      }
    })

    return res.send()
  }
} 