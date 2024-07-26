import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('hi');
});

export { router };
// curly braces
