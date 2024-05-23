function letScope() {
    let x = 1;
    if(x===1){
        let x = 2;
        console.log("inside x = " + x);
    };
    console.log("outside x = " + x);
};
// inside x in the if block updates to 2
// outside x in the letScope block stays 1
// Scope: let is block-scoped, meaning it is only accessible within the block (e.g., inside {}) it is declared in.

function varScope(){
    var x = 1;
    if(x===1){
        var x = 2;
        console.log("inside x = " + x);
    };
    console.log("outside x = " + x);
}

// inside x in if block updates to 2
// outside x also updates to 2 because var is not block scoped
// let is block scoped, var is function scoped (or global scoped)
// change var to let in the if block

// var
// Scope: var is function-scoped, meaning it is accessible within the function it is declared in. If declared outside any function, it becomes globally scoped.
// Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined.
// Re-declaration: var allows re-declaration of the same variable within the same scope.

function parentFunction()
{
 let a = 1;
 function childFunction()
 {
 var b = a + 2;
 console.log("Inner child function: "+b);
 }
 console.log("Invoking the childFuntion in the outer scope: " + childFunction()) ;
 // What happens if I invoke the parentFunction() here.
}

/*
The childFunction() is defined within the scope of the parentFunction(), so it is not directly accessible outside of the parentFunction().
*/