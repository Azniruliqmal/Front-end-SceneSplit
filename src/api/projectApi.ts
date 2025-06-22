import axios from 'axios'

export async function fetchProjects() {
  // Replace with your real API endpoint
  const response = await axios.get('/api/projects')
  return response.data
}

export async function addProject(project: any) {
  const response = await axios.post('/api/projects', project)
  return response.data
}