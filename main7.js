/**
 * Created by оо on 21.11.13.
 */

(function(){

    console.log("mama ss".match(/[as]/)); //a
    console.log("mama ss".match(/[as]/g)); // ["a", "a", "s", "s"]


    console.log("mamla121".match(/[as]\d/g)); //a1
    console.log("aaaa".match(/[as]+/g)); // aaaa
    console.log("aaaa".match(/[as]\d/g)); // null
    console.log("mamla121".match(/[as]\d+/g)); //a121

})()