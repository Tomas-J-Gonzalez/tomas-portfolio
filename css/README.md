# How I built my site

As of Feb 28 2024

# Typography 

Typography on the site is set using system defaults, meaning text will render differently depending on your operating system. Personally I like the way this happens. It’s less of a headache to work with browser inconsistences instead of against them.

I recently started using Utopia by James Gilyead & Trys Mudford, to create buttery smooth fluid responsive type. The exact config uses the Major Second modular scale for smaller screen resolutions and the Major Third scale for larger resolutions.

# CSS methodology
I follow SuitCSS methodology developed by Nicholas Gallagher when working with components. It’s very similar to how you might use the BEM method, however I prefer the way it looks. Otherwise theres not much in it. BEM is preferable for larger projects.

I organise my SCSS partials loosely based on ITCSS in terms of order of specificity, however I opted to use a more conventional system for file naming and folder structure.



# Media content
All media on the site (images, GIFs etc) is hosted by Cloudinary, a cloud based storage service. This way I’m not committing large media files to GitHub and can avoid slow build times. Cloudinary provides automatic responsive images and compression with ’transformations’ set in the URL. You can read more about how that works here.

I’ve now switched to a simple responsive image workflow which utilises the power of Cloudinary URL transformations and automatic creation of next-gen image formats. The approach avoids the need for JavaScript and ensures the most optimum format is rendered.

