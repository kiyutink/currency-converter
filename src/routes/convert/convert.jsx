import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ConverterInput } from "../../components/converterInput";
import { CurrencySelector } from "../../components/currencySelector";
import "./convert.scss";
import { signMapping } from "../../shared/currencyMappings";
import classNames from "classnames";
import {
  addToBalance,
  subtractFromBalance
} from "../../actionCreators/balances";

const mapStateToProps = state => ({
  rates: state.rates,
  balances: state.balances
});

const mapDispatchToProps = {
  addToBalance,
  subtractFromBalance
};

class Convert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceValue: "",
      resultValue: "",
      sourceCurrency: "EUR",
      resultCurrency: "GBP",
      wasSourceChangedLast: true
    };
  }

  componentDidUpdate(prevProps) {
    const {
      wasSourceChangedLast,
      resultCurrency,
      resultValue,
      sourceCurrency,
      sourceValue
    } = this.state;
    if (
      this.props.rates &&
      prevProps.rates &&
      this.props.rates[resultCurrency][sourceCurrency] ===
        prevProps.rates[resultCurrency][sourceCurrency]
    ) {
      return;
    }

    if (wasSourceChangedLast) {
      this.setState({
        resultValue: this.convert(sourceCurrency, resultCurrency, sourceValue)
      });
    } else {
      this.setState({
        sourceValue: this.convert(resultCurrency, sourceCurrency, resultValue)
      });
    }
  }

  getRate = (fromCurrency, toCurrency) =>
    fromCurrency === toCurrency
      ? 1
      : this.props.rates[toCurrency][fromCurrency];

  convert = (fromCurrency, toCurrency, fromValue) => {
    if (fromValue === "") {
      return "";
    }

    return (+fromValue * this.getRate(fromCurrency, toCurrency)).toFixed(2);
  };

  isConversionPossible = () => {
    const { balances } = this.props;

    const { sourceCurrency, sourceValue, resultCurrency } = this.state;

    const balance = balances[sourceCurrency];
    return (
      sourceCurrency !== resultCurrency &&
      +sourceValue > 0 &&
      +balance >= +sourceValue
    );
  };

  makeConversion = () => {
    if (!this.isConversionPossible()) {
      return;
    }
    const { addToBalance, subtractFromBalance } = this.props;
    const {
      resultCurrency,
      resultValue,
      sourceCurrency,
      sourceValue
    } = this.state;
    addToBalance(resultCurrency, +resultValue);
    subtractFromBalance(sourceCurrency, +sourceValue);
    this.setState({
      sourceValue: "",
      resultValue: ""
    });
  };

  render() {
    const {
      sourceValue,
      sourceCurrency,
      resultCurrency,
      resultValue,
      wasSourceChangedLast
    } = this.state;

    const { balances, rates } = this.props;

    if (rates === null) {
      return "Loading...";
    }

    return (
      <div className="convert">
        <div className="convert__cell">
          <ConverterInput
            value={sourceValue}
            autoFocus={true}
            onChange={val => {
              this.setState({
                sourceValue: val,
                wasSourceChangedLast: true,
                resultValue: this.convert(sourceCurrency, resultCurrency, val)
              });
            }}
          />
          <CurrencySelector
            availableCurrencies={["EUR", "USD", "GBP"]}
            initialValue={sourceCurrency}
            onChange={val => {
              if (wasSourceChangedLast) {
                this.setState({
                  sourceCurrency: val,
                  resultValue: this.convert(val, resultCurrency, sourceValue)
                });
              } else {
                this.setState({
                  sourceCurrency: val,
                  sourceValue: this.convert(resultCurrency, val, resultValue)
                });
              }
            }}
          />
        </div>
        <div className="convert__hint">
          Your balance is {balances[sourceCurrency]}{" "}
          {signMapping[sourceCurrency]}
        </div>
        <div className="convert__cell">
          <ConverterInput
            value={resultValue}
            onChange={val => {
              this.setState({
                resultValue: val,
                wasSourceChangedLast: false,
                sourceValue: this.convert(resultCurrency, sourceCurrency, val)
              });
            }}
          />
          <CurrencySelector
            initialValue={resultCurrency}
            availableCurrencies={["EUR", "USD", "GBP"]}
            onChange={val => {
              if (wasSourceChangedLast) {
                this.setState({
                  resultCurrency: val,
                  resultValue: this.convert(sourceCurrency, val, sourceValue)
                });
              } else {
                this.setState({
                  resultCurrency: val,
                  sourceValue: this.convert(val, sourceCurrency, resultValue)
                });
              }
            }}
          />
        </div>
        <div className="convert__hint">
          Your balance is {balances[resultCurrency]}{" "}
          {signMapping[resultCurrency]}
        </div>
        <div className="convert__hint--rate">
          1 {signMapping[sourceCurrency]} ={" "}
          {this.getRate(sourceCurrency, resultCurrency).toFixed(2)}{" "}
          {signMapping[resultCurrency]}
        </div>

        <button
          className={classNames(
            "convert__button",
            !this.isConversionPossible() && "convert__button--inactive"
          )}
          onClick={this.makeConversion}
        >
          Make conversion
        </button>
      </div>
    );
  }
}

Convert.propTypes = {
  rates: PropTypes.object,
  balances: PropTypes.object,
  addToBalance: PropTypes.func,
  subtractFromBalance: PropTypes.func
};

Convert = connect(
  mapStateToProps,
  mapDispatchToProps
)(Convert);
export { Convert };
