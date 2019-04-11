  /* How to write Functions in several different ways */

/*way #1*/

    function square(number) {

      return number * number;

    }



    console.log(square(4));


/*way #2 */

    var someVar = "Hat";

    function myFun() {

      var someVar = "Shoes";

      console.log(someVar);

    }



    myFun();

    console.log(someVar);



    console.log(addSquares(1, 3));



    function addSquares(a, b) {

      function square(x) {

        return x * x;

      }

      return square(a) + square(b);

    }



    a = addSquares(2, 3); // returns 13

    b = addSquares(3, 4); // returns 25

    c = addSquares(4, 5); // returns 41

   /*

		A Function Declaration defines a named function. To create a function 

        declaration you use the function keyword followed by the name of the function. 

        When using function declarations, the function definition is hoisted, thus 

        allowing the function to be used before it is defined.

	*/

    

    function name(parameters){

      statements

    }

    
    