
function sendMessage(event) {
  event.preventDefault();
  alert("Thank you, your message has been sent successfully!");
  event.target.reset();
  return false;
}
