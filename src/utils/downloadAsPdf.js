import html2pdf from "html2pdf.js";

export function downloadAsPdf(elementId, filename = "resume.pdf") {
  const element = document.getElementById(elementId);
  html2pdf(element, {
    margin: 10,
    filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  });
}
