
var gladiateur = function (nom,pv, force, agilite, rapidite) {
    this.setPv(pv);
    this.setForce(force);
    this.nom = nom;

    this.setAgilite(agilite);
    this.setRapidite(rapidite);
}

//test




gladiateur.prototype.setPv = function (pv) {
    if(pv>=75)
        this.pv = pv;
    else throw new Error("Les pv doivent être supérieurs à 75")

}
gladiateur.prototype.setForce = function (force) {
    if(force>=1 && force <=10)
        this.force = force;
    else throw new Error("Les pv doivent être supérieurs à 75")

}
gladiateur.prototype.setAgilite = function (agilite) {
    if (agilite >= 1 && agilite <= 10)
        this.agilite = agilite;
    else throw new Error("Les pv doivent être supérieurs à 75")

}
gladiateur.prototype.setRapidite = function (rapidite) {
    if (rapidite >= 1 && rapidite <= 10)

        this.rapidite = rapidite;
    else throw new Error("Les pv doivent être supérieurs à 75")

}

gladiateur.prototype.frapper = function (gladiateur) {
    var touche = Math.floor(Math.random() * 10);
    if (touche <= this.agilite) gladiateur.pv -= this.force;
        

}


var glad1;
var glad2;
var interval = 0;


$(document).ready(function () {

    // modele pour une personne

    // bouton pour ajouter une personne 
    $("#combat").click(
      function () {

          glad1 = new gladiateur($("#nom1").val(),$("#pv1").val(),
      $("#force1").val(),
      $("#agilite1").val(),
      $("#rapidite1").val());
          glad2 = new gladiateur($("#nom2").val(), $("#pv2").val(),
              $("#force2").val(),
              $("#agilite2").val(),
              $("#rapidite2").val());





          var combat=setInterval(function () { boucleJeu(); }, 500);

      }
    );

});

var gladiateurs = new Array;
$(document).ready(function () {

    // modele pour une personne

    // bouton pour ajouter une personne 
    $("#add").click(
      function () {

          gladiateurs.push(new gladiateur($("#nom1").val(),$("#pv1").val(),
    $("#force1").val(),
    $("#agilite1").val(),
    $("#rapidite1").val()));


          localStorage.setItem("gladiateurs", JSON.stringify(gladiateurs));

      }
    );

});

$(document).ready(function () {

    // modele pour une personne

    // bouton pour ajouter une personne 
    $("#get").click(
      function () {


          var gladiateurs = JSON.parse(localStorage.getItem("gladiateurs"));
   

          for (var i = 0; i < gladiateurs.length;i++) {
              $("#pvg1").append(gladiateurs[i].nom);
              $("#pvg1").append(gladiateurs[i].pv);
              $("#pvg1").append(gladiateurs[i].force);
              $("#pvg1").append(gladiateurs[i].agilite);
              $("#pvg1").append(gladiateurs[i].rapidite);

              $("#pvg1").append("<br/>");

          }

      }
    );

});

$(document).ready(function () {

    // modele pour une personne

    // bouton pour ajouter une personne 
    $("#combatMode").click(
      function () {


          var gladiateurs = JSON.parse(localStorage.getItem("gladiateurs"));


          for (var i = 0; i < gladiateurs.length; i++) {
              $("#pvg1").append(gladiateurs[i].nom);
              $("#pvg1").append(gladiateurs[i].pv);
              $("#pvg1").append(gladiateurs[i].force);
              $("#pvg1").append(gladiateurs[i].agilite);
              $("#pvg1").append(gladiateurs[i].rapidite);

              $("#pvg1").append("<br/>");

          }

      }
    );

});

$(document).ready(function () {

    // modele pour une personne

    // bouton pour ajouter une personne 
    $("#creationMode").click(
      function () {

          $("#gladiateur2").style.display = 'none';

      

      }
    
)
})
    ;


    function boucleJeu() {
        clearInterval(combat);
        if (interval % (10 - glad1.rapidite) == 0) 
            glad1.frapper(glad2);
    
        if (interval % (10 - glad2.rapidite) == 0)
            glad2.frapper(glad1);


        interval++;
        if (glad1.pv <= 0 && glad2.pv <= 0) { alert("victoire des 2 gladiateurs") }
        if (glad2.pv <= 0) { alert("victoire du gladiateur 1") }

        if (glad1.pv <= 0) { alert("victoire du gladiateur 2") }
        if (glad1.pv <= 0 || glad2.pv <= 0);

        $("#pvg1").empty();
        $("#pvg2").empty();


        $("#pvg1").append(glad1.pv);
        $("#deroulementCombat").append("<br/>");

        $("#pvg2").append(glad2.pv);
        $("#deroulementCombat").append("<br/>");


    

    

    }

