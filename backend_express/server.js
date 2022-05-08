createApp = require('./app.js');
database = require('./database.js');
const app = createApp(database);
const port = 5000;

app.listen(port, () => {console.log(`Server started on port ${port}`)});