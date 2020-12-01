const getEmployes = async (ressource) => {
    try{
        const reponse = await fetch(ressource);
        if(reponse.status !== 200){
            throw new Error("Oups!, quelque chose s'est mal passé");
        }
        const data = await reponse.json();
        return console.log(data);
    }catch(err){
        console.log(err.message);
    }
}

getEmployes('data/empAmazon.json');
getEmployes('data/empFacebook.json');
getEmployes('data/empGoogle.json');