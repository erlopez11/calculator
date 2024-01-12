# calculator
A calculator created using HTML, CSS, and JavaScript.(TheOdin Project)

<img width="1412" alt="Calculator Sample" src="https://github.com/erlopez11/calculator/assets/101296798/bc6fca36-8ed9-47f8-9bab-451829966cc7">


# Description
This is a functional calculator for basic mathematical functions designed to visually resemble a vintage calculator. It was created usign HTML, CSS, and JavaScript.

# Design
I designed this calculator to resemble a vintage calculator with mechanical keys and containing more rounded edges to soften the look and feel of the object. This calculator is designed to perform basic math function like addition, subtraction, division, and multiplication. It also has the capability of decimal numbers alongside whote numbers. In order for it to function the user has to click on the buttons of thier choice; currently a keyboard cannot be used to make selections.

<img width="928" alt="Calculator Figma" src="https://github.com/erlopez11/calculator/assets/101296798/612dcf22-957d-4958-ad75-fa6e9162a2b1">


# Challenges
One of the challenging parts of creating the calculator was coding the step where the second number input is saved so that it can then be used with the first number input to perform to ginven operation. For example, if the user wanted to perfom the operation 1 + 2, their first input saved would be 1, but when they tried to input 2 the number would display on the screen, but it would not save itself as the second input which was needed inorder to perform the operation. Instead the number 1 would only be saved. No matter what arrangements or additional functions I tried to add, that second input number was not saving so couldn't perform the desired operation. I was stuck in this stage for several weeks trying to find a solution to fix this bug, my hope was to fix it without having to completly rewrite all of my code  to resemble to example codes I was looking at to find a solution. After a while, I decided to move on to the next stage and attempt to add the event handler to the equals sign in order to get that to at least work even if the operation function wasn't ready. When the equals sign was operational, my function that saved the second number finally started working. The reason it wasn't working was becasue I wasn't adding the action that would initiate the function; I was forcing it to work with the event handler of the funtion that saved my first number and the operand. While that second number showed up on the display, it wasn't saving becasue that function had not been called yet; the only way to call it was by pressing the equal sign.

# Further Implementaion
Now that the calculator functions well and has the ability to perform operatoins one after the other, I would like to add keyboard functionality so that the user can also use their keyboard to make selection. Also, on a seperate page or tab section I would like to create a tip calculator so that the site can become a collection of useful calculators.

# Demo
[Calculator](https://erlopez11.github.io/calculator/)
