import emailjs from '@emailjs/browser';


export const sendEmail = (e: React.FormEvent<HTMLFormElement> dataEmail:{service:string, message: string}) => {
    e.preventDefault()
    emailjs.sendForm('service_61tweel', 'template_vcpdd0h', e.currentTarget, {
      publicKey: 'yQDMSWDoWi3B54e6u'
    })
      .then(
        () => {
          console.log('Email enviado correctamente!');
        },
        (error: { text: any; }) => {
          console.log('Error...', error.text);
        },
      );
  }