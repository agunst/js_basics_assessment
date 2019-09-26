/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */

(function () {

    //your code here
    let feedTemplate = document.querySelector("h1");
    let sectionLinks = document.querySelectorAll(".title");
    let strArray = document.querySelectorAll("p");
    var str = "";
    let postList = document.querySelectorAll(".post");
    let ads = document.querySelector(".hide-for-small");
    var index;
    /* part 1:
        Any time someone clicks on the title at the top "feed template,"
        make the color of the "feed template" text change from black to red
        and then from red to black when clicked again.
    */
    feedTemplate.addEventListener("click", function() {
        if(feedTemplate.style.color == 'black') {
            feedTemplate.style.color = 'red';
        }
        else {
            feedTemplate.style.color = 'black';
        }
    });

    /* part 2:
        The links on the side of the page – "your name," "section 1," "section 2," etc. –
        hide every odd-numbered link in the menu.
    */
    for (i = 0; i < sectionLinks.length; i += 2) {
        sectionLinks[i].style.visibility = 'hidden';
    }

    /* part 3:
        Change every instance of the word "bacon" on the page to be "LASER VISION"
    */
    console.log(strArray);
    //for (i = 0; i < strArray.length; i++) {
  //  strArray[0].replace("bacon", "LASER VISION")
    //    console.log(strArray[i]);
   // }
    
   //replaceText("p", "bacon", "LASER VISION",)
    //document.body.innerHTML = document.body.replace('bacon', 'LASER VISION');
    //var curInnerHTML = document.body.innerHTML;
    //curInnerHTML = curInnerHTML.replace("bacon", "LASER VISION");
    //document.body.innerHTML = curInnerHTML;

    /* part 4
        Delete the last two posts in the middle section (they have a CSS class "post")
    */
    removeBottomUp(2);
    function removeBottomUp(numRemoved) {
        index = postList.length - 1;

        for (i=0;i<numRemoved; i++) {
            if (postList[i] && postList[i].parentElement) {
                postList[i].parentElement.removeChild(postList[i]);
            }
            index--;
        }
        return;
    }

    /* part 5
        Remove the images in the right column
    */
    ads.remove();
    


})();