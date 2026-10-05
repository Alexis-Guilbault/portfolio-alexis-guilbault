async function loadProjects() {
    const response = await fetch('./data/data.json');
    if (!response.ok) {
        throw new Error(`Impossible de charger les projets (${response.status})`);
    }
    const projects = await response.json();
    return projects;
}

async function init() {
    const projects = await loadProjects();
    projects.forEach(project => {
        if (project_list) {project_list.innerHTML += createProjectCard(project);}
    });
}

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
                        }
                    }
                </style>
                <div class="project-card__content">
                    <h3>${project.title}</h3>
                    <p>${project.category} - ${project.year}</p>
                </div>
            </a>`;
}

let project_list = document.querySelector("#projets");


init();