
self.addEventListener('fetch', function(event) {
  if (/\.jpg$/.test(event.request.url)) {
    event.respondWith(fetch('https://www.google.ch/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiS5pvewo7XAhUDtBoKHesSCxQQjRwIBw&url=https%3A%2F%2Fwww.xing.com%2Fprofile%2FSamuel_Affolter&psig=AOvVaw3bU3C2c_lMRg_R2APAkQMQ&ust=1509115303044258’));
  }
});
