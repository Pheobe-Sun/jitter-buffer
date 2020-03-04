const screens = [];

// training samples
const training_samples = [
    'test_1.wav',  'test_2.wav',
    'test_3.wav',  'test_4.wav',
    'test_5.wav',  'test_6.wav',
    'test_7.wav',  'test_8.wav',
    'test_9.wav',  'test_10.wav',
    'test_11.wav', 'test_12.wav',
];

const test_samples = [
    'test_1.wav',  'test_2.wav',
    'test_3.wav',  'test_4.wav',
    'test_5.wav',  'test_6.wav',
    'test_7.wav',  'test_8.wav',
    'test_9.wav',  'test_10.wav',
    'test_11.wav', 'test_12.wav',
    'test_13.wav', 'test_14.wav',
    'test_15.wav', 'test_16.wav',
    'test_17.wav', 'test_18.wav',
    'test_19.wav', 'test_20.wav'
];

// Welcome page - tested
const welcome = new ScreenUIElements(
    new UIElementHTML('hint', "<h1>Instructions</h1>"),
    new UIElementHTML('hint', "<h3>This is a test for an audio quality study.</h3>"),
    new UIElementHTML('hint', "The whole test takes about <b>10-15 minutes</b> to finish.<br>You will go through a <b>training session</b> before the actual test.<br>Click 'Next' to start the training session."),
);
screens.push(welcome);

// Training page
var trainingCount = 0;
for (let i = 0; i < training_samples.length ; i++){
    trainingCount ++;
    const training = new ScreenUIElements(
        new UIElementHTML('hint', "<h1>Training Session</h1>"),
        new UIElementHTML('hint', 'Training '+ trainingCount +' out of '+ training_samples.length),
        new UIElementHTML('hint', "1. Click 'Play' to start the audio.<br>You may replay it if you hit 'Play' again."),
        new QuestionnaireItemMediaAudioRepeatable(undefined, '', false, `/media/training/` + training_samples[i], true, "Play"),
        new UIElementHTML('hint', "2. Answer the question below. You cannot change your answer after you click 'Next'."),
        new QuestionnaireItemDefinedOne(undefined, "<h3>Rate the quality of the audio<br></h3>", true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
    );
    screens.push(training);
}

// Prompt page
var prompt1 = new ScreenUIElements(
    new UIElementHTML('hint', "<h1>Training finished</h1>"),
    new UIElementHTML('hint', "When you are ready, click 'Next' to proceed to the <b>test sessions.</b> ")
);
screens.push(prompt1);
///////////////////////////////////////////////////////
// Test Session 1 (old)
// const testEntries = Object.entries(test_samples);
// var testCount = 0;
// for (let [fileKey, fileName] of testEntries){
//     testCount ++;
//     const test = new ScreenUIElements(
//         new UIElementHTML('session', "<h1>Session 1 out of 4</h1>"),
//         new UIElementHTML('session', 'Test '+ testCount +' out of 20'),
//         new QuestionnaireItemMediaAudioRepeatable('session', '', false, `test_media/female1/${fileName}`, true, "Play"),
//         new QuestionnaireItemDefinedOne('scale', '<h3>Rate the quality of the audio:</h3>', true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
//     );
//     screens.push(test);
// }
//////////////////////////////////////////////////////////
// Test Session 1 (new)
var testcountShown = 0;
for (let i = 0; i < test_samples.length; i++) {
    testcountShown ++;
    const test = new ScreenUIElements(
        new UIElementHTML('session', "<h1>Session 1 out of 4</h1>"),
        new UIElementHTML('session', 'Test '+ testcountShown +' out of '+test_samples.length),
        new QuestionnaireItemMediaAudioRepeatable('session', '', false, `media/test-1/`+test_samples[i], true, "Play"),
        new QuestionnaireItemDefinedOne('scale', '<h3>Rate the quality of the audio:</h3>', true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
    );
    screens.push(test);
}
//
// Rest after Test Session 1
var rest1 = new ScreenUIElements(
    new UIElementHTML('hint', "<h1>Session 1 finished</h1>"),
    new UIElementHTML('hint', "When you are ready, click 'Next' to start <b>session 2</b>")
);
screens.push(rest1);

// Test Session 2
for (let i = 0; i < test_samples.length; i++) {
    testcountShown = i + 1 ;
    const test = new ScreenUIElements(
        new UIElementHTML('session', "<h1>Session 2 out of 4</h1>"),
        new UIElementHTML('session', 'Test '+ testcountShown +' out of '+test_samples.length),
        new QuestionnaireItemMediaAudioRepeatable('session', '', false, `media/test-2/`+test_samples[i], true, "Play"),
        new QuestionnaireItemDefinedOne('scale', '<h3>Rate the quality of the audio:</h3>', true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
    );
    screens.push(test);
}
//
// Rest after Test Session 2
var rest2 = new ScreenUIElements(
    new UIElementHTML('hint', "<h1>Session 2 finished</h1>"),
    new UIElementHTML('hint', "When you are ready, click 'Next' to start <b>session 3</b>")
);
screens.push(rest2);

// Test Session 3
for (let i = 0; i < test_samples.length; i++) {
    testcountShown = i + 1 ;
    const test = new ScreenUIElements(
        new UIElementHTML('session', "<h1>Session 3 out of 4</h1>"),
        new UIElementHTML('session', 'Test '+ testcountShown +' out of '+test_samples.length),
        new QuestionnaireItemMediaAudioRepeatable('session', '', false, `media/test-3/`+test_samples[i], true, "Play"),
        new QuestionnaireItemDefinedOne('scale', '<h3>Rate the quality of the audio:</h3>', true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
    );
    screens.push(test);
}
//
// Rest after Test Session 3
var rest3 = new ScreenUIElements(
    new UIElementHTML('hint', "<h1>Session 3 finished</h1>"),
    new UIElementHTML('hint', "When you are ready, click 'Next' to start <b>session 4</b>")
);
screens.push(rest3);
//
// // Test Session 4
for (let i = 0; i < test_samples.length; i++) {
    testcountShown = i + 1 ;
    const test = new ScreenUIElements(
        new UIElementHTML('session', "<h1>Session 4 out of 4</h1>"),
        new UIElementHTML('session', 'Test '+ testcountShown +' out of '+test_samples.length),
        new QuestionnaireItemMediaAudioRepeatable('session', '', false, `media/test-4/`+test_samples[i], true, "Play"),
        new QuestionnaireItemDefinedOne('scale', '<h3>Rate the quality of the audio:</h3>', true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
    );
    screens.push(test);
}

// Export data and end test
screens.push(new ScreenWaitDataUpload(undefined, '//74.116.241.133:3389')); ////localhost:8088

var end = new ScreenUIElements(
    new UIElementHTML('hint', "<h1>All sessions finished<br>Thank you!</h1>"),
);
end.setPaginateUI(null);
screens.push(end);

// screens.push(new ScreenDataPreview("screenPreview", false));

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