const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send({
    'status': 'OK',
    'version': '1.0.0',
    'info': process.env.APP_NAME,
  })
})

module.exports = router;