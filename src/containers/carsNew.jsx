import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Car} from '../components/car.jsx';
import { createCar } from '../actions';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const required = value => value ? undefined : 'Required'
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
const minLength2 = minLength(2)
const licence_plate = value =>
  value && !/^[A-Z0-9]*$/.test(value) ?
  'Invalid Licence Plate' : undefined
const licence_plate_format = value =>
  value && /.+@aol\.com/.test(value) ?
  'should be all caps and no special chars' : undefined

class CarsNew extends Component {

  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, (car) => {
      this.props.history.push('/');
      return car;
    });
  };

  renderField({ input, label, type, meta: { touched, error, warning }}) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          className="form-control"
          type={type}
          {...input}
        />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    );
  };

  render() {
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
            <div className="car-form">
              <div className="grey-background">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                  <Field
                    label="Brand"
                    name="brand"
                    type="text"
                    component={this.renderField}
                    validate={[required, minLength2]}
                  />
                  <Field
                    label="Model"
                    name="model"
                    type="text"
                    component={this.renderField}
                    validate={[required, minLength2]}
                  />
                  <Field
                    label="Owner"
                    name="owner"
                    component={this.renderField}
                    validate={[required, minLength2]}
                  />
                  <Field
                    label="Licence Plate"
                    name="licence_plate"
                    component={this.renderField}
                    validate={[required, minLength2, licence_plate]}
                    warn={licence_plate_format}
                  />
                  <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.invalid }>
                    Create Car
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

// export default connect(mapStateToProps, null)(CarsNew);

export default reduxForm({
  form: 'newCarForm'
})(
  connect(mapStateToProps, { createCar })(CarsNew)
);
