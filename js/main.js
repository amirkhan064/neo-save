function getCurrentLocation() {
  fetch('https://api.ipregistry.co/?key=tryout')
    .then(function (response) {
      if (response?.status === 200) {
        const location = response?.json().location;
        if (location?.console) {
          setCountryInfoInLocalStorage(location.country.code);
        }
        return response?.json();
      } else {
        redirectUser('IN');
      }
    })
    .then(function (err) {
      console.log(err);
      redirectUser('IN');
    });
}

function setCountryInfoInLocalStorage(code) {
  if (code) {
    localStorage.setItem('c_code', code);
    redirectUser(code);
  }
}

function getCurrentLocationFromStorages() {
  const currentLocation = localStorage.getItem('c_code');
  redirectUser(currentLocation);
}

function redirectUser(code) {
  if (code === 'DE') {
    window.location.href = '/home-de';
  } else {
    window.location.href = '/home';
  }
}

getCurrentLocation();
