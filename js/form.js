const contactForm = document.getElementById('contact-test');
const apiURL = 'https://karen-hernandez-ginecologa.herokuapp.com';
const statusMessage = {
  ok: 'Datos enviados.',
  error: 'Ocurrió un error.',
};

const postFormFetch = (endpoint) => {
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((resp) => {
      const { status } = resp;
      if (status === 'ok') {
        contactForm.reset();
        alert(statusMessage.ok);
      } else {
        alert(statusMessage.error);
      }
    });
};

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formValues = {
    name: event.target[0].value,
    email: event.target[1].value,
    phone: event.target[2].value,
    comments: event.target[3].value,
  };

  const { name, email, phone, comments } = formValues;
  const endpoint = `${apiURL}/contactos?name=${name}&email=${email}&phone=${phone}&comments=${comments}`;

  postFormFetch(endpoint);
});
