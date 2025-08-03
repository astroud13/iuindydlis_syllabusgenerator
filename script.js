function addOutcome() {
  const wrapper = document.getElementById('outcomesWrapper');
  const div = document.createElement('div');
  div.innerHTML = `
    <label>Outcome Description <input type="text" name="outcomeDesc[]" required /></label>
    <label>MLIS Program Goal <input type="text" name="mlisGoal[]" required /></label>
    <label>Bloom’s Taxonomy Level <input type="text" name="blooms[]" required /></label>
    <label>PGPL <input type="text" name="pgpl[]" required /></label>
    <label>Framework for Info Literacy <input type="text" name="fil[]" required /></label>
    <label>Mapped Assignment <input type="text" name="assignmentMap[]" required /></label>
  `;
  wrapper.appendChild(div);
}

function exportDocx() {
  alert("DOCX export functionality is under development.");
}

function exportPDF() {
  alert("PDF export functionality is under development.");
}
