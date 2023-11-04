document.getElementById("submitBtn").addEventListener("click", function() {
    var inputText = document.getElementById("inputText").value;

    // ส่งคำขอ POST ไปยัง API
    fetch("http://localhost:5000/api/textemote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
    })
    .then(response => response.json())
    .then(data => {
        // แสดงเฉพาะค่าที่คุณต้องการ
        var resultElement = document.getElementById("result");
        var outputElement = document.getElementById("output");
        outputElement.textContent = "Emotion: " + data.Emotion;
        resultElement.style.display = "block";
    })
    .catch(error => {
        console.error("เกิดข้อผิดพลาดในการส่งคำขอ:", error);
    });
});
