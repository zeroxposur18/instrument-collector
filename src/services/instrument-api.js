import tokenService from './tokenService';

const BASE_URL = '/api/instruments/';

// export function index() {
//   const options = {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     }
//   };
//   return fetch(BASE_URL, options).then(res => res.json());
// }

// export function create(score) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       // Add this header - don't forget the space after Bearer
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     },
//     body: JSON.stringify(score)
//   };
//   return fetch(BASE_URL, options).then(res => res.json());
// }

export function index() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(instrument) {
  return fetch(BASE_URL, {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(instrument)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

export function update(instrument) {
  return fetch(`${BASE_URL}/${instrument._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(instrument)
    }).then(res => res.json());
}