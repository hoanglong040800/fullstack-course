const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/fullstack-course-dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log('\n---- Connect success ----\n')
  } catch (error) {
    console.log('\n---- Connect fail ----\n')
  }
}

module.exports = { connect }
