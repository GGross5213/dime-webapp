import Parse from './parse'

export const updateBalance = async (ctx) => {
  const {sessionToken} = ctx.session;
  const {balance} = ctx.request.body;

  ctx.body = await Parse.Cloud.run('updateUserBalance', {balance}, {sessionToken}).then((resp) => {
    return {error: false, resp};
  }, (error) => {
    return {error: true, resp};
  })
}

export const getTransactions = async (ctx) => {
  const {sessionToken} = ctx.session;

  ctx.body = await Parse.Cloud.run('getTransactions', {}, {sessionToken}).then((resp) => {
    return {error: false, resp};
  }, (error) => {
    return {error: true, resp};
  });
}

export const getUserAccessToken = async (ctx) => {
  const {sessionToken} = ctx.ession;

  ctx.body = Parse.Cloud.run('getUserAccessToken', {}, {sessionToken}).then((resp) =>{
    return { error: false, resp}
  }, (error) => {
    return { error: true, resp};
  })
}
