const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const ProjectRouter = require('./project/router');
const ResourceRouter = require('./resource/router');
const TaskRouter = require('./task/router');

const server = express();

server.use(express.json());
server.use(cors() );
server.use(helmet() );

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);

server.use('*', (req, res) => {
    res.status(404).json({ message: "no such endpoint" })
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Finding the real error is 90% of the bug fix',
      message: err.message,
      stack: err.stack,
    })
  })
  
  

module.exports = server;