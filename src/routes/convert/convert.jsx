import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ConverterInput } from "../../components/converterInput";
import { CurrencySelector } from "../../components/currencySelector";

const mapStateToProps = state => ({
  rates: state.rates
});

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

  convert = (fromCurrency, toCurrency, fromValue) => {
    if (fromValue === "") {
      return "";
    }
    const rate =
      fromCurrency === toCurrency
        ? 1
        : this.props.rates[toCurrency][fromCurrency];
    return (+fromValue * rate).toFixed(2);
  };

  render() {
    const {
      sourceValue,
      sourceCurrency,
      resultCurrency,
      resultValue,
      wasSourceChangedLast
    } = this.state;
    return (
      <div>
        <ConverterInput
          value={sourceValue}
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
    );
  }
}

Convert.propTypes = {
  rates: PropTypes.object
};

Convert = connect(mapStateToProps)(Convert);
export { Convert };
