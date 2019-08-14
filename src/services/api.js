export default {
  login: (loginData) => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    }

    return fetch('http://localhost:3000/api/v1/login', reqObj)
      .then(res => res.json())
  },


  signup: (loginData) => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    }

    return fetch('http://localhost:3000/api/v1/users', reqObj)
      .then(res => res.json())
  },



  currentUser: (token) => {
    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    }

    return fetch('http://localhost:3000/api/v1/current_user', reqObj)
      .then(res => res.json())
  },

  updateUser: (username) => {
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(username)
    }

    return fetch(`http://localhost:3000/api/v1/current_user/${username.userID}`, reqObj)
      .then(res => res.json())
  },

  deleteUser: (user) => {
    return fetch(`http://localhost:3000/api/v1/current_user/${user.userID}`, {method: 'DELETE'})
  },


}
