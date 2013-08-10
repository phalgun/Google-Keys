// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var first_search_result = '//h3[@class="r"]/a/@href';
xpathResult = document.evaluate( first_search_result,  document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );

// alert(xpathResult.resultType + "|" );
var searchLink = xpathResult.iterateNext();
while(searchLink) {
	// alert(searchLink.value);
	// searchLink = xpathResult.iterateNext();
	// window.open(searchLink.value, "_blank");
	openNewBackgroundTab(searchLink.value);
	break;
}

function openNewBackgroundTab(link){
    var a = document.createElement("a");
    a.href = link;
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, false, 0, null);
    a.dispatchEvent(evt);
}

// chrome.extension.sendRequest(payload, function(response) {});
