var tma = window.Telegram.WebApp;

(function () {
    insertText("ver", "1");

    setFullscreen();
    tma.setHeaderColor("#ffffff");
    tma.disableVerticalSwipes();

    // setScreenDisplaySafeArea();

    insertImg("imgUser", tma.initDataUnsafe.user.photo_url)
    insertText("username", tma.initDataUnsafe.user.first_name + " " + tma.initDataUnsafe.user.last_name)

    tma.checkHomeScreenStatus(showAddToHomeScreenBtn);
})();


function insertText(elementId, content) {
    document.getElementById(elementId).innerText = content;
}

function insertImg(elementId, src) {
    document.getElementById(elementId).src = src;
}

function setFullscreen() {
    var PLATFORM_ANDROID = "android";
    var PLATFORM_IOS = "ios";

    if (tma.platform) {
        const platform = tma.platform;
        if ([PLATFORM_ANDROID, PLATFORM_IOS].includes(platform)) {
            tma.requestFullscreen();
        }
    }
}

function showAddToHomeScreenBtn(currentHSStatus) {
    var HOMESCREENSTATUS_UNKNOWN = "unknown";
    var HOMESCREENSTATUS_MISSED = "missed";

    if ([HOMESCREENSTATUS_UNKNOWN, HOMESCREENSTATUS_MISSED].includes(currentHSStatus)) {
        document.getElementById("btn-addToHomeScreen").removeAttribute("hidden")
    }
}

// function initScreenDisplaySafeArea() {
//     tma.onEvent("contentSafeAreaChanged", setScreenDisplaySafeArea);
// }

// function setScreenDisplaySafeArea() {
//     // Set safeAreaInsets as CSS custom properties on the root element
//     document.documentElement.style.setProperty('--tg-safe-area-inset-top', `${tma.safeAreaInset.top}px`);
//     document.documentElement.style.setProperty('--tg-safe-area-inset-right', `${tma.safeAreaInset.right}px`);
//     document.documentElement.style.setProperty('--tg-safe-area-inset-bottom', `${tma.safeAreaInset.bottom}px`);
//     document.documentElement.style.setProperty('--tg-safe-area-inset-left', `${tma.safeAreaInset.left}px`);
//     // Set contentSafeAreaInsets as CSS custom properties on the root element
//     document.documentElement.style.setProperty('--tg-content-safe-area-inset-top', `${tma.contentSafeAreaInset.top}px`);
//     document.documentElement.style.setProperty('--tg-content-safe-area-inset-right', `${tma.contentSafeAreaInset.right}px`);
//     document.documentElement.style.setProperty('--tg-content-safe-area-inset-bottom', `${tma.contentSafeAreaInset.bottom}px`);
//     document.documentElement.style.setProperty('--tg-content-safe-area-inset-left', `${tma.contentSafeAreaInset.left}px`);
// }

function divconsole(text) {
    insertText("console", text)
}