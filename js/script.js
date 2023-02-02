//fonction pour aller chercher les objets dans le fichier json
   fetch('js/data.json').then(function (response) {
    response.json().then(function (data) {
        data.forEach(function afficheAnalogie(resultat) {
            document.querySelector('#liste-analogies').innerHTML += "<div class=\"slide\" id=" + resultat.id +"><a href=" +"#"+ resultat.lien +"><div class=\"card\"><div class=\"content-card\"><section class=\"frame\"><img src="+ resultat.img + " alt=\"\"></section><section class=\"texte\"><p>Si j'étais " + resultat.analogie +  " je serais " + resultat.valeur_analogie + " " + resultat.texte + "</p></section></div><div class=\"glow\"></div></div></a></div>";
           
        })
    })
})




