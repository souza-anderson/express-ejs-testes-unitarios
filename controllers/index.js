const home = (req, res) => {
  res.render('home', {
    time: 10,
    list: ['Anderson', 'Felipe', 'Teste'],
    animais: [
      { name: 'cachorro' },
      { name: 'gato' },
      { name: 'foca' },
      { name: 'coala' },
      { name: 'girafa' }
    ]
  })
}

const pagina1 = (req, res) => {
  res.send('Fullstack Master')
}
const calc = (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query
    const soma = parseFloat(num1) + parseFloat(num2)
    res.render('calc', { soma })
  } else {
    res.render('Error')
  }
}

const par = (req, res) => {
  const isPar = (req.params.num % 2) === 0

  if (isPar) {
    res.send('O numero eh par')
  } else {
    res.send('O numero eh impar')
  }
}

module.exports = {
  home,
  pagina1,
  calc,
  par
}