const examen = new Promise((success, failure) => {
    const note =Math.random()*20;
    if (note > 10){
        success(note);
    }else{
        failure(note);
    }
})

const examenReussi = (result) => {
    console.log (`Bravo ! resultat ${result}`)
}

const examenRecale = (note) => {
    console.log(`note trop basse: ${note}`)
}

examen.then(examenReussi, examenRecale)