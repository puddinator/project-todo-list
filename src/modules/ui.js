import Storage from './storage';
import Project from './Project.js';

export default class UI {
  static projectOverlay() {
    const addProject = document.getElementById('add-project');
    const overlayProject = document.getElementById('overlay-project');
    const overlayAddProject = document.getElementById('overlay-add-project');
    const overlayCancelProject = document.getElementById('overlay-cancel-project');

    addProject.addEventListener('click', () => {
      overlayProject.style.display = 'flex';
      clearFormData();
    });
    overlayAddProject.addEventListener('click', () => {
      overlayProject.style.display = 'none';
      Storage.addProjectToDatabase();
    });
    overlayCancelProject.addEventListener('click', () => {
      overlayProject.style.display = 'none';
    });
  }

  static taskOverlay() {
    const addTask = document.getElementById('add-task');
    const overlayTask = document.getElementById('overlay-task');
    const overlayAddTask = document.getElementById('overlay-add-task');
    const overlayCancelTask = document.getElementById('overlay-cancel-task');

    addTask.addEventListener('click', () => {
      overlayTask.style.display = 'flex';
      clearFormData();
    });
    overlayAddTask.addEventListener('click', () => {
      overlayTask.style.display = 'none';
      Storage.addTaskToDatabase();
    });
    overlayCancelTask.addEventListener('click', () => {
      overlayTask.style.display = 'none';
    });
  }

  static showProjectList(myProjects) {
    const projectNav = document.querySelector('.projects');
    projectNav.innerHTML = ``;

    myProjects.forEach((element, index) => {
      let newProjectNav = document.createElement('li');
      if (index == 0) {
        newProjectNav.classList.add('active');
      }

      newProjectNav.textContent = element.name;
      newProjectNav.addEventListener('click', () => {
        document.querySelectorAll('.active').forEach(element => {
          element.classList.remove('active');
        });

        newProjectNav.classList.add('active');
        Storage.currentProject = element;
        Project.showProject();
      });
      projectNav.appendChild(newProjectNav);
    });
  }
}

function clearFormData() {
  document.getElementById("form-task").reset();
  document.getElementById("form-project").reset();
}