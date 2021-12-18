# HW3: Spooky Text
**SI669 Fall 2021**

## Video Walkthrough
See the [Demo Video](https://www.loom.com/share/ab569fb0124a44eaa2aee2c5a64645db).

## Learning Goals
* Gain comfort reading and writing component state
* Gain comfort using conditional rendering
* Gain comfort handling user input

## Project Goals
* Modify an app so that it can display user input, transformed according to options selected by the user.

## What to Do
1. Accept the GitHub Classroom invitation.
2. Clone the repo that is created to your local machine.
3. `cd` into the directory that was created when you cloned the repo (it should be called `hw3-spookytext-<your-github-id>`).
4. execute `npm install`
5. Implement `handleChangeText()`, `handleReverseText()`, and `handleReverseColors()`, along with any other changes you deem necessary.
6. Push your final changes to GitHub before the deadline.
7. Create a screencast video and submit the link to Canvas before the deadline.
8. Indicate in your Canvas comments which requirements (including extra credit) you believe you met.

## Notes
* Be sure to show that the switches can operate independently. 
* Also show that existing text is reversed when the "Reverse Text" is switched "On" and that new text is reversed when the  switch is already on.
* A `reverseText()` function is provided. This will come in handy.

## Grading (up to 120 points)
| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| 1 | Switches change state (on/off) when pressed | 20  |
| 2 | Switches operate independently of each other | 20 |
| 3 | "Enter something:" TextInput displays user input | 20 |
| 4 | "Result:" Text updates when TextInput changes | 20 |
| 5 | "Result:" Text is reversed when 'Reverse Text' switch is 'On' | 20 |
| 6 | "Result:" Colors are inverted when 'Reverse Colors' switch is 'On' | 20 |
|   | **Total** | **120**

## Extra Credit

Implement a password validator that operates like [the one in this video.](https://www.loom.com/share/b6da30da4c2c4a18a05926ba759a09c6).

## Grading (up to 4 points)
| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| 1 | Correctly displays whether "Enter Password:" text field consists only of letters or numbers | 1.5 |
| 2 | Correctly displays whether "Enter Password:" text field has at least one number and at least one upper case letter | 1.5 |
| 3 | Correctly displays whether "Enter Password:" and "Re-enter Password:" text fields match | 1  |
|   | **Total** | **4**
