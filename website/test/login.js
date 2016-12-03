const Browser = require('zombie');

// We're going to make requests to http://facman.com/login
// Which will be routed to our test server localhost:3000
Browser.localhost('facman.com', 80);

describe('User loggs in', function() {

  const browser = new Browser();

  before(function() {
    return browser.visit('/login.html');
  });
  
  describe('is the login form available', function() {
	  it('should show a login form', function() {
		  	browser.assert.success();
		    browser.assert.text('h1', 'FacMan');
		  });
  });

  describe('log in as Student', function() {

    before(function() {
      browser
        .fill('username',    'Student')
        .fill('password', '987654321');
//      return browser.pressButton('#LoginButton');
//      var login = browser.query('LoginButton');
//      browser.fire(login, "click");
      console.log('TEST');
      var form = browser.document.getElementById("loginForm");
      form.submit();
      browser.wait().then(function(error) {
          console.log('Form submitted?');
          console.log(error);
          console.log(browser.location.pathname);
      });
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