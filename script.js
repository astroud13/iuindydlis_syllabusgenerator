
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function addOutcomeRow() {
  const container = document.getElementById("outcomesContainer");
  const div = document.createElement("div");
  div.innerHTML = `
    <input type="text" placeholder="Learning Outcome" class="loText"/>
    RBT: <select class="rbt"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select>
    PGPL: <select class="pgpl"><option>1</option><option>2</option><option>3</option><option>4</option></select>
    FIL: <select class="fil"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select>
    MLIS Goal: <select class="mlis">
      <option>1</option><option>2</option><option>3</option><option>4</option>
      <option>5</option><option>6</option><option>7</option>
    </select>
    <br><br>`;
  container.appendChild(div);
}

function generatePreview() {
  const output = [];

  const fields = ["coursePrefix", "instructorLast", "courseTitle", "semester", "instructors", "emails", "sectionNo", "creditHours", "deliveryMode", "prerequisites", "courseDescription", "requiredReadings", "recommendedReadings", "software"];
  output.push("COURSE INFORMATION");
  fields.forEach(id => {
    const el = document.getElementById(id);
    output.push(`${el.previousElementSibling?.textContent || id}: ${el.value}`);
  });

  output.push("\nGENERATIVE AI POLICY");
  const policy = document.getElementById("aiPolicy").value;
  if (policy === "open") {
    output.push("AI use is fully permitted in this course with citation.");
  } else if (policy === "limited") {
    output.push("AI use is permitted only for specified assignments.");
  } else {
    output.push("AI use is not permitted in this course.");
  }

  output.push("\nLEARNING OUTCOMES MAPPING");
  const rows = document.querySelectorAll("#outcomesContainer div");
  rows.forEach((row, i) => {
    const lo = row.querySelector(".loText").value;
    const rbt = row.querySelector(".rbt").value;
    const pgpl = row.querySelector(".pgpl").value;
    const fil = row.querySelector(".fil").value;
    const mlis = row.querySelector(".mlis").value;
    output.push(`LO${i + 1}: ${lo} (RBT ${rbt}, PGPL ${pgpl}, FIL ${fil}, MLIS Goal ${mlis})`);
  });

  document.getElementById("preview").innerText = output.join("\n\n");
}
