# React-Photo-Gallery SPA

Select photos from my landscape photography displayed on a specific region(US state).
You can select states via an SVG map or drop-down list.

Photos are hosted on flickr and flickr API called for generating images.

# Purpose

The purpose of this project was mostly to become more familiar with React.
This includes the use of mostly React funcational components and hooks.
Ideally passing props when needed.

Secondly using wbepack/babel to compile codebase down.
Lastly interacting with an API for practice.

# Flickr API

This project utilizes the flickr API to fetch photos. Specifically photos the author has taken. This approach gave access to free hosting of images without compression and an interactive way to get the photos for display without having to go to flickr.com. A Redirect will be attached to each image though for fullscreen viewing and EXIF data.

# React

Using React to create multiple components to assemble together the SPA gallery page. Components were broken down as much as possible. All but one are functional components.
React hooks are used to access state. In this project useState & useEffect are used to update the page when new requests are made to the flickr API.

# USAMap SVG

An interactive SVG. This is available through NPM.  
The only class based component, each state has an onClick handler that takes the user to photos of the state clicked.

# Sass

Sass is used for styling the components. Currently styling is a work in progress.

# Webpack / Babel

Rather than using the default create-react-app npm build command the project used a custom configured webpack & babel file to bundle up the code base for production. The reason for this is currently create-react-app does not use the latest version of webpack and babel. The idea was to move these files to another codebase to be hosted.
