function verifLogin() {
    const input_name = document.getElementById("nom-utilisateur").value;
    const input_email = document.getElementById("adresse-mail").value;
    const input_password = document.getElementById("mot-de-passe").value;
	
    console.log(`1: ${input_name}\n2: ${input_email}\n3: ${input_password}`)

    if (input_name == "") {
        document.getElementById("tested-false").innerHTML = "Veuillez introduire un nom d'utilisateur !";
    } else if (input_email == "") {
        document.getElementById("tested-false").innerHTML = "Veuillez introduire une adresse mail !";
    } else if (!input_email.includes("@")) {
        document.getElementById("tested-false").innerHTML = "Veuillez introduire une adresse mail valide !<br><i>Exemple : exemple@exemple.com</i>";
    } else if (input_password == "") {
        document.getElementById("tested-false").innerHTML = "Veuillez introduire un mot de passe !";
    } else {
        if (!input_name === "admin") {
            document.getElementById("tested-false").innerHTML = "Le nom d'utilisateur est introuvable !";
        } else {
            if (!input_email === "admin@admin.com") {
                document.getElementById("tested-false").innerHTML = "L'adresse mail ne correspond pas au nom d'utilisateur !";
            } else {
                if (!input_password === "123456") {
                    document.getElementById("tested-false").innerHTML = "Le mot de passe est faux !";
                } else {
                    document.getElementById("tested-true").innerHTML = "Connexion réussi !"
                    document.getElementById("tested-false").innerHTML = "";
                }
            }
        }
    }  
}