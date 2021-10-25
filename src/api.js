const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

const URL = 'http://localhost:3000/api';

function getNews(subject) {
  return fetch(`${URL}/${subject}`, params)
    .then((response) => response.json())
    .catch(error => {
      console.error('Ocorreu um erro: ', error)
    })
}

function getNewsById(subject, id) {
  return fetch(`${URL}/${subject}/${id}`, params)
    .then((response) => response.json())
    .catch(error => {
      console.error('Ocorreu um erro: ', error)
    })
}

export default {
  getNews

};