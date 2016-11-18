const Browser = require('zombie');

// We're going to make requests to http://facman.com/login
// Which will be routed to our test server localhost:3000
Browser.localhost('facman.com', 80);

describe('User loggs in', function() {

  const browser = new Browser();

  before(function() {
    return browser.visit('/login.html');
  });

  describe('log in as Student', function() {

    before(function() {
      browser
        .fill('username',    'Student')
        .fill('password', '987654321');
      var login = browser.query('LoginButton');
      return browser.fire(login, "click");
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see welcome page', function() {
      browser.assert.text('title', 'FacMan Wilkommen');
    });
    
    it('cookie should be set', function() {
    	browser.assert.text(browser.getCookie('role'), 'student');
    })
  });

});