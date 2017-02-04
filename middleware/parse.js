import Parse from 'parse/node'
Parse.initialize(process.env.APP_ID);
Parse.serverURL = 'https://thawing-woodland-86198.herokuapp.com/parse'

export default Parse
