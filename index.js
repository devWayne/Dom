/**
 * @return {void} description
 */
var Dom = {
	parse:parse

}

function parse(html, context) {
    if (typeof html !== 'string') return;
    context = context || document;
    var m = /<([\w:]+)/.exec(html);
    if (!m) return context.createTextNode(html);

    // Remove leading/trailing whitespace
    html = html.replace(/^\s+|\s+$/g, '');

    var el = context.createElement('div');
    el.innerHTML = html;

    // one element
    if (el.firstChild == el.lastChild) {
        return el.removeChild(el.firstChild);
    }

    // several elements
    var fragment = doc.createDocumentFragment();
    while (el.firstChild) {
        fragment.appendChild(el.removeChild(el.firstChild));
    }

    return fragment;
}


module.exports = {Dom:Dom};
