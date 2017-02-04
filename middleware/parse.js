import Parse from 'parse/node'
Parse.initialize(process.env.APP_ID || '11011011');
Parse.serverURL = 'https://thawing-woodland-86198.herokuapp.com/parse'

export default Parse
