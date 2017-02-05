export const getUser = () => {
  return fetch('/user', {
    method: 'GET',
    credentials: 'include'
  }).then(response => response.json())
}


export const getCharities = () => {
  return fetch('/charity', {
    method: 'GET',
    credentials: 'include'
  }).then(response => response.json())
}

export const addCharity = (charityId) => {
  return fetch(`/charity/${charityId}`, {
    method: 'POST',
    credentials: 'include'
  }).then(response => response.json());
}

export const removeCharity = (charityId) => {
  return fetch(`/charity/${charityId}`, {
    method: 'DELETE',
    credentials: 'include'
  })
}
