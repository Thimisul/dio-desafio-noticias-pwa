const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

const URL = 'https://stormy-brook-79548.herokuapp.com/api';

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
  getNews, getNewsById

};