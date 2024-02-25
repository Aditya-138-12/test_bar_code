// JavaScript (app.js)
function code_scan() {
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
        
        // Place the detected barcode into the <a> tag with id 'home_link'
        document.getElementById('home_link').textContent = "Barcode: " + code;

        // Stop barcode scanning after detecting one barcode
        Quagga.stop();
    });
}
