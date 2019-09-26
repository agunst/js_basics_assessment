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
    var str = [];
    let postList = document.querySelectorAll(".post");
    let ads = document.querySelector(".hide-for-small");
    var i;
    /* part 1:
        Any time someone clicks on the title at the top "feed template,"
        make the color of the "feed template" text change from black to red
        and then from red to black when clicked again.
    */
    feedTemplate.addEventListener("click", function() {
        if(feedTemplate.style.color == 'red') {
            feedTemplate.style.color = 'black';
        }
        else {
            feedTemplate.style.color = 'red';
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
    for (i = 0; i < strArray.length; i++) {
        str = strArray[i].innerHTML.split(" ");
        for(j=0; j<str.length; j++) {
            if(str[j].toLowerCase()=="bacon")
            str[j] = "LASER VISION";
        }
        strArray[i].innerHTML = str.join(" ");
    }

    /* part 4
        Delete the last two posts in the middle section (they have a CSS class "post")
    */
    postList[6].remove();
    postList[4].remove();

    /* part 5:
        Remove the images in the right column
    */
    ads.remove();
    
    /* BONUS:
        add a special surprise inside!
    */

})();