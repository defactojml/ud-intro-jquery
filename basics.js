/**
 * Created by jean-michel-legrand on 01/08/15.
 */
/*
 For this quiz, use a jQuery tag selector to grab all of the <li>s on the page!
 */
var listElementsByTag;

listElementsByTag = $("li");
console.log("listElementsByTag .... " + JSON.stringify(listElementsByTag));

//For this quiz, use a jQuery class selector to grab all of the elements of class 'article-item' on the page!
var listElementsByClass = $(".article-item");
console.log("listElementsByClass .... " + JSON.stringify(listElementsByClass));


/*
 For this quiz, use a jQuery class selector to grab all the element with id 'nav' on the page!
 */
var nav = $("#nav");


/*
 For this quiz, use articleList and DOM navigation methods to collect articleList's
 sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

 You must use articleList to navigate to the element(s)!
 */

// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = articleList.siblings('h1');

kids = articleList.children('*');

parents = articleList.parents('div');

console.log("h1 " + JSON.stringify(h1));
console.log("kids " + JSON.stringify(kids));
console.log("parents " + JSON.stringify(parents));