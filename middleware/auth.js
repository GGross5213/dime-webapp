import Parse from './parse'
import 'isomorphic-fetch'

export function requireAuth() {
    return async (ctx, next) => {
        // need to do regex to eliminate asset calls
        const img = /\/img\/*/;
        const favicon = /favicon\.ico/;
        const js = /\/*\.js/;
        const css = /\/*\.css/;
        const fonts = /\/*\.woff2*/
        const url = ctx.request.url;
        const assets = img.test(url) || favicon.test(url) || js.test(url) || css.test(url) || fonts.test(url);
        if (url == '/login' || assets || url == '/signup') {
            ctx.session.url = '/login'
            await next();
        }
        else {
          console.log('Session : ', ctx.session);
          console.log('Url: ', url);
            if (ctx.session.sessionToken == null) {
                //redirect to login
                console.log('redirecting');

                ctx.session.url = ctx.request.url;
                await ctx.redirect('/login');
            }
            else {
                await next();
            }
        }
    }
}

export const getLogin = async (ctx) => {
  await ctx.render('login');
}

export const postLogin = async (ctx) => {
  const { username, password }  = ctx.request.body;
  const response = await Parse.User.logIn(username, password).then((user) => {
    //ctx.session.sessionToken = user.getSessionToken();
    //ctx.session.url = null;
    console.log(user);
    return Parse.Promise.as({error: false, sessionToken: user.getSessionToken()});
  }, (error) => {
    return Parse.Promise.as({ error: true, message: error});
  });
  if(!response.error){
    console.log(ctx.session);
    ctx.session.sessionToken = response.sessionToken;
    ctx.body = { error: false, url: '/'};
    console.log(ctx.session);
    ctx.session.url = null;
  }
  else {
    ctx.body = {error: true, message: response.message};
  }
}

export const logout = async (ctx) => {
  ctx.session = null;
  ctx.body = {error: false};
}

export const getSignUp = async (ctx) => {
  await ctx.render('signUp');
}

export const postSignUp = async (ctx) => {
  const {body} = ctx.request;
  const {username, password, ...params} = body;

  if(body.username != null && body.username != null){
    ctx.body = await Parse.User.signUp(username, password, params).then((user) => {
      ctx.session.sessionToken = user.getSessionToken();
      ctx.session.url = null;
      return {error: false, url:'/'};
    });
  }
  else {
    ctx.body = {error: true, message: 'No username or passowrd'};
  }
}

export const getUser = async (ctx) => {
  const {sessionToken} = ctx.session;
  const user = await fetch(Parse.serverUrl + '/users/me', {
    method: 'GET',
    headers: {
      'X-Parse-Application-Id': Parse.APP_ID,
      'X-Parse-Session-Token': sessionToken
    },
    credentials: 'include'
  }).then(response => response.json());

  const charities = await Parse.Cloud.run('getUserCharityList', {}, {sessionToken});

  ctx.body = {error: false, user, charities};

}
