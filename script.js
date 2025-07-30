
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function generatePreview() {
  const fields = [
    "coursePrefix", "instructorLast", "courseTitle", "semester",
    "instructors", "emails", "sectionNo", "creditHours", "deliveryMode",
    "prerequisites", "courseDescription", "requiredReadings",
    "recommendedReadings", "software", "aiPolicy"
  ];
  let output = "";
  fields.forEach(id => {
    const el = document.getElementById(id);
    const label = el.previousSibling.textContent || id;
    output += label + "\n" + el.value + "\n\n";
  });

  const aiPolicy = document.getElementById("aiPolicy").value;
  if (aiPolicy === "open") {
    output += "**AI POLICY**: Use permitted with citation.\n";
  } else if (aiPolicy === "limited") {
    output += "**AI POLICY**: Use permitted only for specified assignments.\n";
  } else {
    output += "**AI POLICY**: Use of AI is not permitted.\n";
  }

  document.getElementById("preview").innerText = output;
}
