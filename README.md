# Custom Select Menu
This project implements a custom dropdown select menu using HTML, CSS, and JavaScript. It allows users to select an option from a list of social media platforms, enhancing the user experience with a visually appealing and interactive design.

<h2>Key Features</h2>
<h3>Interactive Dropdown Menu</h3>
<h4>Customizable Options</h4>
Users can click on a dropdown menu to select their preferred social media platform. The menu includes options such as Facebook, YouTube, Instagram, Signal, Pinterest, and WhatsApp, each accompanied by an icon representing the platform. 
<h4>Dynamic Text Update</h4>
The selected option is dynamically displayed in the dropdown field, updating the text to reflect the user's choice. 
<h2>Technical Overview</h2>
<h3>HTML Structure</h3>
The HTML file consists of a `div` element that serves as the dropdown container. Inside this container, a `selectField` displays the currently selected option or a prompt to "Select Social Media." The dropdown list is implemented using an unordered list (`ul`) with individual list items (`li`) representing each option. 
<h3>CSS Styling</h3>
<h4>Design and Layout</h4>
The CSS styles create a visually appealing dropdown menu centered on a gradient background. The `selectField` is styled with padding, a light background, and rounded corners for a modern look. The list items are styled to display an icon and text, with hover effects that highlight the selected option. 
<h3>JavaScript Functionality</h3>
<h4>Toggle Dropdown Function</h4>
The JavaScript file controls the visibility of the dropdown menu. When the user clicks the `selectField`, the dropdown list toggles between being visible and hidden. Additionally, when a user selects an option, the text in the `selectField` is updated to reflect the chosen social media platform.

    selectField.onclick = function () {
        list.classList.toggle("hide");
    }
    
    for (option of options) {
        option.onclick = function () {
            selectText.innerHTML = this.textContent;
            list.classList.toggle("hide");
        }
    }

<h2>In Summary</h2>
This custom select menu project offers an intuitive and visually appealing way for users to choose from a list of options. The combination of interactive JavaScript functionality, clean CSS styling, and a structured HTML layout makes this dropdown menu a user-friendly and stylish component for web applications.
