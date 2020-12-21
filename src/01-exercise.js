import $ from "jquery";
import { exercise01Task } from "./main";

/**
 * Execute the `exercise01Task` function and provide
 * a callback function that appends a `p` element
 * with the text content of `exercise-01 is done`
 * and a class name of `exercise-01`
 *
 * The `p` element should be appended as the child of
 * the `.ex-container` div element
 *
 * You can use jQuery to create the element
 */
function exercise01() {
  // Complete the code of the function
  exercise01Task(function () {
    $(".ex-container").append(
      $("<p>", {
        text: "exercise-01 is done",
        class: "exercise-01",
      })
    );
  });
}

export default exercise01;
