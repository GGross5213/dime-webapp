export const getCharities = async (ctx) => {
  const Charity = Parse.Object.extends('Charity');
  const charityQuery = new Parse.Query(Charity);
  ctx.body = await charityQuery.find().then((charities) => {
    return {error: false, charities};
  }, (error) => {
    return {error: true, message: error};
  })
}

export const addCharity = async (ctx) => {
   const {sessionToken} = ctx.session;
   const {charityId} = ctx.params;

   ctx.body = await Parse.Cloud.run('addCharity', {charityId}, {sessionToken}).then((resp) => {
     return {error: false, resp};
   }, (error) => {
     return {error: true, message: error};
   });
}

export const removeCharity = async (ctx) => {
  const {sessionToken} = ctx.session;
  const {charityId} = ctx.params;

  ctx.body = await Parse.Cloud.run('removeCharity', {charityId}, {sessionToken}).then((resp) => {
    return {error: false, resp};
  }, (error) => {
    return {error: true, message: error};
  });
}
