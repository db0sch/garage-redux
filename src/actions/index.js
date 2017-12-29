export const SET_CARS = 'SET_CARS'
export const CAR_CREATED = 'CAR_CREATED'

export function setCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json())
  return {
    type: 'SET_CARS',
    payload: promise
  }
}

export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json())
  console.log(promise)
  return {
    type: 'FETCH_CAR',
    payload: promise
  }
}

export function createCar(garage, car, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  }).then(response => response.json())
    .then(callback);

  return {
    type: CAR_CREATED,
    payload: request
  };
}
