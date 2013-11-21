/**
 * Created by оо on 21.11.13.
 */

(function(){

    console.log("asd".match(/./)); //true
    console.log("".match(/./)); // null
    console.log("asd".match(/.+/)); // array
    console.log("".match(/.+/));// null
    console.log("asd".match(/.*/));//array
    console.log("".match(/.*/));


    console.log("asd".match(/.?/));
    console.log("".match(/.?/));


})()