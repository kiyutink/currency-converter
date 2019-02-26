import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateRates } from "../../actionCreators/rates";

const mapStateToProps = state => ({
  rates: state.rates
});

const mapDispatchToProps = {
  updateRates
};

let intervalId;

let Convert = props => {
  useEffect(() => {
    props.updateRates();
    intervalId = setInterval(props.updateRates, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div>{JSON.stringify(props.rates)}</div>;
};

Convert.propTypes = {
  rates: PropTypes.object,
  updateRates: PropTypes.func
};

Convert = connect(
  mapStateToProps,
  mapDispatchToProps
)(Convert);
export { Convert };
