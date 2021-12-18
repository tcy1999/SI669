# HW 1: Countdown timer
**SI 669 Fall 2021**

## Video Walkthrough

See the [Demo Video](https://www.loom.com/share/216823f0f78f4b5881bdf70109a9e694). 

## Learning Goal
Practice working with asynchrony in JavaScript (and, more specifically, timers) by creating a simple browser-based countdown timer.

## Project Goal
Create a webpage that features a 7 second countdown timer. The page should have one button that allows the user to start/restart the timer. Whenever the button is clicked, it should start a new countdown. If there was an active countdown, it should be cancelled. See the [Demo Video](https://www.loom.com/share/216823f0f78f4b5881bdf70109a9e694) for an example of what your page should do when it’s complete.

## What to Do
1. Accept the GitHub Classroom invitation. (You already did this!)
2. Clone this repo to your local machine.
3. `cd` into the directory that was created when you cloned the repo (it should be called `hw2-hello-<your-github-id>`).
4. Modify `hw1.html` to meet the criteria below. 
5. You only need to push one version of `hw1.html`, even if you do the extra credit. The requirements for the main assignment should still work if you do the extra credit when the timer is set to 7 seconds.
6. Push your final changes to GitHub before the deadline.
7. Create a screencast video (consider [Loom](https://www.loom.com/) if you don't already have a favorite) and submit the link to Canvas before the deadline.
8. Indicate in your Canvas comments which requirements (including extra credit) you believe you met.

## Notes:
* The timer should only start when “Restart” is clicked the first time.
* Any time “Restart” is clicked, it should start/restart the timer. You will have to figure out how to clear (or cancel) an active timer. You can find information about how to do this online.
* If the timer gets all the way down to zero, the page should display “Timer Done!”
* Note that the display changes each second. This means you will *not* be setting the timer to 7 seconds and letting it run. Consider: If the display changes every second, how often do events need to fire? How will you know when the timer is actually done?

## Grading (up to 120 points)
| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| 1 | Clicking the button makes some sort of visible change on the page | 30  |
| 2 | Clicking the button starts a timer that expires after 7 seconds and displays “Timer Done!” when it expires (may or may not change the display every second) | 30 |
| 3 | Timer counts down every second (i.e, display changes every second) | 30 |
| 4 | Timer is restarted when button is clicked and a timer is active (starts counting down from 7 seconds again) | 20 |
| 5 | Restarting while a timer is active cancels the original timer. Only one timer is active at any one time. | 10 |
| | **Total** | **120**


## Extra credit (Up to 4 points):
Add the capability for the user to set the number of seconds to any integer. Refer to the [extra credit demo video](https://www.loom.com/share/fb62ccbc4c5349859a1c9d98006a44eb) for an example.

| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| X1 | UI for setting the countdown timer value is clear | 1  |
| X2 | When the timer value is changed and the timer is restarted, the timer starts at the correct value | 1 |
| X3 | Timer restarts and expiration continue to work properly as in the main part of the assignment | 2 |
| | **Total** | **4**


