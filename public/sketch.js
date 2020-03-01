const screens = [];
//TODO generate training files

// const training_samples = {
//
// };

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

// Training page
const training = new ScreenUIElements(
    new UIElementHTML('hint', "<h1>Training</h1>"),
    new UIElementHTML('hint', "1. Click 'Play' to start audio. You may replay it if you want."),
    new QuestionnaireItemMediaAudioRepeatable(undefined, "", false, "test_media/female1_14kHz.wav", true, "Play"),
    new UIElementHTML('hint', "2. Answer the question below."),
    new QuestionnaireItemDefinedOne(undefined, "<b>Rate the quality of the audio:</b>", true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
);
screens.push(training);

//TODO generate training files
// const trainingEntries = Object.entries(training_samples);
// for (let [fileKey, fileName] of trainingEntries){
//     const training = new ScreenUIElements(
//         new UIElementHTML('hint', "<h1>Training</h1>"),
//         new UIElementHTML('hint', "1. Click on play to start audio. You may replay it if you want."),
//         new QuestionnaireItemMediaAudioRepeatable(undefined, `${fileKey} out of 5`, false, `media/training/${fileName}`, true, "Play"),
//         new UIElementHTML('hint', "2. Answer the question below."),
//         new QuestionnaireItemDefinedOne(undefined, "<h3>Rate the quality of the audio<br></h3>", true, ["Excellent", "Good", "Fair", "Poor", "Bad"])
//     );
//     screens.push(training);
// }

// Prompt page
var prompt1 = new ScreenUIElements(
    new UIElementHTML('hint', "<h1>Training finished</h1>"),
    new UIElementHTML('hint', "When you are ready, click 'Next' to proceed to <b>test sessions</b> ")
);
screens.push(prompt1);

// Test Session 1
const testEntries = Object.entries(test_samples);
for (let [fileKey, fileName] of testEntries){
    const test = new ScreenUIElements(
        new UIElementHTML('session', "<h1>Session 1 out of 4</h1>"),
        new QuestionnaireItemMediaAudioRepeatable('session', "", false, `test_media/female1/${fileName}`, true, "Play"),
        new QuestionnaireItemDefinedOne('scale', fileKey + '<br><b>Rate the quality of the audio:</b>', true, ["Bad", "Poor", "Fair", "Good", "Excellent"])
    );
    screens.push(test);
}

// Rest after Test Session 1
var rest1 = new ScreenUIElements(
    new UIElementHTML('hint', "<h1>Session 1 finished</h1>"),
    new UIElementHTML('hint', "When you are ready, click 'Next' to start <b>session 2</b>")
);
screens.push(rest1);

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
screens.push(new ScreenWaitDataUpload(undefined,'/feedback'));

var end = new ScreenUIElements(
    new UIElementHTML('hint', "<h1>All sessions finished<br>Thank you!</h1>"),
);
end.setPaginateUI(null);
screens.push(end);
//TODO take away 'next' button



//TODO take away preview
screens.push(new ScreenDataPreview("screenPreview", false));

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