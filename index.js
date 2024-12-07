// Your code here

const dodger = document.getElementById("dodger");
/*
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

dodger.style.left = "0px";


//document.addEventListener("keydown", function (event) {
  //  console.log(event);
  //});

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  });

  */


  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  /*With the code implemented from the code-along, think about what needs to change to make a moveDodgerRight() function. 
  You'll need to add another condition to your event listener's callback function to call moveDodgerRight(). 
  Then, inside the function, instead of moving the dodger ${left - 1}px, you'll be moving it ${left + 1}px.

Note: It may seem logical that you would use the dodger's style.right property to move the dodger right, but that won't work. 
The reason is that changing the style.right property doesn't change the style.left property, which means we'd have conflicting information
 about where the dodger should be on the screen. JavaScript solves this problem by giving precedence to style.left.
  In other words, once the user presses the left arrow key for the first time and the value of style.left is changed, any 
  subsequent changes to style.right will be ignored.*/
  


  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left+1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  /*
  Well, when our event listener detects a keydown event,
  we first check to see whether the key property of the event object has the value "ArrowLeft." 
  If it does, we get the current value of the dodger's style.left property and use the String replace() methodLinks to an external site. 
  to strip out the "px", then store the result in leftNumbers. Next, we parse leftNumbers as an integer and store that result in left. 
  Finally, we update the dodger's style.left property using string interpolation, injecting the current value minus 1. 
  If the key that's pressed is not the left arrow key, we do zilch. Try it out in the browser yourself!! (Be sure to refresh the page first.)

We do still have a problem, though. Even though we're only going one pixel at a time, 
eventually our dodger will zoom (well, relatively speaking) right out of view.
*/