# Computing 2 Submission Proforma

**CID:** [01740626]

For each section, write a maximum of 200 words.

## Brief
*State what you set out to acomplish with this web app.*

For this app, I wanted to extend my knowledge of coding by making an interactive game. My goal was to have a game that would be fast paced and stressful. I had not done much coding before so I also wanted to look at many different ways of approaching and solving problems. 

## Coding
*Highlight your approach to coding in this project.*

For this project, I wanted to have all files separated logically by topic. Therefore, I first of all split the client side of the application from the server side. I further split the client side into the alien movement, canvas, ui interactions and the client side server stuff. The client should not be able to access the server from their browser. Within the server, I split things up into express things and socket things. I used socket.io for server communication as it is an implementation of web sockets and therefore provides a much faster connection than standard HTTP requests. For futureproofing, the server starts from index.js instead of servers.js because it then becomes easier to have an overview of all the modules involved.

For the coding itself, I tried to not repeat myself as much as I could. I made use of event listeners to make the movement more intuitive. A lot of the logic is based on if statements that determine the distance in pixels from the origin of the canvas.

## UX/UI
*Outline the key elements of your UX/UI design.*

The UI was meant to be simple and straightforward. As I was using canvas, there was not too much DOM manipulation using JavaScript. The user interface is meant to be symbolise being in a spaceship and looking out into the vastness of space. The stark contrast between the black and the white emphasises this while also providing good accessibility because of the high contrast.

The user experience was meant to be one that created excitement. Therefore I implemented a timer function that is always updating so the user knows how little time they have left. I did not add a lot of content apart from the main canvas because that should really be the center of attention.

The instructions were not made too precise so as to let the user learn by experimenting which is the best way.

## Data
*Explain how you structure and process your data.*

The data interaction of the game is useful because it stops the client from being able to decide where the food that gives points spawn. This is done through the use of callbacks triggered when the user presses the start button.

## Debugging
*Describe how you used debugging practices and tools and how they helped you overcome a bug or conceptual issue.*

I used many console.log ‘s to find out where things were going wrong. I learned to start from the minimum way viable to see if a block of code is working. For example, always making sure that I alert(“Connected”) on a new javascript page. If I do not do this, then there is a high risk that I will have forgotten to link the file in my index.html and it will take me a while to find out the error. This idea of checking each step as you go along became very important to me. 

I used some property based tests to see if my functions were returning what I thought they would return.

## Best Practice
*Outline your use of software development best practices*

I made sure to run my code through firefox’s built in accessibility checker and axe’s too. I had to make some changes. As previously mentioned, the code was split into client and server and also css, html and js components.

I did not always conform to the jslint because workarounds were very difficult to implement.
