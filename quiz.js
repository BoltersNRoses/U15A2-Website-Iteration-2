document.getElementById('courseForm').onsubmit = function(event) {
  event.preventDefault();
  let score = 0;
  if (document.querySelector('input[name="q1"]:checked')?.value === "b) score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "b) score++;
  if (document.querySelector('input[name="q3"]:checked')?.value === "b) score++;
  document.getElementById('result').textContent = "You scored " + score + "/3!";
};
