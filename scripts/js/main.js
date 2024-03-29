//slow scroll to top of page

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }
  });
  $(".top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

//slow scroll to top of page --end

function announceRouteChange(message) {
    var routeAnnouncer = document.getElementById("routeAnnouncer");
    routeAnnouncer.textContent = message;
}

// Handlebar.js for Navigation module
document.addEventListener('DOMContentLoaded', function() {

    // Data object for SiteHead__template
    const data = {
        pages: [
            { title: 'Index', url: '/', id: 'index-link' },
            { title: 'Bio', url: '/bio', id: 'bio-link' },
            { title: 'Writing', url: '/writing', id: 'writing-link' },
        ]
    };

    // Handlebars navigation template (Declared within HTML File)
    const templateSource = document.getElementById('SiteHead__template').innerHTML;
    const template = Handlebars.compile(templateSource);

    // Render the template with the data
    const renderedHtml = template(data);

    // Insert the rendered HTML into the SiteHead container (Exists within HTML File)
    document.getElementById('SiteHead__container').innerHTML = renderedHtml;
});



/* Automatically add Nav--listItemLinkActive class to Active Page link <a> (Only for Primary NavLinks) */

document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL path
    const path = window.location.pathname;

    // Get the navigation links
    const navLinks = document.querySelectorAll('.Nav--listItemLink');

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        // Get the link's href attribute
        const href = link.getAttribute('href');

        // Normalize the paths for comparison (remove leading/trailing slashes)
        const normalizedPath = path.replace(/^\/|\/$/g, '');
        const normalizedHref = href.replace(/^\/|\/$/g, '');

        // Check if the normalized href matches the normalized current path
        if (normalizedPath === normalizedHref) {
            // Add the active class to the link itself
            link.classList.add('Nav--linkActive');
        }
    });
});


//hello

/* 
document.addEventListener('DOMContentLoaded', function() {
    var circle = document.getElementById('circle');
    var innerBall = document.getElementById('innerBall');
    var isDarkTheme = localStorage.getItem('theme') === 'dark'; // Check if dark theme is set

    setTheme(isDarkTheme); // Set initial theme

    circle.addEventListener('click', function() {
        isDarkTheme = !isDarkTheme; // Toggle theme
        setTheme(isDarkTheme); // Apply new theme
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light'); // Save theme preference to localStorage
        innerBall.setAttribute('aria-label', isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'); // Update ARIA label
    });

    function setTheme(isDark) {
        document.body.classList.toggle('dark-theme', isDark);
        document.body.classList.toggle('light-theme', !isDark);
        
        if (isDark) {
            circle.classList.add('outlined'); // Add outline in dark theme
        } else {
            circle.classList.remove('outlined'); // Remove outline in light theme
        }
    }
});
*/


 // Prevent zooming on double tap for mobile devices
    var touchStartTimestamp = 0;
    var svg = document.getElementById('circle');

    svg.addEventListener('touchstart', function(event) {
        var now = new Date().getTime();
        var delta = now - touchStartTimestamp;
        if (delta < 300) {
            event.preventDefault();
        }
        touchStartTimestamp = now;
    });

    svg.addEventListener('touchend', function(event) {
        // Reset touch start timestamp after a short delay
        setTimeout(function() {
            touchStartTimestamp = 0;
        }, 300);
    });


    

