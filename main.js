let add = document.querySelector("#add");

// on click event create a function
add.addEventListener("click",AddSomething);

function AddSomething() {

   // alert("Hello world!");

   //get a selectors
   let todo_input = document.querySelector("#todo-input").value;
   let main = document.querySelector("#main");
   
   // if everything is okay,execute an else statemant
   if (!todo_input) {
       alert("Please sir,fill the input!");
   }else if(todo_input.length <= 2){
        alert("The length of the string must be greater than 2!");
   }else{
        //create an element which we used to show our ToDo list items
        let new_element = document.createElement("p");
        let deleteToDo = document.createElement("i");
        let finishedToDo = document.createElement("i");

        // add a class on elements
        deleteToDo.classList = "trash fa-solid fa-trash-can";
        finishedToDo.classList = "check fa-solid fa-circle-check";
        new_element.classList = "new_element";

        // show ToDo task
        new_element.innerHTML = todo_input;

        //append on page our icons for deleting and removing
        new_element.appendChild(finishedToDo);
 
        new_element.appendChild(deleteToDo);
        
        //append an element on the page
        main.appendChild(new_element);

        // remove an element from page on click 
        deleteToDo.addEventListener("click",DeleteBtn);
 
        function DeleteBtn() {
 
         // alert("Removed!"); */

         new_element.remove();
 
        }

        // on click,fisnish a task
        finishedToDo.addEventListener("click",TaskEnded);

        function TaskEnded() {

          //alert("Task ended!");

          new_element.style.textDecoration = "line-through";

        }

        // on double click,we will remove a text decoration,and our ToDo item is on the course
        new_element.addEventListener("dblclick",TaskOnCourse);


        function TaskOnCourse() {
          
         // alert("Hello again!");

         new_element.style.textDecoration = "none";

        }


   }
   
}




