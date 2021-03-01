const baseURL = 'https://playground.tesonet.lt';

const getHeaders = (headers: object) => ({
  'Content-Type': 'application/json',
  ...headers,
});

const validateResponse = (response: Response) => {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    if (response.status > 500) {
      return Promise.reject('5XX');
    }

    return Promise.reject('4XX');
  }
};

const returnJSON = (response: Response) => response.json();

const request = {
  POST: (path: string, body = {}, headers = {}) =>
    fetch(`${baseURL}${path}`, {
      headers: getHeaders(headers),
      body: JSON.stringify(body),
      method: 'POST',
    })
      .then(validateResponse)
      .then(returnJSON),
  GET: (path: string, headers = {}) =>
    fetch(`${baseURL}${path}`, {
      headers: getHeaders(headers),
      method: 'GET',
    })
      .then(validateResponse)
      .then(returnJSON),
};

export default request;
