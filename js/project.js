function createVideo(project) {
    return `<iframe width="560" height="315" src="${project.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

async function showProject() {
    let title = document.querySelector("h1");
    let main = document.querySelector("main")
    let video_container = document.querySelector(".video");
    let description = document.querySelector(".description-projet__paragraph");
    let roles = document.querySelector(".description-projet__roles > ul");
    let credits_container = document.querySelector(".description-projet__credits");
    let credits = document.querySelector(".description-projet__credits > ul");
    let logiciels = document.querySelector(".description-projet__logiciels > ul");

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    projects = await loadProjects();
    projet = projects.find(project => project.id == projectId);
     /* Prend le ID du lien et trouve le projet correspondant. */

    /* Titre */
    if (!projet) {
        title.innerText = "Introuvable"
        document.title = "Introuvable"
        return
    }
    else {
        title.innerText = projet.title
        document.title = `${projet.title} - Portfolio d'Alexis Guilbault`
        main.classList.remove("hidden");
    }
    /* Retire le contenu de la page si un projet est correctement choisi. */


    /* Bouton voir la vidéo. */
    video_container.innerHTML += createVideo(projet);
    if (projet.link) {
        video_container.innerHTML += `<p class="bouton-nav"><a href="${projet.link}" target="_blank">Voir le projet</a></p>`
    }
    /* Créé un lien vers un site externe si un lien est présent dans projet.link. */

    /* Description */
    description.innerText = projet.description

    /* rôle */
    projet.roles.forEach(role => {
        roles.innerHTML += `<li>${role}</li>`
    });

    /* collaborateurs */
    if (projet.collaborators) {
        credits_container.classList.remove(`hidden`);
        projet.collaborators.forEach(collab => {
            credits.innerHTML += `<li>${collab}</li>`;
        });
    }

    /* logiciel */
    projet.softwares.forEach(logiciel => {
        logiciels.innerHTML += `<li>${logiciel}</li>`;
    });

    /* Processus */
    if (!projet.process) {
        const processus_creation = document.querySelector(".processus_creation");
        processus_creation.classList.add("hidden");
    }
    /* Cache processus si l'œuvre actuel ne le contient pas. */
}

showProject();