import Storage from './storage'

export default class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.tasks = [];
  }

  static showProject() {
    const projectName = document.querySelector('.project-name');
    const projectDescription = document.querySelector('.project-description');
    const projectTasks = document.querySelector('.tasks');

    projectName.textContent = Storage.currentProject.name;
    projectDescription.textContent = Storage.currentProject.description;

    const deleteProject = document.getElementById('delete-project');
    const cloneDeleteProject = deleteProject.cloneNode(true);
    deleteProject.parentNode.replaceChild(cloneDeleteProject, deleteProject);
    cloneDeleteProject.addEventListener('click', () => {
      Storage.removeProjectFromDatabase();
    });

    projectTasks.innerHTML = ``;
    Storage.currentProject.tasks.forEach(element => {
      projectTasks.appendChild(showProjectTask(element));
    });
  }
}

function showProjectTask(element) {
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
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', () => {
    Storage.currentProject.tasks.splice(Storage.currentProject.tasks.indexOf(element), 1);
    Project.showProject(Storage.currentProject);
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add('delete');
  deleteButton.setAttribute('id', 'delete-task');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    Storage.currentProject.tasks.splice(Storage.currentProject.tasks.indexOf(element), 1);
    Project.showProject(Storage.currentProject);
  });

  projectTask.appendChild(name);
  projectTask.appendChild(description);
  projectTask.appendChild(dueDate);
  projectTask.appendChild(completeButton);
  projectTask.appendChild(deleteButton);

  return projectTask;
}