import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    return formData.name && formData.email && formData.subject && formData.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(
      'service_ll9oasg',
      'template_2tcmc0i',
      templateParams,
      'nqzaUORjiwMukr4L0'
    )
    .then((response) => {
      toast.success("Tu mensaje fue enviado. Te responderemos a la brevedad!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      toast.error("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="600">
      <div className="row gy-4">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="En que podemos ayudarte?"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-12">
          <textarea
            name="message"
            className="form-control"
            rows="6"
            placeholder="Cuéntanos un poco más..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="col-md-12 text-center">
          <div className="loading">Cargando...</div>
          <div className="error-message"></div>
          <div className="sent-message">Tu mensaje fue enviado. Te responderemos a la brevedad!</div>

          <button type="submit">Enviar Mensaje</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
