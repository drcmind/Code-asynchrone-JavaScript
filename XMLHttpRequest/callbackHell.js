const getEmployes = (ressource, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', ressource);
    request.send();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(data);
        }else if(request.readyState === 4){
            callback('Impossible de trouver les données');
        }
    });
}

//Retrouvez tous les employés disponibles Ese par Ese
getEmployes('data/empAmazon.json', data => {
    console.log(data);
    getEmployes('data/empFacebook.json', data => {
        console.log(data);
        getEmployes('data/empGoogle.json', data => {
            console.log(data);
        });
    });
});