const getEmployes = (ressource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', ressource);
        request.send();
        request.addEventListener('readystatechange', ()=>{
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }else if(request.readyState === 4) {
                reject("Oups!, Quelque chose s'est mal passée");
            }
        });
    })
}

//L'enchainement des promises.
getEmployes('data/empAmazon.json').then(data => {
    console.log('1er promise resolu', data);
    return getEmployes('data/empFacebook.json');
}).then(data => {
    console.log('2iem Promise resolu', data);
    return getEmployes('data/empGoogle.json');
}).then(data =>{
    console.log('3iem Promise resolu', data);
}).catch(err => {
    console.log(err);
});