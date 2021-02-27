const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/fullstack-course-dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connect success')
  } catch (error) {
    console.log('Connect fail\n')
  }
}

module.exports = { connect }
