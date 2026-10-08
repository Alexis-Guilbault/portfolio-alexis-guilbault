async function loadProjects() {
    const response = await fetch('./data/data.json');
    if (!response.ok) {
        throw new Error(`Impossible de charger les projets (${response.status})`);
    }
    const projects = await response.json();
    return projects;
}
/* Fait une requête d'avoir les projets dans data.json. Si ça ne marche pas, montre un message d'erreur. Sinon, transforme en js les données extraites et les retournent. */

async function init() {
    const projects = await loadProjects();
    projects.forEach(project => {
        if (project_list) {project_list.innerHTML += createProjectCard(project);}
    });
}
/* Lance la fonction précédente, et applique la fonction createProjectCard à chaque projet de l'array. */

function createProjectCard(project) {
    return `<a class="project-card" id="${project.id}" href="./projet.html?id=${project.id}">
                <style>
                    #${project.id} {
                        background-image:url("${project.image}");
                        background-repeat:no-repeat;
                        background-size: cover;
                        filter: grayscale(1);
                        transition-property: filter;
                        transition-duration: 500ms;
                        &:hover {
                            filter: grayscale(0);
                            color: #fc0;
                            text-shadow: 0.25vw 0.25vh 0 #6f11b7;
                        }
                    }
                </style>
                <div class="project-card__content">
                    <h3>${project.title}</h3>
                    <p>${project.category} - ${project.year}</p>
                </div>
            </a>`;
}
/* Retourne le HTML des cartes. Du CSS s'y trouve. filter: grayscale(1) = monochrome, sinon en couleur. Du text-shadow est ajouté au hover pour le contraste. */

let project_list = document.querySelector("#projets");

init();