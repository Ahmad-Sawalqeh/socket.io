'use strict';

const sio = require('socket.io')(3000);

sio.on('connection', socket => {
  console.log('connected on: ', socket.id);
  socket.on('speak', payload => {
    sio.emit('message', payload);
  });
});

const school = sio.of('/school');
school.on('connection', socket => {
  console.log('connected to schoole: ',socket.id);


  socket.on('join', room =>{

    if(room === 'teachers'){
      socket.join('teachers',()=>{
        console.log('joined to teachers room');
      });
    }

    if(room === 'students'){
      socket.join('students',()=>{
        console.log('joined to students room');
      });
    }

  });

  socket.on('submition',submition);

  function submition(submition){
    socket.to('teachers').emit('message', submition);
  }

  socket.on('graded',(payload)=>{
    socket.to('students').emit('message', payload);
  });

  socket.on('school-speak', payload => {
    school.emit('message', payload);
  });

});
