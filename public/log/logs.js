const screens = [];

var end = new ScreenUIElements(
    new UIElementHTML(undefined, "<h1>All sessions finished<br>Thank you!</h1>"),
);
screens.push(end);

const screenController = new ScreenController(screens);

function start() {
    document.body.innerHTML += "TheFragebogen loaded.";
    if (typeof(screenController) === "undefined") {
        document.body.innerHTML += "<br><i>Something went wrong:</i> Please check that thefragebogen.js was loaded and that the configuration is ok.";
        return;
    }
    screenController.init(document.body);
    screenController.start();
}
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    start();
});