window.googletag = window.googletag || {cmd: []};
var topSlot, bottomSlot, bottom_Slot_3, cardSlot, stickySlot, outOfPage;
googletag.cmd.push(function() {
width = document.documentElement.clientWidth;
if (width >= 1150) {
topSlot = googletag.defineSlot('/1060150/Leaderboard_App_Info', ['fluid', [980, 250],[980, 90],[970, 250],[970, 90],[970, 66],[800, 250],[728, 90]], 'header_ad').addService(googletag.pubads());
bottom_Slot_3 = googletag.defineSlot('/1060150/Leaderboard_bottom_App_Info', [[980, 250],[980, 90],[970, 250],[970, 90],[970, 66],[800, 250],[728, 90],[468, 60],[336, 280],[300, 250]], 'content_ad_bottom').addService(googletag.pubads());
outOfPage = googletag.defineSlot('/1060150/OUTOFPAGE1X1', [1, 1], 'div-gpt-ad-1655738316078-0').addService(googletag.pubads());
bottomSlot = googletag.defineSlot('/1060150/MPU_content_App_Info', ['fluid',[336, 280],[300, 600],[300, 250],[250, 250],[200, 200][160, 600],[120, 600]], 'content_ad').addService(googletag.pubads());
bottom_Slot_2 = googletag.defineSlot('/1060150/MPU_content_2_App_Info', [[980, 250],[980, 90],[970, 250],[970, 90],[970, 66],[800, 250],[728, 90],[468, 60],[336, 280],[300, 250]], 'content_ad_2').addService(googletag.pubads());
googletag.pubads().setTargeting("type", ["gc"]);
} else {
topSlot = googletag.defineSlot('/1060150/Leaderboard_App_Info', ['fluid',[336, 280],[320, 100],[320, 50],[300, 250],[300, 100],[300, 50],[250, 250],[200, 200]], 'header_ad').addService(googletag.pubads());
bottom_Slot_3 = googletag.defineSlot('/1060150/Leaderboard_bottom_App_Info', [[336, 280],[320, 100],[320, 50],[300, 250],[300, 100],[300, 50],[250, 250],[200, 200]], 'content_ad_bottom').addService(googletag.pubads());
bottomSlot = googletag.defineSlot('/1060150/MPU_content_App_Info', ['fluid',[336, 280],[320, 100],[320, 50],[300, 250],[300, 100],[300, 50],[250, 250],[200, 200]], 'content_ad').addService(googletag.pubads());
bottom_Slot_2 = googletag.defineSlot('/1060150/MPU_content_2_App_Info', [[336, 280],[320, 100],[320, 50],[300, 250],[300, 100],[300, 50],[250, 250],[200, 200]], 'content_ad_2').addService(googletag.pubads());
googletag.pubads().setTargeting("type", ["gc"]);
}
googletag.pubads().disableInitialLoad();
googletag.pubads().collapseEmptyDivs();
googletag.enableServices();
googletag.pubads().addEventListener('slotRenderEnded', function(event) {
adlazy.scroll_listener();
});
});
