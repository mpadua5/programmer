import * as express from 'express';
import * as router from './routes';
import * as bodyParser from 'body-parser';

const port = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/', router);

app.listen(port);

console.log(" ╭━━━━╮  ╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮");
console.log(" ┃╭╮╭╮┃  ┃ I do listen something in port " + port + "  ┃");
console.log("┗┫┏━━┓┣┛ ╰┳╮ This is VERY GOOD !!              ┃");
console.log(" ┃╰━━╯┃━━━╯╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯ ");
console.log(" ╰┳━━┳╯");