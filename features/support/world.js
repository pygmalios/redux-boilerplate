var zombie = require('zombie');

function World() {
  this.browser = new zombie(); // this.browser will be available in step definitions

  // test element selector
  this.testSelector = function(selector) {
    return `[data-e2e-test=${selector}]`;
  }

  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };
}

module.exports = function() {
  this.World = World;
};
