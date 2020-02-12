'use strict';

const sio = require('socket.io-client');
const faker = require('faker');

const client = sio.connect('http://localhost:3000');
const school = sio.connect('http://localhost:3000/school');



school.emit('join', 'teachers');

school.on('message',(submition)=>{
  school.emit('graded',`assignment:  ${submition} grad: ${faker.random.number(10)}`);
});
