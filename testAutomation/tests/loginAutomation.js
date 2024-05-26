module.exports = 
{
    'Navigate Method' : function (browser)
    {
        browser
            .url("https://www.saucedemo.com/")
            .url(function (result)
            {
                console.log(result.value);
            })
            .end();
    
    },

    'Login with Valid Credentials' : function (browser) 
    {
      browser
        .url("https://www.saucedemo.com/")
        .waitForElementVisible("#root > div > div.login_wrapper", 1000)
        .setValue("#user-name", "standard_user") // loging in with valid username
        .setValue("#password", "secret_sauce") // loging in with valid password
        .click("#login-button")
        .waitForElementVisible("#inventory_container", 1000)
        .assert.containsText("#item_4_title_link > div", "Sauce Labs Backpack") //check if the inventory page opened?
        .end();
    },

    'Login with Invalid Username then with Valid Username' : function (browser) 
    {
      browser
        .url("https://www.saucedemo.com/")
        .waitForElementVisible("#root > div > div.login_wrapper", 1000)
        .setValue("#user-name", "invalid_user") // loging in with invalid username
        .setValue("#password", "secret_sauce")
        .click("#login-button")
        .waitForElementVisible("#login_button_container > div > form > div.error-message-container.error", 1000) // asserting the visiblity of the error
        .assert.containsText("#login_button_container > div > form > div.error-message-container.error > h3", "Epic sadface: Username and password do not match any user in this service")
        
        // loging with valid credentials
        .setValue("#user-name", "standard_user") // loging in with valid username
        .click("#login-button")
        .waitForElementVisible("#inventory_container", 1000)
        .assert.containsText("#item_4_title_link > div", "Sauce Labs Backpack")
        .end();
    },

    'Login with Invalid Password then with Valid Password' : function (browser) 
    {
      browser
        .url("https://www.saucedemo.com/")  
        .waitForElementVisible("#root > div > div.login_wrapper", 1000)
        .setValue("#user-name", "standard_user")
        .setValue("#password", "invalid_password") // loging in with invalid password
        .click("#login-button")
        .waitForElementVisible("#login_button_container > div > form > div.error-message-container.error", 1000) // asserting the visiblity of the error
        .assert.containsText("#login_button_container > div > form > div.error-message-container.error > h3", "Epic sadface: Username and password do not match any user in this service")
        
        // loging with valid credentials
        .setValue("#password", "secret_sauce") 
        .click("#login-button")
        .waitForElementVisible("#inventory_container", 1000)
        .assert.containsText("#item_4_title_link > div", "Sauce Labs Backpack")
        .end();
    },

    'Login with Empty Fields then with Valid Credentials' : function (browser) 
    {
      browser
        .url("https://www.saucedemo.com/")  
        .waitForElementVisible("#root > div > div.login_wrapper", 1000)
        .click("#login-button") // loging in with empty fields
        .waitForElementVisible("#login_button_container > div > form > div.error-message-container.error", 1000) // asserting the visiblity of the error
        .assert.containsText("#login_button_container > div > form > div.error-message-container.error > h3", "Epic sadface: Username is required")
        
        .setValue("#user-name", "standard_user") // loging in with valid username but without password
        .click("#login-button")
        .waitForElementVisible("#login_button_container > div > form > div.error-message-container.error", 1000) // asserting the visiblity of the error
        .assert.containsText("#login_button_container > div > form > div.error-message-container.error > h3", "Epic sadface: Password is required")
        
        .setValue("#password", "secret_sauce") // loging in with valid password
        .click("#login-button")
        .waitForElementVisible("#inventory_container", 1000)
        .assert.containsText("#item_4_title_link > div", "Sauce Labs Backpack")
        .end();
    },
  
    'Login with Lockedout User' : function (browser) 
    {
      browser
        .url("https://www.saucedemo.com/")
        .waitForElementVisible("#root > div > div.login_wrapper", 1000)
        .setValue("#user-name", "locked_out_user") // loging in with locked username
        .setValue("#password", "secret_sauce")
        .click("#login-button")
        .waitForElementVisible("#login_button_container > div > form > div.error-message-container.error", 1000) // asserting the visiblity of the error
        .assert.containsText("#login_button_container > div > form > div.error-message-container.error > h3", "Epic sadface: Sorry, this user has been locked out.")
        
        .setValue("#user-name", "standard_user") // loging in with valid username
        .click("#login-button")
        .waitForElementVisible("#inventory_container", 1000)
        .assert.containsText("#item_4_title_link > div", "Sauce Labs Backpack")
        .end();
  },

  'Login with Differenet User then Repeat' : function (browser) 
  {
    browser
      .url("https://www.saucedemo.com/")
      .waitForElementVisible("#root > div > div.login_wrapper", 1000)
      .setValue("#user-name", "problem_user") // loging in with valid username
      .setValue("#password", "secret_sauce")
      .click("#login-button")
      .waitForElementVisible("#inventory_container", 1000)
      .assert.containsText("#item_4_title_link > div", "Sauce Labs Backpack")
      .click("#react-burger-menu-btn")
      .waitForElementVisible("#menu_button_container > div > div.bm-menu-wrap > div.bm-menu", 1000)
      .click("#logout_sidebar_link") // loging out

      .setValue("#user-name", "performance_glitch_user") // loging in with valid username
      .setValue("#password", "secret_sauce")
      .click("#login-button")
      .waitForElementVisible("#inventory_container", 1000)
      .assert.containsText("#item_4_title_link > div", "Sauce Labs Backpack")
      .click("#react-burger-menu-btn")
      .waitForElementVisible("#menu_button_container > div > div.bm-menu-wrap > div.bm-menu", 1000)
      .click("#logout_sidebar_link") // loging out

      .setValue("#user-name", "error_user") // loging in with valid username
      .setValue("#password", "secret_sauce")
      .click("#login-button")
      .waitForElementVisible("#inventory_container", 1000)
      .assert.containsText("#item_4_title_link > div", "Sauce Labs Backpack")
      .click("#react-burger-menu-btn")
      .waitForElementVisible("#menu_button_container > div > div.bm-menu-wrap > div.bm-menu", 1000)
      .click("#logout_sidebar_link") // loging out

      .setValue("#user-name", "visual_user") // loging in with valid username
      .setValue("#password", "secret_sauce")
      .click("#login-button")
      .waitForElementVisible("#inventory_container", 1000)
      .assert.containsText("#item_4_title_link > div", "Sauce Labs Backpack")
      .end();
  },

  };