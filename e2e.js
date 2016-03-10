const exec = require('child_process').exec;

var httpServer = exec('./node_modules/.bin/angularserver --port=8080 --dir=dist --file=index.html', function(error, stdout, stderr){
  console.log('E2E - Exited http-server');
  if(error){
    console.log(stderr);
    return process.exit(1);
  }
  console.log(stdout);
});

var cucumber = exec('./node_modules/.bin/cucumber-js', function(error, stdout, stderr){
  console.log('E2E - finished cucumber');
  httpServer.kill('SIGTERM');

  console.log(stdout);

  if(stderr || error) {
    console.error(stderr, error);
    return process.exit(1);
  }
  process.exit();
})
