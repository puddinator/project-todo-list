import Project from './Project.js';
import Task from './Task.js';
import UI from './ui.js';

export default class Storage {
  static myProjects = [];
  static currentProject = new Project('', '');

  static initiate() {
    UI.projectOverlay();
    UI.taskOverlay();
  }

  static addProjectToDatabase() {
    let formProject = document.getElementById("form-project");
    let fd = new FormData(formProject);
    
    const newProject = new Project(fd.get('name'), fd.get('description'));
    this.myProjects.push(newProject);
    this.currentProject = newProject;
    UI.showProjectList(this.myProjects);
    Project.showProject(this.currentProject);
  }
  
  static removeProjectFromDatabase() {
    this.myProjects.splice(this.myProjects.indexOf(this.currentProject), 1);
    this.currentProject = this.myProjects[0];
    UI.showProjectList(this.myProjects);
    Project.showProject(this.currentProject);
  }

  static addTaskToDatabase() {
    let formProject = document.getElementById("form-task");
    let fd = new FormData(formProject);
  
    const newTask = new Task(fd.get('name'), fd.get('description'), fd.get('due-date'));
    this.currentProject.tasks.push(newTask);
  
    Project.showProject(this.currentProject);
  }
}