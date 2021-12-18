# HW4: ListMaker 2000

**SI669 Fall 2021**

## Video Walkthrough
Please see the [Demo Video](https://www.loom.com/share/9f57008c539444b49a6c972e2775ddc0). 

## Learning Goals
* Gain comfort working with React Navigation
* Gain comfort working with CRUD, including an application-wide Data Model that supports subscriptions
* Gain additional comfort working with React Native UI Components

## Project Goals
* Modify a ToDo List app so that it can allow the user to mark items completed

## What to Do
1. Accept the GitHub Classroom invitation.
2. Clone the repo that is created to your local machine.
3. `cd` into the directory that was created when you cloned the repo (it should be called something like `hw4-lm2k-<your-github-id>`).
4. Execute `npm install`
5. Implement any changes required to allow the user to mark items complete/incomplete
6. Ensure that these changes are reflected in the Data Model, and that updates to the UI are triggered by Data Model updates, rather than simply changes to componebnt state.
6. Push your final changes to GitHub before the deadline.
7. Create a screencast video and submit the link to Canvas before the deadline.
8. Indicate in your Canvas comments which requirements (including extra credit) you believe you met.

## Notes
* Be sure to show that checkboxes can be checked and unchecked.
* You will need to read documentation on the React Native Elements CheckBox to see how it works.
* You may need to make changes to both the HomeScreen and DataModel.
* Show that none of the other CRUD operations have been impacted by your changes.
* We will look at your code to make sure changes to checkboxes result in changes to the data model.

## Grading (up to 120 points)
| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| 1 | Creating, Updating, and Deleting items continue to work as implemented in the starter code | 20  |
| 2 | Checkboxes can be checked and unchecked | 25 |
| 3 | Checkboxes operate independently of each other | 25 |
| 4 | [Code Review] Changes to checkbox state result in changes to the Data Model| 25 |
| 5 | [Code Review] Changes to the checkbox display occur as a result of Data Model subscription updates, not just Component state changes | 25 |
|   | **Total** | **120**

## Extra Credit

Implement a Switch that allows the user to hide/unhide completed items. Please see the Extra Credit [Demo Video](https://www.loom.com/share/ced1df9c86284c6aacc879d80f6667b1). 

## Grading (up to 4 points)
| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| 1 | Switch correctly changes state (on/off) when pressed | 1 |
| 2 | Completed items are hidden when the switch is "on" and shown when it is "off" | 1 |
| 3 | When the switch is "on", newly checked items are immediately hidden | 1 |
| 4 | When the switch is "off", all items remain visible when their "checked" status is changed | 1 |
|   | **Total** | **4**
