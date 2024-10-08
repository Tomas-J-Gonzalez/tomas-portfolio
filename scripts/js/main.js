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
            { title: 'Resume', url: 'https://res.cloudinary.com/tomasgo/image/upload/v1728188476/tomas-master/pdf/Tomas_Gonzalez_UX_Designer_Oct.2024_wwt3oa.pdf', target: '_blank', id: 'resume-link'  },
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

    // Update the links with target="_blank"
    const resumeLink = document.querySelector('#resume-link');
    if (resumeLink) {
        resumeLink.setAttribute('target', '_blank');
    }
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


