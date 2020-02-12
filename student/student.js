/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

const sio = require('socket.io-client');
const faker = require('faker');

// const client = sio.connect('http://localhost:3000');
const school = sio.connect('http://localhost:3000/school');


school.emit('join', 'students');

setInterval(() => {

  school.emit('submition',faker.lorem.word());

}, 1000);

school.on('message', msg =>{
  console.log('message : ', msg);
});
