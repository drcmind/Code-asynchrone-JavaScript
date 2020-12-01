const getEmployes = async () => {
    const reponse1 = await fetch('data/empAmazon.json');
    const data1 = await reponse1.json();
    const reponse2 = await fetch('data/empFacebook.json');
    const data2 = await reponse2.json();
    const reponse3 = await fetch('data/empGoogle.json');
    const data3 = await reponse3.json();
    return [data1, data2, data3];
}

getEmployes().then(data => console.log(data))
.catch(err => console.log(err));