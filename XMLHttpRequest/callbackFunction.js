const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', 'data/empAmazon.json');
    request.send();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        }else if(request.readyState === 4){
            callback('Impossible de trouver les données', undefined)
        }
    });
}

getTodos((err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});