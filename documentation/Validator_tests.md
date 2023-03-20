

====================Html Validator======================

Html Validator found 1 html error, since correctd. The Warning note was in reference to element to be populated by Javascript.

Nu Html Checker
This tool is an ongoing experiment in better HTML checking, and its behavior remains subject to change

Showing results for https://wendybovill.github.io/quiz-project/quiz.html
Checker Input
Show sourceoutlineimage report

Check by
address
https://wendybovill.github.io/quiz-project/quiz.html

Use the Message Filtering button below to hide/show particular messages, and to see total counts of errors and warnings.
Message Filtering
Warning: Empty heading.

From line 62, column 17; to line 62, column 34

          <h2 id="question"></h2>↩

Error: Stray end tag div.

From line 91, column 5; to line 91, column 10

oter>↩    </div>↩↩    

Document checking completed.

Used the HTML parser. Externally specified character encoding was utf-8.

Total execution time 85 milliseconds.

About this checker • Report an issue • Version: 23.3.5





====================CSS Jigsaw Validator======================

There are a number of parsing errors which has since been corrected. 
My syntax was being broken up by additinal spaces added by an extension.
I"ve also fixed the tranform: scale(0) parsing error. It is not however 
accepting the calc function where height is 100%-100px, and it also does
not like the gradient background, and although its raised in validation 
service, it was generated using an online generator, and is valid code,
which does work cross browser. So this is going to be ignored in the 
testing process.


Jump to: Errors (29) Validated CSS
W3C CSS Validator results for https://wendybovill.github.io/quiz-project/ (CSS level 3 + SVG)
Sorry! We found the following errors (29)
URI : https://wendybovill.github.io/quiz-project/assets/css/styles.css
9	html	Missing a semicolon before the property name progid
9	html	Property progid doesn't exist : DXImageTransform
9	html	Parse Error DXImageTransform.Microsoft.gradient(startColorstr="#fdbb2d", endColorstr="#fdbb2d", GradientType=1);
10		Parse Error background-repeat: no-repeat;
11		Parse Error background-size: cover;
12		Parse Error background-position: center center;
13		Parse Error }
196	div.container	Value Error : height Parse Error -100px)
402	div.container	Value Error : height Parse Error -100px)
414	footer	Parse Error (0)
586	div.container	Value Error : height Parse Error -100px)
598	footer	Parse Error (0)
716	footer	Parse Error (0)


Third Part Vendor warnings were issued to Bootstrap. I did not include these.
