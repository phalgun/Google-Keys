
function setupKeyBindings() {

	// using string concatenation and a loop oddly doesn't seem to work.	

	Mousetrap.bind('mod+shift+1', function () {openNewBackgroundTab(1)});
	Mousetrap.bind('alt+shift+1', function () {openNewBackgroundTab(1, false)});

	Mousetrap.bind('mod+shift+2', function () {openNewBackgroundTab(2)});
	Mousetrap.bind('alt+shift+2', function () {openNewBackgroundTab(2, false)});

	Mousetrap.bind('mod+shift+3', function () {openNewBackgroundTab(3)});
	Mousetrap.bind('alt+shift+3', function () {openNewBackgroundTab(3, false)});

	Mousetrap.bind('mod+shift+4', function () {openNewBackgroundTab(4)});
	Mousetrap.bind('alt+shift+4', function () {openNewBackgroundTab(4, false)});

	Mousetrap.bind('mod+shift+5', function () {openNewBackgroundTab(5)});
	Mousetrap.bind('alt+shift+5', function () {openNewBackgroundTab(5, false)});

	Mousetrap.bind('mod+shift+6', function () {openNewBackgroundTab(6)});
	Mousetrap.bind('alt+shift+6', function () {openNewBackgroundTab(6, false)});

	Mousetrap.bind('mod+shift+7', function () {openNewBackgroundTab(7)});
	Mousetrap.bind('alt+shift+7', function () {openNewBackgroundTab(7, false)});

	Mousetrap.bind('mod+shift+8', function () {openNewBackgroundTab(8)});
	Mousetrap.bind('alt+shift+8', function () {openNewBackgroundTab(8, false)});

	Mousetrap.bind('mod+shift+9', function () {openNewBackgroundTab(9)});
	Mousetrap.bind('alt+shift+9', function () {openNewBackgroundTab(9, false)});

}


function openNewBackgroundTab(linkNumber, background) {

	background = typeof background !== 'undefined' ? background : true;
	var a = document.createElement("a");
    a.href = getNthLink(linkNumber);
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                background, false, false, false, 0, null);
    a.dispatchEvent(evt);
}

// TODO : Use better XPATH to find the needed link directly instead of looping
function getNthLink(linkNumber) {
	var allSearchResults = '//h3[@class="r"]/a/@href';
	xpathResult = document.evaluate( allSearchResults,  document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );


	var searchLink = xpathResult.iterateNext();
	for (var x = 1; x < linkNumber; x++) {
		searchLink = xpathResult.iterateNext();
	}

	return searchLink.value;
}

setupKeyBindings();
