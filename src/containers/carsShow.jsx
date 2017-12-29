import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Car} from '../components/car.jsx';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {fetchCar} from '../actions';


class CarsShow extends Component {
  componentWillMount() {
    this.props.fetchCar(this.props.match.params.id);
  }

  renderCar = (car) => {
    console.log(car);
    return (
      <div className="car-show">
        <h3>{car.brand}</h3>
        <p>model: {car.model}</p>
        <p>owner: {car.owner}</p>
        <p>licence plate: {car.licence_plate}</p>
      </div>
      )
  }

  render() {
    const {car} = this.props
    console.log(this.props);
    return (
      <div className='row'>
        <div className="col-xs-12">
          <div className="index-wrapper">
            <div className="sidebar">
              <h1>Garage {this.props.garage}</h1>
              <Link to={`/`}>
                <button className="btn-cta">Back to list</button>
              </Link>
            </div>
            <div className="car-list">
              <div className="grey-background">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar: fetchCar },
    dispatch
  );
}

function mapStateToProps(state, ownProps) {
  console.log(state.cars)
  const car = state.cars.find((car) => car.id === parseInt(ownProps.match.params.id));
  return { car: car };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
