
# Milestone 2 Project: Interactive Frontend Development


## Target Audience:

- Members of the public that battle with anxiety and are looking for resources to assist them with managing their Anxiety, or getting a greater awareness of the impact of physical health and wellbeing activities on managing mental health.

- Companies who can use the App to help their clients and patients in getting a greater awareness on the importance of physical health and wellbeing activities on managing mental health.

- Medical Institutions who can use the App as an aid for their clients to improve their overall physical and mental health knowledge, to improve their lifestyle by practicing wellbeing activities inspired by the App.


## Purpose: 

- To assist the user in being more aware of the importance of gaining knowledge of the impact of physical health, diet, and wellbeing activities in improving and regulating mental health. 
- To promote awareness of Anxiety and its effects. 
- To assist medical and fitness staff, schools in improving the overall wellbeing, mental health and physical health of their clients/students/collegues by encouraging the use of the App to promote awareness and inspire its users to gain more knowledge and apply this in improving their lives.

***This site will have:***

1. Home Page with explanation about the quiz.

2. Clear Navigation throughout, to Start and quit the quiz, and navigate through the pages, as well as clear/view scores.

3. Questions on wellbeing knowledge in relation to mental health. The questions are customised after research performed
   and all questions and answers are created by myself, using knowledge accumulated from research.

4. Option to store scores or remove scores

5. Simple form to fill in username and submit it to local storage to store their score.


## User Stories:

| User ID | Type     | User Story                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Case Use                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|---------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1       | Personal | **Mandy**<br>A Student App used with friends to test general knowledge on health and anxiety. Is looking for help with managing her anxiety. Finds she did not know as much as she thought and is determined now to find out more about managing her physical health and to help improve her anxiety.| I would use the Quiz<br>to gain an understanding of<br>how much a know about physical<br>health and its effect on my moods.<br><br>Its fun to test my knowledge<br>and its a simple quiz<br>to play when I'm bored also.|| 2       | Personal | **Jason**<br>A young adult in university. Battling with insomnia and decided to do some research on how to improve his health to see if it would have an effect on his insomnia. He found the app on the resonate site and decided to give it a go.|Its made me realise that there are things I can do to improve my mental health, which would help reduce my insomnia. Inspired by the Quiz, I decided to do some more exercise to help regulate my energy levels and moods, as well as to improve my diet, less sugar and caffeine.|
| 3       | Business | **Sarah Personal Fitness Trainer**<br> Sarah was referred to the app by her collegues. She discovered its a useful tool to use with her clients, and has helped remind her about the effect diet has on mental health, in addition to exercise.| My clients are very greatful for the Quiz App which I get them to complete in our first session. It helps them realise that to take care of their body is to take care of them mental health too. || 4       | Business | **Resonate Wellbeing Organisation**<br>Resonates Anxiety website has used the app for their visitors, as a means to engage with them and raise awareness of the importance of tools and other resources in managing mental health. |We are delighted with the development of this App and our clients have given great feedback. Our clients have often completed the quiz more than once.||5       | Business | **GP Doctors Surgery**<br>Uses this App for their patients. They are able to download it via a QR code on a poster in their surgery and from their website.
It has inspired their patients to do more for themselves and ask for advice in realtion to diet and mental health, rather than just asking for pills to manage mental health.|Our practice clients are delighted with this App. It has increased awareness of the importance of diet and exercise in maintaining mental health". Our GP's feel this is helping them manage their patients better.||

*Test Cases: https://github.com/wendybovill/milestone-project-one/blob/8ba93d46f3bb4695df7b07fcc292d98d0c2f78b5/test_cases.md


## Technology Requirements:

Html
Css
Bootstrap 5 (included in script and style links)
Gitpod
VS Code
Git Repository
JS Scripts
Favicons (as pngs and linked in styles in html head section)

XD Design Prototype and Creation
Balsamiq for Wireframes

Chrome, Firefox, Safari
Ipad, Iphone, Macbook for testing
Windows, Android phone for testing
Selenium Extension in Browser and installed in VS Code with NPM to translate .side files


## Development: Html, CSS, Bootstrap, Gitpod, VS code, Github repository. 

*Development Method:*

