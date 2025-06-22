import { defineStore } from 'pinia'
import { projects as staticProjects } from '../data/projects'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [...staticProjects],
    selectedProjectTitle: staticProjects[0]?.title || '',
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    user: JSON.parse(localStorage.getItem('user') || 'null')
  }),
  getters: {
    selectedProject(state) {
      return state.projects.find(p => p.title === state.selectedProjectTitle)
    }
  },
  actions: {
    setSelectedProject(title) {
      this.selectedProjectTitle = title
    },
    setProjects(newProjects) {
      this.projects = newProjects
    },
    addProject(project) {
      this.projects.push(project)
    },
    setLogin(status) {
      this.isLoggedIn = status
      localStorage.setItem('isLoggedIn', status ? 'true' : 'false')
    },
    setUser(user) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout() {
      this.isLoggedIn = false
      this.user = null
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('user')
    }
  }
})