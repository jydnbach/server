import { NextFunction, Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(`
      <form method="POST" >
        <div>
          <label>Email</label>
          <input name="email"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
      `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === 'password') {
      // mark this person as logged in
      req.session = { loggedIn: true };

      // redirect them to root route
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }

    // if (email) {
    //   res.send(email.toUpperCase());
    // } else {
    //   res.send('You must provide an email');
    // }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
