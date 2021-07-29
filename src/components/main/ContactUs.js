const ContactUs = () => {
    return (
        <section className='contactus'>
            <form className="contactus--form">
                <div className='contactus__column'>
                    <h2 className='contactus__title'>
                        QUESTION? WE ARE HERE TO HELP!
                    </h2>
                </div>
                <div className='contactus__column'>
                    <div className='contactus__row'>
                        <div className='contactus__input-field'>
                            <input type='text' id='name' name='name' aria-labelledby='nameLabel' />
                            <label htmlFor='name' id='nameLabel'>
                                name
                            </label>
                        </div>
                        <div className='contactus__input-field'>
                            <input type='email' id='email' name='email' aria-labelledby='emailLabel' aria-required='true' required />
                            <label htmlFor='email' id='emailLabel'>
                                email
                            </label>
                            <small className='contactus__required-message' role='alert'>
                                This field is required
                            </small>
                        </div>
                    </div>
                    <div className='contactus__input-field'>
                        <textarea id='message' name='message' aria-labelledby='messageLabel' rows='4' maxLength='200' />
                        <label htmlFor='message' id='messageLabel'>
                            message
                        </label>
                    </div>
                    <div className='contactus__submit'>
                        <button className="btn btn--contactus">Send</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ContactUs;
