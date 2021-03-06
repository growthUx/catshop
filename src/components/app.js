/** @jsx React.DOM */

var React = require('react')
var ModalTrigger = require('react-bootstrap').ModalTrigger
var AboutModal = require('./about-modal')
var CheckoutButton = require('./checkout-button')
var ProductList = require('./product-list')
var BoughtModalTrigger = require('./bought')
var url = require('@url')

var App = React.createClass({
  render: function() {
    var cats = url.getCatsFromUrlConfig()

    return (
      <div>
        <div className="navbar navbar-fixed-top navbar-inverse" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Fake Store for Bitcoin Testnet</a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li>
                  <ModalTrigger modal={<AboutModal />}>
                    <a href="#about">About</a>
                  </ModalTrigger>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><CheckoutButton /></li>
                <li><a href="https://www.coinbolt.com">Return to Coinbolt</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <ProductList data={this.props.products} />
        </div>
        

        {cats.length ? <BoughtModalTrigger /> : <span/> }

      </div>
    )
  }
})

module.exports = App
