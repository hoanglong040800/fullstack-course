module.exports = {
  multiMongooseToObject: arr => {
    return arr.map(el => el.toObject())
  },

  mongooseToObject: arg => {
    return arg ? arg.toObject() : arg
  },
}
