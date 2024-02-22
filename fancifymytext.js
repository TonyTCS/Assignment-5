

function enlargeText() {
    // Access the textarea element by its id
    var textarea = document.getElementById("textInput");
    

    textarea.style.fontSize = "24pt";
}

// Function to uppercase the text in the textarea and add a suffix to the last word of each sentence
function uppercaseText() {

    // Access the textarea element by its id
    var textarea = document.getElementById("textInput");
    
    // Split the textarea value into sentences based on the period character
    var sentences = textarea.value.split(".");
    
    // Loop through each sentence
    for (var i = 0; i < sentences.length; i++) {
        // Trim any leading or trailing whitespace
        var sentence = sentences[i].trim();
        
        if (sentence === "") continue;
        
        // Split the sentence into words
        var words = sentence.split(" ");
        
        // Uppercase the words
        for (var j = 0; j < words.length; j++) {
            words[j] = words[j].toUpperCase();
        }
        
        // Add the suffix "-Moo" to the last word of the sentence
        words[words.length - 1] += "-Moo";
        
        // Join the words back together with spaces
        sentences[i] = words.join(" ");
    }
    
    // Join the sentences back together with periods and update the textarea value
    textarea.value = sentences.join(". ");
}


function applyFancyStyles() {
    var textarea = document.getElementById("textInput");
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
}

// Function to remove styles for "BoringBetty"
function removeFancyStyles() {
    var textarea = document.getElementById("textInput");
    textarea.style.fontWeight = "";
    textarea.style.color = "";
    textarea.style.textDecoration = "";
}

// Function to handle onchange event of radio buttons
function handleRadioChange() {
    var fancyRadio = document.getElementById("fancy");
    var boringRadio = document.getElementById("boring");

    if (fancyRadio.checked) {
        
        applyFancyStyles();
    } else if (boringRadio.checked) {

        removeFancyStyles();
    }
}