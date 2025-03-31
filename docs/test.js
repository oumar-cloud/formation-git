function multiplierParDeux(nombre) {
    return nombre * 2;
}

function multiplierParTrois(nombre) {
    return nombre * 3;
}

// Tests
console.log("2*5=",multiplierParDeux(5)); // 10
console.log("3*5=",multiplierParTrois(5)); // 15


function ajouterExclamation(texte) {
    return texte + "!";
}

function concatener(texte1, texte2, texte3) {
    return texte1 + " " + texte2 + " " + texte3;
}

// Tests
console.log(ajouterExclamation("Bonjour")); // Bonjour!
console.log(concatener("Bonjour", "tout le monde","cv")); // Bonjour tout le monde

function messageComplet(prenom) {
    let message = concatener("Bonjour", prenom);
    return ajouterExclamation(message);
}

// Tests
console.log(messageComplet("Alice")); // Bonjour Alice!
console.log(messageComplet("Bob"));   // Bonjour Bob!
