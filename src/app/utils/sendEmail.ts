import emailjs from '@emailjs/browser';


export const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs.sendForm('service_61tweel', 'template_vcpdd0h', e.currentTarget, {
      publicKey: 'yQDMSWDoWi3B54e6u'
    })
      .then(
        () => {
          console.log('Email enviado correctamente!');
        },
        (error: { text: string; }) => {
          console.log('Error...', error.text);
        },
      );
  }