const express = require('express');
const basicAuth = require('express-basic-auth');
const router = express.Router();

router.use(basicAuth({
  users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
  challenge: true,
}));

router.get('/dashboard', (req, res) => {
  res.json({ message: 'Welcome to Admin Dashboard' });
});

module.exports = router;