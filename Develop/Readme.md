# Password Generator
https://github.com/a-hinton/password-generator

https://a-hinton.github.io/password-generator/

# Purpose
This project is designed to create a pseudo-random password that meets security requirements input by the user.

# Parameters
Given an HTML and CSS foundation, this project required the password generator to be created in javascript. Upon a user clicking the generate password button, they should be prompted to designate, in order, the desired length of their password from 8-128 characters, and whether they desire uppercase letters, numbers, and symbols to be included in the password. The password should then be output to the webpage.

# Thought process
I started coding this by defining the possible characters that might go into a password. I defined each class of character into an array that I could index into. In the future, I might try to alter this by selecting my characters by numeric code from a charset.  

To define the parameters of my password, there are multiple prompts. The input values of those prompts are fed into a generator function, which checks for which parameters are present. The generator loops through type of character included, a number of times equal to the desired length of the password. Then each character is appended to a password variable. This does create a pattern in the final password, but each necessary character type will be present. This creation process generates a password that is longer than desired. At the end of the function, the password is sliced down to the desired length and output to the function that triggered it.

In the future, I would like to randomize the order in which the characters are added to the password.

# Screencaps