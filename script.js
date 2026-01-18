document.getElementById("downloadZip").addEventListener("click", () => {
  // Create a simple text file in memory
  const fileContent = "Welcome Founder! This is your AI App Builder demo.";
  const blob = new Blob([fileContent], { type: "text/plain" });

  // Use JSZip if you want multiple files zipped
  // For demo, we’ll just download the text file directly
  const url = URL.createObjectURL(blob);

  // Trigger download
  const a = document.createElement("a");
  a.href = url;
  a.download = "crypto-demo.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
