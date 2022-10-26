// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItemDetails} = props
  const {currencyLogo, usdValue, euroValue, currencyName} = currencyItemDetails

  return (
    <li className="item-card">
      <div className="logo-card">
        <img alt={currencyName} className="currency-logo" src={currencyLogo} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="usd-name">{usdValue}</p>
        <p className="euro-name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
