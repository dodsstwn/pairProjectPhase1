function totalHarga(price, discount) {
  let total = price * ((100 - discount)/100)
  return `Rp ${total}`
}

module.exports = totalHarga