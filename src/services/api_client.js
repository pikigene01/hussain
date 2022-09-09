function myFetch(endpoint, data) {
  return fetch(`/api${endpoint}`, {
    method: data.method,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data.body),
  });
}

export function getAppointments() {
  return myFetch('/appointments', {});
}

export function postAppointment(appointment) {
  return myFetch('/appointments', {
    method: 'POST',
    body: appointment,
  });
}

export function postEstimate(estimate) {
  return myFetch('/estimates', {
    method: 'POST',
    body: estimate,
  });
}
