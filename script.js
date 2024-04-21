const getData = (url) => {
    fetch(url) 
    .then(response => {
        console.log('Данные получены');
        return response.json();
    })
    .then(data => {        
        sendData(JSON.stringify(data));
        console.log(data);
    })
    .catch(() => alert('Error'));
};


const sendData = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => console.log(response));
};

getData('db.json');
