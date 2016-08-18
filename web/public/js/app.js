/**
 * Populate HTML page content inside HTML element
 * @param {string} selector
 * @param {string} page
 * @returns {undefined}
 */
function loadPage(selector, page){
    $(selector).load(page);
}