After receiving technical specification and design requirements, wireframe was created in Balsamiq.
Visual Mockups were then creatd in Adobe XD. The Html and CSS were created for the templates to
ensuring that the JS code was able to interact and have ID's to reference.
CSS was designed with Mobile First approach.

Javascript code was written. Research was done on StackFlow, and WC3 and many other sites, as well
as using some code inspired from the CI modules. The basic variables were setup based on my rough
sketches and page flows. The relevant Elements were called and assigned to functions, and the
functions further defined with outputs step by step. The first being to initate the start of the quiz.
The API was then written, to get the questions which would be called. This was then called in a
load question function, and allocated variables. The array from this was then sliced and distributed
out to populate the Question and Answer elements based on page Id's and Classes, as well as matched
up with the API key names. Once allocated out and displayed, further functions were developed to
change the questions on submission of selection and these were allocated scores, which were then
allocated to Elements to display. Classes were created to display correct or incorrect answer
feedback to the user. Functions applied to change the classes temporarily. The scores were then
written to be saved to the local storage, later recalled and redefined into another variable were the
were then saved out again to the local storage. These were then given a function to display to the
user when retrieved from local storage to display in the Top Scores page. Functions were then 
written to allow the user to clear the local storage of all scores. Further functins were written
to alert the user that All scores would be cleared from storage, and for the user to go ahead
they needed to confirm, or they could cancel the clearing of the scores, remain on the page and
select another option such as to return to the index page, or to restart the quiz.

The footers are designed to be hidden on small mobile devices. Scaling is increased on narrow devices
to allow for lengthy questions and answers to fit in the full scope of the page.

After each change the page was viewed using Live Server in Gitpod VS Code and local VS Code,
and testing was carried out. The Html and Css was put through Jigsaw and W3 Validator, as well as
throughout the development process, using DevTools in the browser. Errors were identified and
corrected throughout the proces, screenshots were taken to document these. There are multiple
Bootstrap 3rd party vendor errors, but these are standard and so ignored. I ignored some css errors
relating to non-standard code used to resize elements, eg using rem for more versatile resizing of
the overall site for more responsiveness. CSS complained about the unit chosen. It was chosen 
deliberately for more responsiveness and flexibility. Where bootstrap was overridden, I had to use
!important to override it.

With regards to site functionality testing, I used Selenium IDE, and NPM in VSCode to convert the 
.side file for output. Tests are attached. All tests passed.

At the end of the Development, before final testing the code for CSS and html was again put through
the respective validators at W3 Validator and Jigsaw. Errors were identifed and fixed where necessary. Notes were
created of the errors and added to the debugging md file.

Throughout the development process, handwritten notes were made, serving as a 'To Do List' of what
needs to be done and then ticked off when completed. These are available as photographs in notes.md

Handwritten notes forming part of development and testing:
https://github.com/wendybovill/milestone-project-one/blob/f3642747c1d664d42cfb915bf2aceeca4bc39549/documentation/notes.md
	

*Site Information*

1. Content:

Research generated custom questions and answers.


2. Design: 

*Site Specification and Website Flow:* Documentation for Website Planning. 

https://github.com/wendybovill/milestone-project-one/blob/8c72aaecf6cd3bee71325d35dcd9570e086a9f3f/documentation/Wendy%20Bovill%20509620%20-%20Project%201%20-%20Anxiety%20Support%20Website%20Documentation.pdf

*Wireframe:* Adobe XD and Balsamiq. View Adobe XD pdf Design.

Wireframe with Balsamiq:

