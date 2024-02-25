// JavaScript (app.js)
function code_scan() {
console.log("s");
//document.getElementById("main_body_2").style.background = "blur(20px)";
    // Initialize QuaggaJS with configuration for Code 39
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#barcode-scanner'),
            constraints: {
                facingMode: "environment"
            },
        },
        decoder: {
            readers: ["code_39_reader"]
        }
    }, function(err) {
        if (err) {
            console.error("Failed to initialize Quagga:", err);
            return;
        }
        console.log("Quagga initialized successfully");

        // Start barcode scanning
        Quagga.start();
    });

    // Listen for barcode detection events
    Quagga.onDetected(function(result) {
        const code = result.codeResult.code;
        console.log("Barcode detected:", code);
        // Display the detected barcode on the webpage
        console.log(code);
    });
}

