const addProject = document.getElementById('add-project');
const overlayProject = document.getElementById('overlay-project');
const overlayAddProject = document.getElementById('overlay-add-project');
const overlayCancelProject = document.getElementById('overlay-cancel-project');


const addTask = document.getElementById('add-task');
const overlayTask = document.getElementById('overlay-task');
const overlayAddTask = document.getElementById('overlay-add-task');
const overlayCancelTask = document.getElementById('overlay-cancel-task');

const deleteProject = document.getElementById('delete-project');
const deletetask = document.getElementById('delete-task');
const completeTask = document.querySelector('.complete');

const projectNav = document.querySelector('.projects');

let myProjects = [];
currentProject = new Project('', '');;

addProject.addEventListener('click', () => {
  overlayProject.style.display = 'flex';
});
overlayAddProject.addEventListener('click', addProjectToDatabase);
overlayCancelProject.addEventListener('click', () => {
  overlayProject.style.display = 'none';
});

addTask.addEventListener('click', () => {
  overlayTask.style.display = 'flex';
});
overlayAddTask.addEventListener('click', addTaskToDatabase);
overlayCancelTask.addEventListener('click', () => {
  overlayTask.style.display = 'none';
});

function Project(name, description) {
  // the constructor
  this.name = name;
  this.description = description;
  this.tasks = [];
}

function Task(name, description, dueDate) {
    // the constructor
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
}

function addProjectToDatabase() {
  let formProject = document.getElementById("form-project");
  let fd = new FormData(formProject);

  const newProject = new Project(fd.get('name'), fd.get('description'));
  currentProject = newProject;
  myProjects.push(newProject);
  overlayProject.style.display = 'none';

  newProjectNav = document.createElement('li');
  newProjectNav.textContent = newProject.name;
  newProjectNav.addEventListener('click', () => {
    currentProject = newProject;
    showProject(newProject);
  });
  projectNav.appendChild(newProjectNav);
  currentProject = newProject;
  showProject(newProject);
}

function showProject(newProject) {
  const projectName = document.querySelector('.project-name');
  const projectDescription = document.querySelector('.project-description');
  const projectTasks = document.querySelector('.tasks');

  projectName.textContent = newProject.name;
  projectDescription.textContent = newProject.description;
  projectTasks.innerHTML = ``;
  
  newProject.tasks.forEach(element => {
    projectTasks.appendChild(projectTaskHTML(element));
  });
}

function projectTaskHTML(element) {
  const projectTask = document.createElement('li');
    projectTask.classList.add('task');

    const name = document.createElement("h4");
    name.classList.add('task-name');
    name.textContent = element.name;

    const description = document.createElement("h5");
    description.classList.add('task-description');
    description.textContent = element.description;

    const dueDate = document.createElement("h5");
    dueDate.classList.add('task-due-date');
    dueDate.textContent = element.dueDate;

    const completeButton = document.createElement("button");
    completeButton.classList.add('complete');
    completeButton.textContent = 'complete';
    completeButton.addEventListener('click', () => {
      currentProject.tasks.splice(currentProject.tasks.indexOf(element), 1);
      showProject(currentProject);
    });
    
    const deleteButton = document.createElement("button");
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('id', 'delete-task');
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', () => {
      currentProject.tasks.splice(currentProject.tasks.indexOf(element), 1);
      showProject(currentProject);
    });

    projectTask.appendChild(name);
    projectTask.appendChild(description);
    projectTask.appendChild(dueDate);
    projectTask.appendChild(completeButton);
    projectTask.appendChild(deleteButton);

  return projectTask;
}

function addTaskToDatabase() {
  let formProject = document.getElementById("form-task");
  let fd = new FormData(formProject);

  const newTask = new Task(fd.get('name'), fd.get('description'), fd.get('due-date'));
  currentProject.tasks.push(newTask);
  overlayTask.style.display = 'none';

  showProject(currentProject);
}