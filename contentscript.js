// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


Mousetrap.bind('ctrl+shift+1', function () {openNewBackgroundTab(1)}, 'keyup');

function openNewBackgroundTab(linkNumber){

	var allSearchResults = '//h3[@class="r"]/a/@href';
	xpathResult = document.evaluate( allSearchResults,  document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );

	// alert(xpathResult.resultType + "|" );

	var searchLink = xpathResult.iterateNext();
	for (var x = 1; x <= linkNumber; x++) {
		searchLink = xpathResult.iterateNext();
	}
	
	var a = document.createElement("a");
    a.href = searchLink.value;
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, false, 0, null);
    a.dispatchEvent(evt);
}

// chrome.extension.sendRequest(payload, function(response) {});
