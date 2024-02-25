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

        // Get the video tracks from the stream and stop them
        const stream = document.querySelector('#barcode-scanner').srcObject;
        const tracks = stream.getVideoTracks();
        tracks.forEach(track => track.stop());
        
        // Clear the source object of the video element to close the stream
        document.querySelector('#barcode-scanner').srcObject = null;

        // Hide the barcode scanner element
        document.querySelector('#barcode-scanner').style.display = 'none';
    });
}
