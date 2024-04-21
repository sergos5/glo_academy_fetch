const getData = (url) => {
    fetch(url) 
    .then(response => response.json())
    .then(data => sendData(JSON.stringify(data)))
    .catch(() => alert('Error'));
};


const sendData = (data) => {
    const request = new XMLHttpRequest();
    request.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    request.send(data);


    /* fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => console.log(response)); */
};

getData('db.json');
