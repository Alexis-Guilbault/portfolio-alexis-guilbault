/* Gestion des onglets */
const boutons = document.querySelectorAll('.bouton');
const liste_logiciels = document.querySelector('#logiciel');
const liste_langages = document.querySelector('#programmation');
const liste_savoirs = document.querySelector('#savoir-etre');
const liste_listes = [liste_logiciels,liste_langages,liste_savoirs];

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        let i = 0;
        boutons.forEach(bouton2 => {
            i++;
            if (bouton != bouton2) {
                bouton2.classList.remove("selected");
                liste_listes[i-1].classList.add("hidden");
            } else {
                bouton2.classList.add("selected");
                liste_listes[i-1].classList.remove("hidden");
            }
        })
    })
});

/* pseudo-terminal */
const bouton_x = document.querySelector("#x");
const terminal = document.querySelector('.terminal-body');

bouton_x.addEventListener("click", () => {
    if (bouton_x.innerHTML == "x") {
        terminal.classList.add("hidden")
        bouton_x.innerHTML = "v";
    } else {
        terminal.classList.remove("hidden")
        bouton_x.innerHTML = "x";
    }
});

/* flash > */
const trait = document.querySelector("#trait");

var compteur = setInterval(() => {
    trait.style.opacity = trait.style.opacity * -1 + 1;
}, 400);