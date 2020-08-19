const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
      testcafe     = tc;
      const runner = testcafe.createRunner();

      return runner
        .src(['tests/test_scripts/'])
        .browsers(['chrome --start-fullscreen'])
        .concurrency(4)
        .run();
    })
    .then(failedCount => {
      console.log('Tests failed: ' + failedCount);
      testcafe.close();
    })
    .catch(error => {
      console.log(error)
    })