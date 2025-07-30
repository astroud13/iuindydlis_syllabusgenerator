
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function addOutcomeRow() {
  const container = document.getElementById("outcomesContainer");
  const row = document.createElement("div");
  row.innerHTML = `
    <input type="text" placeholder="Learning Outcome" class="loText"/>
    RBT: <select class="rbt"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select>
    PGPL: <select class="pgpl"><option>1</option><option>2</option><option>3</option><option>4</option></select>
    FIL: <select class="fil"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select>
    MLIS Goal: <select class="mlis">
      <option>Connect Core Values and Professional Ethics to Practice</option>
      <option>Facilitate Engagement in the Information Ecosystem</option>
      <option>Curate Collections for Designated Communities</option>
      <option>Lead and Manage Libraries, Archives and Other Information Organizations</option>
      <option>Organize and Represent Information</option>
      <option>Conduct Systematic Research to Inform Decisions</option>
      <option>Innovate Professional Practice with Information Services and Technology</option>
      <option>Examine Systemic Inequalities to Improve Library and Information Practices through Equitable and Socially Just Interventions</option>
    </select>
    <br><br>`;
  container.appendChild(row);
}

function generatePreview() {
  let preview = "COURSE INFORMATION\n";
  const fields = [
    "coursePrefix", "instructorFirst", "instructorLast", "courseTitle", "semester",
    "emails", "sectionNo", "creditHours", "deliveryMode", "prerequisites",
    "courseDescription", "requiredReadings", "recommendedReadings", "software"
  ];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.value.trim()) {
      preview += `${el.placeholder || id}: ${el.value}\n`;
    }
  });

  preview += "\nAI POLICY\n";
  const aiPolicy = document.getElementById("aiPolicy").value;
  if (aiPolicy === "sample1") {
    preview += "AI use is fully permitted in this course with citation.\n";
  } else if (aiPolicy === "sample2") {
    preview += "AI use is permitted only for specific assignments.\n";
  } else {
    preview += "AI use is not permitted in this course.\n";
  }

  preview += "\nLEARNING OUTCOMES\n";
  const rows = document.querySelectorAll("#outcomesContainer > div");
  rows.forEach((row, i) => {
    const lo = row.querySelector(".loText")?.value || "";
    const rbt = row.querySelector(".rbt")?.value || "";
    const pgpl = row.querySelector(".pgpl")?.value || "";
    const fil = row.querySelector(".fil")?.value || "";
    const mlis = row.querySelector(".mlis")?.value || "";
    preview += `LO${i + 1}: ${lo} (RBT ${rbt}, PGPL ${pgpl}, FIL ${fil}, MLIS Goal: ${mlis})\n`;
  });

  preview += "\nRESOURCES, GUIDELINES, AND POLICIES\n";
  preview += "All information available at: https://iu.instructure.com/courses/2280766\n";
  preview += "• Software Resources: https://iu.instructure.com/courses/2280766/pages/software-resources-mlis\n";
  preview += "• Late Work, Attendance, Incompletes: https://iu.instructure.com/courses/2280766/pages/late-work-attendance-incomplete-work-mlis\n";
  preview += "• Required Citation Styles: https://iu.instructure.com/courses/2280766/pages/required-citation-styles-mlis\n";
  preview += "• Grading Scale: https://iu.instructure.com/courses/2280766/pages/grading-scale-mlis\n";
  preview += "• Program Outcomes: https://iu.instructure.com/courses/2280766/pages/program-outcomes-mlis\n";
  preview += "• ALA Core Competences: https://iu.instructure.com/courses/2280766/pages/ala-core-competences-mlis\n";
  preview += "• Code of Conduct, Accessibility, Health and Wellness: https://iu.instructure.com/courses/2280766/pages/code-of-conduct-mlis\n";

  document.getElementById("preview").innerText = preview;
}
