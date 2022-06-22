# login-ystem
login system with javascript, html and css

```js
// Bug au niveau de :

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
```
