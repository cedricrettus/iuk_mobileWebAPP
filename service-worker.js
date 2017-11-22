"use strict";

self.addEventListener('fetch', function(event) {
      if (/\.jpg$|.png$/.test(event.request.url)) { ❶
    var supportsWebp = false;
    if (event.request.headers.has('accept')) { ❷
    supportsWebp = event.request.headers
    .get('accept')
    .includes('webp');
    }
    if (supportsWebp) { ❸
    var req = event.request.clone();
    var returnUrl = req.url.substr(0, req.url.lastIndexOf(".")) + ".webp"; ❹
    event.respondWith(
    fetch(returnUrl, {
    mode: 'no-cors'
    })
    );
    }
    }

});
