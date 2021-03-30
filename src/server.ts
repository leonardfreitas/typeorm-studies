import 'reflect-metadata';
import app from './app';
import './database';

app.listen(3000, () => {
  console.log('Running Server on port 3000');
});
