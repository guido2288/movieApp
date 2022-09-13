const PORT = 8000;
const express = import('express')
const app = express()
const axios = import('axios')
require('dotenv').config()

app.listen(PORT, () => {
  console.log('Server runing in port 8000')
})