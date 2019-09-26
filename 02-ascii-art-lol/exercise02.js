/**
 * The code below adds an image to the page, sorta.
 * That image doesn't look right on the page.
 *
 * Look at the code in scramble.js and use your knowledge
 * of arrays to rebuild the array before writeAscii() 
 * is called.
 */

(function() {

    //your code here
    var i;
    var newArray =[];

    for(i=1; i<=artArray.length; i++) {
        if(!(i%3)) {
            newArray.push(artArray[i-1]);
        }
    }
    artArray = newArray;

    writeAscii(artArray);

})();


