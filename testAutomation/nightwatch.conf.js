// nightwatch.conf.js
module.exports = {
    src_folders: ['tests'],
    webdriver: {
      start_process: true,
      server_path: 'node_modules/.bin/chromedriver',
      port: 9515
    },
    test_settings: {
      default: {
        desiredCapabilities: {
          browserName: 'chrome'
        }
      }
    }
  };
  