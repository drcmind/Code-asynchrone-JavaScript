//Fetch API
const getEmployes = (ressource) => {
    fetch(ressource).then(reponse => {
        return reponse.json();
    }).then(data => console.log(data))
    .catch(err => console.log(err));
}

getEmployes('data/empAmazon.json');
getEmployes('data/empFacebook.json');
getEmployes('data/empGoogle.json');