import Project from './Project.js';
import Task from './Task.js';
import UI from './ui.js';

export default class Storage {
  static currentProject = getMyProjects()[0];

  static initiate() {
    if (storageAvailable('localStorage')) {
      console.log('Local Storage Available');
    }
    else {
      // Too bad, no localStorage for us
      alert('No Local Storage!');
    }
    UI.projectOverlay();
    UI.taskOverlay();

    UI.showProjectList(getMyProjects());
    Project.showProject(this.currentProject);
  }

  static addProjectToDatabase() {
    let formProject = document.getElementById("form-project");
    let fd = new FormData(formProject);
    
    const newProject = new Project(fd.get('name'), fd.get('description'));

    addMyProjects(newProject);
    this.currentProject = newProject;

    UI.showProjectList(getMyProjects());
    Project.showProject(this.currentProject);
  }
  
  static removeProjectFromDatabase() {
    removeMyProjects(this.currentProject);
    this.currentProject = getMyProjects()[0];
    
    UI.showProjectList(getMyProjects());
    Project.showProject(this.currentProject);
  }

  static addTaskToDatabase() {
    let formProject = document.getElementById("form-task");
    let fd = new FormData(formProject);
  
    const newTask = new Task(fd.get('name'), fd.get('description'), fd.get('due-date'));
    removeMyProjects(this.currentProject);
    this.currentProject.tasks.push(newTask);
    addMyProjects(this.currentProject);
  
    Project.showProject(this.currentProject);
  }
}

function storageAvailable(type) {
  let storage;
  try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch (e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

function getMyProjects() {
  // Initiate if there is no current array in localStorage
  if (!localStorage.getItem('myProjects')) {
    localStorage.setItem('myProjects', JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem('myProjects'));
};
function addMyProjects(myProject) {
  let myProjects = getMyProjects();
  myProjects.push(myProject);
  localStorage.setItem('myProjects', JSON.stringify(myProjects));
}
function removeMyProjects(myProject) {
  let myProjects = getMyProjects();
  let index = getMyProjects().indexOf(myProject);
  myProjects.splice(index, 1);
  localStorage.setItem('myProjects', JSON.stringify(myProjects));
}