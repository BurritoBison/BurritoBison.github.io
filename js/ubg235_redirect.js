function ubg235Redirect(host, url) {
  function inFrame () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
  }

  function botBrowser() {
    try {
      return navigator.webdriver
    } catch (e) {
        return true;
    }
  }

  if (botBrowser()) {
    console.log('Bot Browser');
  } else {
    console.log('Human Browser');
    if (inFrame()) {
      console.log('In Frame!');
    } else {
      if (window.location.hostname!= host) {
        window.location= url;
      }
    }
  }
}
