export const updateBalance = (balance) => {
  return fetch('/balance', {
    method: 'POST',
    credentials: 'include'.
    body: JSON.stringify({
      balance
    })
  })
}

export const getUserAccessToken = () => {
  return fetch('/accessToken', {
    method: 'POST',
    credentials: 'include'
  });
}

export const getTransactions = () => {
  return fetch('/transaction', {
    method: "GET",
    credentials: 'include'
  });
}
