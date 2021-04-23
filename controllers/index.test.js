const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('Home controller', () => {
  it('home', () => {
    let res = {
      render: function() {}
    }

    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('home', {
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
    indexController.home({}, res)
  })

  it('handles without num1 and num2', () => {
    let res = {
      render: function() {}
    }

    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('Error')
    indexController.calc({ query: {} }, res)
  })

  it('handles with num1 and num2', () => {
    let res = {
      render: function() {}
    }
    let req = {
      query: {
        num1: '10',
        num2: '30'
      }
    }

    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('calc', { soma: 40 })
    indexController.calc(req, res)
  })

  it('handles with num1', () => {
    let res = {
      render: function() {}
    }
    let req = {
      query: {
        num2: '30'
      }
    }

    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('Error')
    indexController.calc(req, res)
  })

  it('handles with num2', () => {
    let res = {
      render: function() {}
    }
    let req = {
      query: {
        num1: '10'
      }
    }

    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('Error')
    indexController.calc(req, res)
  })  
})