import Parse from './parse'

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
            await next();
        }
        else {
          console.log('Session : ', ctx.session)
            if (ctx.session.sessionToken == null) {
                //redirect to login
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
  await ctx.render('login.html');
}

export const postLogin = async (ctx) => {
  const { username, password }  = ctx.request.body;
  const response = await Parse.User.logIn(username, password).then((user) => {
    //ctx.session.sessionToken = user.getSessionToken();
    //ctx.session.url = null;
    return {error: false, sessionToken: user.getSessionToken()};
  }, (error) => {
    return { error: true, message: error};
  });

  if(!response.error){
    ctx.session.sessionToken = response.sessionToken;
    ctx.body = { error: false, url: '/'};
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
  await ctx.render('signUp.html');
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
