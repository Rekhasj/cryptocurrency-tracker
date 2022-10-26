import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrencyData()
  }

  getCryptoCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const currency = await response.json()
    console.log(currency)

    const updatedCurrencyList = currency.map(eachCurrency => ({
      currencyLogo: eachCurrency.currency_logo,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
      id: eachCurrency.id,
      currencyName: eachCurrency.currency_name,
    }))

    this.setState({currencyList: updatedCurrencyList, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    // testid="loader"
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="list-container">
            <h1 className="list-heading">Cryptocurrency Tracker</h1>
            <img
              alt="cryptocurrency"
              className="list-image"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
            />
            <ul className="item-container">
              <li className="item-list-container">
                <p className="title">Coin Type</p>
                <div className="coin-details-card">
                  <p className="usd">USD</p>
                  <p className="euro">EURO</p>
                </div>
              </li>

              {currencyList.map(eachCurrency => (
                <CryptocurrencyItem
                  currencyItemDetails={eachCurrency}
                  key={eachCurrency.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
