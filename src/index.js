/** @jsx React.DOM */

var NUM_CATS = 6
var LOW_PRICE = 0.001 //cheap cat :)
var HIGH_PRICE = 0.05

var App = require('./components/app')
var cats = require('./cat-data').getCats(NUM_CATS, LOW_PRICE, HIGH_PRICE)
var React = require('react')

React.renderComponent(
  <App products={cats} />,
  document.querySelector('.app')
)
