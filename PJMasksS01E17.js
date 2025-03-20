// Ensure that the html and body elements take up the full screen
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.body.style.margin = '0';

// Create the iframe element
const iframe = document.createElement('iframe');

// Set attributes for the iframe
iframe.setAttribute('src', 'https://www.youtube.com/embed/uwjMnu4oTzo?si=9ZDb0XFQIY_OGMo7');
iframe.setAttribute('title', 'YouTube video player');
iframe.setAttribute('frameborder', '0');
iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
iframe.setAttribute('allowfullscreen', '');

// Apply styles to iframe to ensure it fills the screen
iframe.style.display = 'block';
iframe.style.width = '100%';
iframe.style.height = '100%';

// Append the iframe to the body
document.body.appendChild(iframe);
