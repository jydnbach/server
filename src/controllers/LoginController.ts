import { get } from './decorators/routes';
import { Router, Request, Response, NextFunction } from 'express';

@controller('/')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    // req.session
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
      `);
    } else {
      res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
      `);
    }
  }
}
