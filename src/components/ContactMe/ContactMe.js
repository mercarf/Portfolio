import React, { useState, useEffect } from 'react';
import Links from '../Links/Links'

const ContactMe = () => {
    const [values, setValues] = useState({
        fullname: "",
        emailAddress: "",
        comments: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    function submitForm() {
        setIsSubmitted(true);
    }

    const handleChange = e => {
        const { name, value } = e.target
        // console.log(e.target.value)
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault()
        setIsSubmitting(true);
        setErrors(validateInfo(values));
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                const queryString = Object.keys(values).map(key => key + '=' + values[key]).join('&');
                console.log(queryString)
                submitForm();
                fetch('https://formspree.io/f/xleaeykg', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
                    redirect: 'manual',
                    body: queryString
                }, [errors])
            }
        });



    const validateInfo = (values) => {
        let errors = {}

        if (!values.fullname.trim()) {
            errors.fullname = "Es necesario rellenar el nombre completo"
        }

        if (!values.emailAddress) {
            errors.emailAddress = 'Es necesario rellenar la dirección de email';
        } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
            errors.emailAddress = 'La dirección de email no es correcta';
        }

        if (!values.comments) {
            errors.comments = 'Es necesario escribir un mensaje';
        } else if (values.comments.length < 6) {
            errors.comments = 'Es necesario que el mensaje tenga 6 caracteres o más';
        }
        return errors;
    }




    return (
        <div className="contactMe" id="contactMe">
            <h2 className="contactMe__title">Contacta conmigo</h2>
            <p className="contactMe__text"><strong>¿Hablamos? 📞 </strong>Siempre estoy abierta a aprender; ahora mismo estoy buscando mi
            primera oportunidad como <strong>desarrolladora Front End.</strong><br /><br /> Si crees que mi perfil profesional
            encaja con lo que buscas o quieres darme feedback sobre mis proyectos,
            <strong> ¡no dudes en contactarme!</strong> 📩</p>
            <div className="contactMe__info">
                <p className="contactMe__info__text">Puedes contactar conmigo al correo:</p>
                <div className="contactMe__info__email">
                    <a
                        href="mailto:mcarballalfr@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="contactMe__info__email__link"
                    >
                        {' '}
                        mcarballalfr@gmail.com
                    </a>
                </div>
                <p className="contactMe__info__text">A través de estos enlaces:</p>
                <div className="contactMe__info__links">
                    <a className="contactMe__info__links__social" rel="noopener noreferrer" href="https://github.com/mercarf" target="_blank"><i class="fab fa-github-alt"></i></a>
                    <a className="contactMe__info__links__social" rel="noopener noreferrer" href="https://twitter.com/mercarfr" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a className="contactMe__info__links__social" rel="noopener noreferrer" href="https://www.linkedin.com/in/mercedescarballal/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <p className="contactMe__info__text">O si lo prefieres, rellenando este formulario:</p>
            </div>
            {
                isSubmitted ? (<article className="thanks"><h3 className="thanks__title">¡Gracias por aplicar! 😍</h3> <p className="thanks__sentence">Me pondré en contacto contigo lo antes posible. 📲</p> </article>) : (
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-item">
                            <label htmlFor="fullname"
                            >Nombre completo <span>*</span>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={values.fullname}
                                    onChange={handleChange}
                                    placeholder="Nombre y apellidos"
                                />
                            </label>
                            {errors.fullname && <p className="error-message">{errors.fullname}</p>}
                        </div>

                        <div className="line-item form-item">
                            <label htmlFor="emailAddress"
                            >Email de contacto <span>*</span>
                                <input
                                    type="email"
                                    name="emailAddress"
                                    value={values.emailAddress}
                                    onChange={handleChange}
                                    placeholder="nombre.apellido@mail.com"
                                />
                            </label>
                            {errors.emailAddress && <p className="error-message">{errors.emailAddress}</p>}
                        </div>

                        <div className="form-item">
                            <label htmlFor="comments"
                            >Mensaje: <span>*</span>
                                <textarea
                                    name="comments"
                                    value={values.comments}
                                    onChange={handleChange}
                                    rows="8"
                                    cols="35"
                                    placeholder="Mensaje..."
                                ></textarea>
                            </label>
                            {errors.comments && <p className="error-message">{errors.comments}</p>}
                        </div>
                        <div className="form-item">
                            <button className="button-send" value="Send" type="submit">
                                Enviar
                </button>
                        </div>

                    </form>)
            }

        </div >
    );
};

export default ContactMe;