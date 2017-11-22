self.addEventListener('install', function(event) {
  // Perform install steps
});


self.addEventListener('fetch', function(event) { 
	if (/\.jpg$/.test(event.request.url)) { 
		event.respondWith(fetch('unicorn.jpg’)); 
	}
});

