module.exports = {
  multiMongooseToObject: arr => {
    return arr.map(el => el.toObject())
  },

  mongooseToObject: arg => {
    return arg ? arg.toObject() : arg
  },

  generateSlug: str => {
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûủñç·/_,:;'
    var to = 'aaaaeeeeiiiioooouuuuunc------'
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-') // collapse dashes

    return str
  },
}
