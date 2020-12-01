//Promise (les bases)
const obtenirQuelqueChose = () =>{
    return new Promise((resolve, reject) => {
        //La recherche des données
        resolve('Voici les données');
        reject("Oups!, Quelque chose s'est mal passée");
    })
}

/* obtenirQuelqueChose().then(data => {
    console.log(data);
}, err => {
    console.log(err);
})
 */
obtenirQuelqueChose()
.then(data => console.log(data))
.catch(err => console.log(err));