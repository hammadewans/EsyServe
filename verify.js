document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(location.search);
  const signtoken = params.get('signtoken');
  const securetoken = params.get('securetoken');

  let token, url;

  if (signtoken) {
    token = signtoken;
    url = 'http://localhost/verify/signup';
  } else if (securetoken) {
    token = securetoken;
    url = 'http://localhost/verify/security';
  } else {
    return showError('Token not found.');
  }

  const formData = new FormData();
  formData.append('token', token);

  try {
    const res = await fetch(url, { method:'POST', body: formData });
    const data = await res.json();

    if (!res.ok) {
      showError(res.status < 500 ? data : 'Something went wrong. Please try again.');
      console.error(data);
    } else {
      showSuccess(data);
    }
  } catch (err) {
    showError('External server error. Please try again later.');
    console.error(err);
  }
});
