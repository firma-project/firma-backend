import app from "./app/app";
import connection from '../config/mongo';


connection
  .then(() => {
  console.log('Mongo ok')
  app.listen(process.env.PORT, () => {
    console.log(`Magic happens on ${process.env.PORT}.`);
  });
})
  .catch(err => {
    console.error('Mongo close', err)
  })


process.on('unhandledRejection', (reason, promise) => {
  console.error(reason)
});

process.on('uncaughtException', (err) => {
  console.error('uncaughtException', JSON.stringify(err))
})
