// ==UserScript==
// @name        QSTT (Qlik Sense Tool Tip)
// @namespace   https://github.com/XavierWiltbank/QlikSenseToolTipUserScript/
// @description Hide the QSTT from the data load editor in qlik sense

//Set this as the url of your qlik sense site
// @include     https://qs* 
// @version     1.0
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @updateURL   https://github.com/XavierWiltbank/QlikSenseToolTipUserScript/qstt.user.js
// ==/UserScript==

// Code sourced from stack overflow answer: http://stackoverflow.com/questions/2844565/is-there-a-javascript-jquery-dom-change-listener/11546242#11546242

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function (mutations, observer) {
    // fired when a mutation occurs
    $(".qv-function-tip-container").css("top", "20px");
    $(".qv-function-tip-container").css("left", "20px");
    console.log(mutations, observer);
    // ...
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
    subtree: true,
    attributes: true
});
