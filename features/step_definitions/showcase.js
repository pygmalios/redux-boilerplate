"use strict";

module.exports = function () {
  this.When(/^I select "(.*)" as "(.*)"$/, function (selectedOption, selector, callback) {

    this.browser.select(this.testSelector(selector), selectedOption);
    callback();
  });
}
