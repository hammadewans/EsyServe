  // Show validation error
  function showError(message) {
    const errorBox = document.getElementById('error-box');
    errorBox.classList.remove('alert-info', 'alert-success');
    errorBox.classList.add('alert-danger');
    errorBox.innerHTML = `<strong>Error:</strong> ${message}`;
  }

  // Show success message
  function showSuccess(message) {
    const errorBox = document.getElementById('error-box');
    errorBox.classList.remove('alert-info', 'alert-danger');
    errorBox.classList.add('alert-success');
    errorBox.innerHTML = `<strong>Success:</strong> ${message}`;
  }