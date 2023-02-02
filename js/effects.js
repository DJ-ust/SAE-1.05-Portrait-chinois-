window.addEventListener('load', (event) => {
    
   

var card = document.querySelectorAll(".card");


        
        
// cette fonction forEach s'applique à toutes les éléments ayant la classe ".card" pour leur appliquer leurs effets (idée initiale du youtuber "Front-end")
card.forEach( el => {


    
    el.addEventListener("mousemove", e => {

        
        let elRect = el.getBoundingClientRect()

        let x = e.clientX - elRect.x
        let y = e.clientY - elRect.y
        
        let midCardWidth = elRect.width / 2
        let midCardHeight = elRect.height / 2

        let angleY = -(x - midCardWidth) / 8
        let angleX = (y - midCardHeight) / 8

        let glowX = x / elRect.width * 100
        let glowY = y / elRect.height * 100
        
        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)` 
        el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(254, 240, 255,0.25), transparent)`
    })

    el.addEventListener("mouseleave", () => {
            el.children[0].style.transform = "rotateX(0) rotateY(0)"
            el.children[1].style.transform = "rotateX(0) rotateY(0)"
            el.children[1].style.background = `none`
    })

      

})





// fonction permettant d'afficher le nav lorsqu'on clique sur le button
var button = document.querySelector("#myButton")

    
  function closeNav() {
    document.document.querySelector("#myNav").style.width = "0%";
  }

   button.addEventListener('click', function(e){
    document.querySelector("#myNav").style.width = "100%";
    document.querySelector("#myNav").style.opacity = "0.98";
    
  })


// fonction pour fermer le nav en cliquant sur la croix
var closer = document.querySelector("#croix")

    
    closer.addEventListener('click', function(e){
    document.querySelector("#myNav").style.width = "0";
    document.querySelector("#myNav").style.opacity = "0";
    
  })






var numero = 0;
var num_lien = numero+1;
var bouton_submit = document.querySelector("#sub")

// Récupérer les entrées du formulaire :
bouton_submit.addEventListener('click', function (e) {
  
    document.querySelector('#your_turn').innerHTML += "<div class=\"slide\" id=" + numero +"><a href=" +"#"+ (numero+1) +"><div class=\"card\"><div class=\"content-card\"><section class=\"frame\"><img src="+ document.querySelector("#your_image").value + " alt=\"\"></section><section class=\"texte\"><p>Si j'étais " + document.querySelector("#your_analogie").value +  " je serai " + document.querySelector("#your_valeur-analogie").value + " " + document.querySelector("#your_argumentation").value + "</p></section></div><div class=\"glow\"></div></div></a></div>";
    document.querySelector("#myNav").style.width = "0";
    document.querySelector("#myNav").style.opacity = "0";
    
    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=justin.paul&courriel=" + document.querySelector("#your_mail").value + "&message=Si j'étais " + document.querySelector("#your_analogie").value + ",je serais " + document.querySelector("#your_valeur-analogie").value + "Parce que " + document.querySelector("#your_argumentation").value).then(function (response) {
            response.json().then(function (data) {
                if (data.status == "success") {
                    document.querySelector("#message").innerHTML = "Votre message a bien été reçu";
                } else {
                    document.querySelector("#message").innerHTML = "Problème : votre message n'a pas été reçu";
                }
            })
        })
   
})




});