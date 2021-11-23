import $ from "jquery";
import { exercise03Task } from "./main";

/**
 * Execute the `exercise03Task` function and provide
 * a callback function that receives an `error` parameter
 * that has a property of `message` that stores the
 * error message if there is an error.
 *
 * The function also receives a `result` parameter
 * that contains the result when the error is null
 *
 * The callback function should check if the `error`
 * is not null and append a `p` element with the text
 * content of the `error.message` parameter
 * and a class name of `exercise-03` if the error is not null
 *
 * Or a `p` element with the text content of
 * the `result` parameter and a class name of `exercise-03`
 * if the error is null
 *
 * The `p` element should be appended as the child of
 * the `.ex-container` div element
 *
 * You can use jQuery to create the element
 */
function exercise03() {
  // Complete the code of the function
  exercise03Task(function(error, result)  {

    var p = document.createElement('p');
    p.classList.add('exercise-03');
    if (error) {
      p.textContent = error.message
    } else {
      p.textContent = result;
    }
    var container = document.getElementsByClassName('ex-container')
      Array.from(container).forEach(e => {
        e.appendChild(p);
      })
  });
}



export default exercise03;
