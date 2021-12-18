# HW 2: Hello Hello Hello!

Follow these steps to get your project ready to work on:

1. clone this repo to your development machine
3. cd into the new directory (e.g., `$ cd si-669-hw2-hello-hello-hello-numerator`)
3. run `npm install` in the project directory (this will install all of the packages listed in package.json)
4. run `expo start` to make sure everything is set up correctly
5. start working on your project


You will start with an app that looks like this:<br/>
<img src="https://github.com/SI669-internal/hw2-hello-starter/blob/main/assets/hw2-hello-before.png?raw=true" width=300/>
<br/>

Which you will transform to look like this (solution reference image): <br/>
<img src="https://github.com/SI669-internal/hw2-hello-starter/blob/main/assets/hw2-hello-after.png?raw=true" width=300/>
<br/>

There are a number of ways to do this, but here are some constraints you must follow:
1. Only use React Native's `View` and `Text` Commponents.
2. You may add or modify whatever `View` and/or `Text` Components you like, as well as their styles.
3. The dimensions of your components (e.g., `width`, `height`, `margin`, etc.) should be relative (i.e., use `width:'90%'` instead of `width: 480`)
4. The example solutions (see below) were all produced using named StyleSheet colors (e.g., 'green', 'purple'), but you may use other colors--even changing the color scheme entirely!--as long as you use the same number of colors (or more, if you so desire). Make sure that whatever you do is legible and easy to grade from just looking at your screenshot/screencast.
5. You should get the dimensions and layouts of all components as close as you can to those shown in the example. They don't have to match exactly but they should be pretty close.

### Grading (up to 120 points)
| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| 1 | Topmost section looks very similar to topmost section in reference image | 25  |
| 2 | Middle section looks very similar to middle section in reference image | 25 |
| 3 | Bottommost section looks very similar to bottommost section in reference image | 25 |
| 4 | Code makes good use of nested `View` and `Text` components, as well as StyleSheet properties, including `flex`, `flexDirection`, `justifyContent`, `alignItems`, `height`, `width`, and `margin` (or its variants like `marginTop`, `marginVertical`, etc.) | 25 |
| 5 | Code makes appropriate use of relative, rather than absolute, sizes (e.g., XX%) | 20 |
| | **Total** | **120**


## Extra credit (Up to 4 points):
Modify the topmost panel so that it displays a different "Hello World!" phrase every second. Please check out the [demo video](https://www.loom.com/share/5163cc3b19f14bc2a4356e1d1c27a3de) to see how this should work.

### Grading
| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| X1 | Topmost panel displays a different "Hello World!" phrase every second. | 4  |
| | **Total** | **4**

### Submitting your work
If you are only doing the main part of the assignment, you just need to submit a screen shot image (e.g., png or jpeg) to Canvas (via the HW2 assignment). If you are doing the Extra Credit, you only need to submit a link to an online screencast video showing your app in action.

In both cases, be sure to commit and push your changes to the repo that was created for you before the deadline for full credit.
