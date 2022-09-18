
// @ts-ignore
export const bcwServer = new axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 3000
})

// @ts-ignore
export const userServer = new axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/bruh/",
  timeout: 3000
})

// @ts-ignore
export const putUserServer = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/bruh/todos',
  timeout: 3000
})