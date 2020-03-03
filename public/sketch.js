const screens = [];

const training_samples = {
    'Training 1 out of 5': 'a.wav',
    'Training 2 out of 5': 'b.wav',
};

const test_samples = {
    'Test 1 out of 20': 'arrival_26_43.rtp_buffer_35_step_-1.wav',
    'Test 2 out of 20': 'arrival_26_43.rtp_buffer_35_step_-2.wav',
    // 'Test 3 out of 20': 'arrival_26_49.rtp_buffer_15_step_-1.wav',
    // 'Test 4 out of 20': 'arrival_26_49.rtp_buffer_15_step_-2.wav',
    // 'Test 5 out of 20': 'arrival_26_56.rtp_buffer_15_step_-1.wav',
    // 'Test 6 out of 20': 'arrival_26_56.rtp_buffer_15_step_-2.wav',
    // 'Test 7 out of 20': 'arrival_26_56.rtp_buffer_25_step_-1.wav',
    // 'Test 8 out of 20': 'arrival_26_56.rtp_buffer_25_step_-2.wav',
    // 'Test 9 out of 20': 'arrival_26_57.rtp_buffer_45_step_-1.wav',
    // 'Test 10 out of 20': 'arrival_26_57.rtp_buffer_45_step_-2.wav',
    // 'Test 11 out of 20': 'arrival_26_58.rtp_buffer_15_step_-1.wav',
    // 'Test 12 out of 20': 'arrival_26_58.rtp_buffer_15_step_-2.wav',
    // 'Test 13 out of 20': 'arrival_26_58.rtp_buffer_45_step_-1.wav',
    // 'Test 14 out of 20': 'arrival_26_58.rtp_buffer_45_step_-2.wav',
    // 'Test 15 out of 20': 'arrival_26_60.rtp_buffer_50_step_-1.wav',
    // 'Test 16 out of 20': 'arrival_26_60.rtp_buffer_50_step_-2.wav',
    // 'Test 17 out of 20': 'arrival_26_61.rtp_buffer_25_step_-1.wav',
    // 'Test 18 out of 20': 'arrival_26_61.rtp_buffer_25_step_-2.wav',
    // 'Test 19 out of 20': 'arrival_26_63.rtp_buffer_25_step_-1.wav',
    // 'Test 20 out of 20': 'arrival_26_63.rtp_buffer_25_step_-2.wav',
};

// Welcome page - tested
// const welcome = new ScreenUIElements(
//     new UIElementHTML('hint', "<h1>Instructions</h1>"),
//     new UIElementHTML('hint', "<h3>This is a test for an audio quality study.</h3>"),
//     new UIElementHTML('hint', "The whole test takes about <b>10-15 minutes</b> to finish.<br>You will go through a <b>training session</b> before the actual test.<br>Click 'Next' to start the training session."),
// );
// screens.push(welcome);

// Training page
const trainingEntries = Object.values(training_samples);
var trainingCount = 0;
for (let entry of trainingEntries){
    trainingCount ++;
    const training = new ScreenUIElements(
        new UIElementHTML('hint', "<h1>Training Session</h1>"),
        new UIElementHTML('hint', 'Training '+ trainingCount +' out of 5'),
        new UIElementHTML('hint', "1. Click 'Play' to start the audio.<br>You may replay it if you hit 'Play' again."),
        new QuestionnaireItemMediaAudioRepeatable(undefined, '', false, `media/training/${entry}`, true, "Play"),
        new UIElementHTML('hint', "2. Answer the question below."),
        new QuestionnaireItemDefinedOne(undefined, "<h3>Rate the quality of the audio<br></h3>", true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
    );
    screens.push(training);
}

// // Prompt page
// var prompt1 = new ScreenUIElements(
//     new UIElementHTML('hint', "<h1>Training finished</h1>"),
//     new UIElementHTML('hint', "When you are ready, click 'Next' to proceed to the <b>test sessions.</b> ")
// );
// screens.push(prompt1);
//
// Test Session 1
const testEntries = Object.entries(test_samples);
var testCount = 0;
for (let [fileKey, fileName] of testEntries){
    testCount ++;
    const test = new ScreenUIElements(
        new UIElementHTML('session', "<h1>Session 1 out of 4</h1>"),
        new UIElementHTML('session', 'Test '+ testCount +' out of 20'),
        new QuestionnaireItemMediaAudioRepeatable('session', '', false, `test_media/female1/${fileName}`, true, "Play"),
        new QuestionnaireItemDefinedOne('scale', '<h3>Rate the quality of the audio:</h3>', true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
    );
    screens.push(test);
}
//
// // Rest after Test Session 1
// var rest1 = new ScreenUIElements(
//     new UIElementHTML('hint', "<h1>Session 1 finished</h1>"),
//     new UIElementHTML('hint', "When you are ready, click 'Next' to start <b>session 2</b>")
// );
// screens.push(rest1);

// // Test Session 2
// for (let [fileKey, fileName] of testEntries){
//     const test = new ScreenUIElements(
//         new UIElementHTML('session', "<h1>Session 2 out of 4</h1>"),
//         new QuestionnaireItemMediaAudioRepeatable('session', "", false, `test_media/male1/${fileName}`, true, "Play"),
//         new QuestionnaireItemDefinedOne('scale', fileKey + '<br><b>Rate the quality of the audio:</b>', true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
//     );
//     screens.push(test);
// }
//
// // Rest after Test Session 2
// var rest2 = new ScreenUIElements(
//     new UIElementHTML('hint', "<h1>Session 2 finished</h1>"),
//     new UIElementHTML('hint', "When you are ready, click 'Next' to start <b>session 3</b>")
// );
// screens.push(rest2);

// Test Session 3
// for (let [fileKey, fileName] of testEntries){
//     const test = new ScreenUIElements(
//         new UIElementHTML('session', "<h1>Session 3 out of 4</h1>"),
//         new QuestionnaireItemMediaAudioRepeatable('session', "", false, `test_media/female2/${fileName}`, true, "Play"),
//         new QuestionnaireItemDefinedOne('scale', fileKey + '<br><b>Rate the quality of the audio:</b>', true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
//     );
//     screens.push(test);
// }
//
// // Rest after Test Session 3
// var rest3 = new ScreenUIElements(
//     new UIElementHTML('hint', "<h1>Session 3 finished</h1>"),
//     new UIElementHTML('hint', "When you are ready, click 'Next' to start <b>session 4</b>")
// );
// screens.push(rest3);
//
// // Test Session 4
// for (let [fileKey, fileName] of testEntries){
//     const test = new ScreenUIElements(
//         new UIElementHTML('session', "<h1>Session 4 out of 4</h1>"),
//         new QuestionnaireItemMediaAudioRepeatable('session', "", false, `test_media/male2/${fileName}`, true, "Play"),
//         new QuestionnaireItemDefinedOne('scale', fileKey + '<br><b>Rate the quality of the audio:</b>', true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
//     );
//     screens.push(test);
// }

// Export data and end test
screens.push(new ScreenWaitDataUpload(undefined, '//localhost:8088')); //'//74.116.241.133:3389'

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