document.getElementById("treatmentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const bmi = parseFloat(document.getElementById("bmi").value);
  const cancerType = document.getElementById("cancerType").value;
  const stage = parseInt(document.getElementById("stage").value);

  let symptoms = "";
  let hospital = "";
  let bmiNote = "";

  // Common symptoms
  const symptomMap = {
    breast: "Lump in breast, nipple discharge, skin dimpling.",
    lung: "Persistent cough, chest pain, coughing up blood.",
    colorectal: "Blood in stool, abdominal pain, weight loss.",
    prostate: "Frequent urination, pelvic pain, blood in urine.",
    leukemia: "Fatigue, frequent infections, easy bruising."
  };
  symptoms = symptomMap[cancerType];

  // BMI considerations
  if (bmi >= 30) {
    bmiNote = "High BMI may affect treatment tolerance. Nutritional and surgical consultation advised.";
  } else if (bmi < 18.5) {
    bmiNote = "Low BMI may require nutritional support before aggressive treatment.";
  } else {
    bmiNote = "BMI is within a typical range for treatment planning.";
  }

  // Hospital recommendation logic
  if (cancerType === "breast") {
    if (stage === 0) hospital = "MGM Cancer Institute – Chennai";
    else if (stage === 1) hospital = "Chennai Breast Centre – Chennai";
    else if (stage === 2) hospital = "Ganga Breast Care Centre – Coimbatore";
    else if (stage === 3) hospital = "Apollo Cancer Centre – Chennai";
    else hospital = "Guru Cancer Treatment Center – Madurai";
  } else if (cancerType === "lung") {
    if (stage === 0) hospital = "Apollo Cancer Centre – Chennai";
    else if (stage === 1) hospital = "Sabari Lung Care Clinic – Chennai";
    else if (stage === 2) hospital = "Gleneagles Cancer Institute – Chennai";
    else if (stage === 3) hospital = "VS Hospitals – Chennai";
    else hospital = "Dr G Viswanathan CBCC Cancer Center – Trichy";
  } else if (cancerType === "leukemia") {
    hospital = age <= 15 ? "Guru Cancer Treatment Center – Madurai" : "VS Hospitals – Chennai";
  } else if (cancerType === "prostate") {
    hospital = "Privaram Cancer and Research Institute – Chennai";
  } else if (cancerType === "colorectal") {
    hospital = stage <= 2 ? "Apollo Cancer Centre – Chennai" : "American Oncology Institute – Coimbatore";
  }

  document.getElementById("output").innerHTML = `
    <h3>Common Symptoms:</h3>
    <p>${symptoms}</p>
    <h3>Recommended Hospital:</h3>
    <p>${hospital}</p>
    <h3>BMI Consideration:</h3>
    <p>${bmiNote}</p>
  `;
});
