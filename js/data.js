async function loadProjects() {
    const response = await fetch('../data/data.json');
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
    return `<a href="./projet.html?id=${project.id}">
                <div>
                    <h3>${project.title}</h3>
                    <p>${project.category} - ${project.year}</p>
                </div>
            </a>`;
}

let project_list = document.querySelector("#projets");


init();