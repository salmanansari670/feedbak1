const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new URLSearchParams();

  data.append("name", document.getElementById("name").value);
  data.append("roll", document.getElementById("roll").value);
  data.append("year", document.getElementById("year").value);
  data.append("subject", document.getElementById("subject").value);

  data.append("q1", document.querySelector('input[name="q1"]:checked')?.value || "");
  data.append("q2", document.querySelector('input[name="q2"]:checked')?.value || "");
  data.append("q3", document.querySelector('input[name="q3"]:checked')?.value || "");
  data.append("q4", document.querySelector('input[name="q4"]:checked')?.value || "");
  data.append("q5", document.querySelector('input[name="q5"]:checked')?.value || "");
  data.append("q6", document.querySelector('input[name="q6"]:checked')?.value || "");
  data.append("q7", document.querySelector('input[name="q7"]:checked')?.value || "");
  data.append("q8", document.querySelector('input[name="q8"]:checked')?.value || "");
  data.append("q9", document.querySelector('input[name="q9"]:checked')?.value || "");
  data.append("q10", document.querySelector('input[name="q10"]:checked')?.value || "");

  data.append("q11", document.getElementById("q11").value);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxikk62MglGPIbBcn97L9lDn1TxSXAj7DwBc3fczvAvwGSoj-BOV5rMbDO9HRmaYQsBMQ/exec", {
      method: "POST",
      body: data
    });

    const result = await response.text();
    console.log(result);

    alert("Submitted Successfully ✅");
    form.reset();

  } catch (error) {
    console.error(error);
    alert("Error ❌");
  }
});