import React, { useState, useEffect } from 'react';

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
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values));
        setIsSubmitting(true);
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                const queryString = Object.keys(values).map(key => key + '=' + values[key]).join('&');
                submitForm();
                fetch('https://formspree.io/xqkybken', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: 'manual',
                    body: queryString
                }, [errors])
            }
        });



    const validateInfo = (values) => {
        let errors = {}

        if (!values.fullname.trim()) {
            errors.fullname = "Fullname required"
        }

        if (!values.emailAddress) {
            errors.emailAddress = 'email address required';
        } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
            errors.emailAddress = 'email address is invalid';
        }

        if (!values.comments) {
            errors.comments = 'Message is required';
        } else if (values.comments.length < 6) {
            errors.comments = 'Message needs to be 6 characters or more';
        }
        return errors;
    }
    return (
        <div className="contact" id="contactMe">
            <h2 className="contact__title">Contacta conmigo</h2>
            <form className="form">
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
                    <button className="button-send" value="Send" type="submit" >
                        Enviar
                </button>
                </div>

            </form>

        </div>
    );
};

export default ContactMe;