import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Car} from '../components/car.jsx';
import {setCars} from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class CarsIndex extends Component {
  componentWillMount() {
    this.props.setCars(this.props.garage);
  }

  render() {
    return (
      <div className='row'>
        <div className="col-xs-12">
          <div className="index-wrapper">
            <div className="sidebar">
              <h1>Garage {this.props.garage}</h1>
              <Link to={`/cars/new`}>
                <button className="btn-cta">Add a car</button>
              </Link>
            </div>
            <div className="car-list">
              <div className="grey-background">
                {this.props.cars.map((car) => {
                  return <Car key={car.id} car={car}/>
                })}
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
    { setCars: setCars },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
