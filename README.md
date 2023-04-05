# Sign-up Form
This repository is a mock account sign-up form I created to familiarize myself with the layout and structuring of real world webpages. The form itself does not actually store any information, but instead uses httpbin to return information that would otherwise be sent to the web servers database.

With this particular project I learned a lot about CSS selectors and pseudo-selectors, using them to stylize the form for a better UX. I also spent a fair bit of time learning about properties such as calc(), min(), max(), and clamp() to try and achieve optimal image sizing for the background image, as well as utilizing CSS's different positioning modes for the overlaying text.

The javascript in this project was relatively simple, as it was only needed to verify the users input so that the values entered into both password fields matched before submission, which was easily achievable by adding some eventlisteners and a simple function.