![Balsamiq Wireframe](https://github.com/wendybovill/milestone-project-one/blob/6c465eed1a2d48ac5ae74aa18e3a99e23818860e/documentation/wireframe-wendybovill-509620.png)
	
	
	Site Mockup with Adobe XD:
	
| Desktop Mockup | Ipad Mockup | Iphone Mockup |
|----------------|-------------|---------------|
| ![Desktop Mockup Page 1](https://github.com/wendybovill/milestone-project-one/blob/404aaf37ed6db2fb644e96c986394d316dab8849/documentation/Upload_20230116-1530431024_1.jpg)      | ![Ipad Mockup Page 1](https://github.com/wendybovill/milestone-project-one/blob/404aaf37ed6db2fb644e96c986394d316dab8849/documentation/Upload_20230116-1530431024_6.jpg)   | ![Iphone Mockup Page 1](https://github.com/wendybovill/milestone-project-one/blob/404aaf37ed6db2fb644e96c986394d316dab8849/documentation/Upload_20230116-1530431024_11.jpg)     |


	*Logo:* Formito.com Free Favicon Maker

	*Colours:* pale yellow/gold and light blue/teal. 
	(Colour symbolism: Yellow: happiness, prosperity, hope. Blue: Calmness, logical, tranquility).


3. 	Documentation including readme file, spec sheet. Estimated time 1 week.

4. 	Development strategy: Develop the first page and styles, that then will be used as a template for the
	rest of the site pages. Rough Javascript Plan which is then expanded on in the development process while
  writing (and researching).


## Future Development:

1. 	Integrate additional General Knowledge quiz, and add more questions to the Wellbeing quiz.

2. 	Set method for users to remove their own individual scores instead of clearing all the scores.

3. 	Add a poll for users to take.
	

# Acknowledgements

- Javascript from Stackflow where information was read and then interpreted and applied to the requirements
  of the site and functions required for the actions necessary:
  - To plan out what functions to use and streamline them rather than bulky functions.
  - Further information on shortening functions and syntax used.
  - Information on how to write to the local storage.
  - Information on editing the api to create one for the questions and answer content.
  - Information in adding and removing classes.
  - Information in switching question and answers and indicating which ones are correct or not.

- Markdown table generator used: https://www.tablesgenerator.com/markdown_tables

- CSS various sites used to assist in getting information on using a gradient as the background, using
  using unconventional positioning and resizing, which the validator complains of, but it works rather 
  than not working without these parameters.


# Debugging & Test Results:

**TEST CASES:**

https://github.com/wendybovill/milestone-project-one/blob/8ba93d46f3bb4695df7b07fcc292d98d0c2f78b5/test_cases.md



**SCREENSHOTS using DevTools for error fixing and troubleshooting:**

https://github.com/wendybovill/milestone-project-one/blob/5f8720fa9fab58b3fe3f47c998bce31c660808d5/devtools_debugging.md



*Debugging:* 

Using devtools in chrome and safari. Corrected misaligned boxes with bootstrap. Resized font and elements for desktop
devices. Had to hide the footers from showing in very small devices, and as they took up too much space and overlapped
with the quiz.

CSS various sites used to assist in getting information on using a gradient as the background, using using unconventional positioning and resizing, which the validator complains of, but it works rather than not working without these parameters.

Document of validation and errors can be viewed by clicking on the link below:
https://github.com/wendybovill/milestone-project-one/blob/8ba93d46f3bb4695df7b07fcc292d98d0c2f78b5/test_cases.md

Handwritten notes forming part of development and testing:
https://github.com/wendybovill/milestone-project-one/blob/f3642747c1d664d42cfb915bf2aceeca4bc39549/documentation/notes.md


*Refereces used to assist debugging:*

- W3 schools html validator: http://validator.w3.org

- W3 schools jigsaw css validator: http://jigsaw.w3.org

- DevTools in Browser

- Selenium IDE

- Regular commits were made throughout the process to github as deployed at onset using gitpod

- Stackflow


## Screenshots of Index page from finished site - Desktop View

| Screenshot showing first part of Index Page Finished Site |
|-----------------------------------------------------------------------|
| ![Finished Site Page Part 1](https://github.com/wendybovill/milestone-project-one/blob/cf589814f144ad82fd843557ceed19e68b7346e7/documentation/site1.png)|
| Screenshot showing second part of Index Page Finished Site Desktop View  |
| ![Finished Site Index Page Part 2](https://github.com/wendybovill/milestone-project-one/blob/cf589814f144ad82fd843557ceed19e68b7346e7/documentation/site2.png)|
| Screenshot showing third part of Index Page Finished Site Desktop View  |
| ![Finished Site Index Page Part 3](https://github.com/wendybovill/milestone-project-one/blob/cf589814f144ad82fd843557ceed19e68b7346e7/documentation/site3.png)|
| Screenshot fourth part of Index Page Finished Site Desktop View  |
| ![Finished Site Index Page Part 4](https://github.com/wendybovill/milestone-project-one/blob/cf589814f144ad82fd843557ceed19e68b7346e7/documentation/site4.png)|


