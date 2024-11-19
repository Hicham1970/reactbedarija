import React from 'react'

function FormValidationBeginner() {
    return (
        <div className='container-fluid w-75 mx-auto my-5'>
            <form>
                <h1>Contact Form</h1><hr />
                {/* /**------Name input------- */}
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='name'>Name</label>
                    <input type='text' className='form-control' id='name' />
                </div>
                {/* /**------Email input------- */}
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='email'>Email</label>
                    <input type='text' className='form-control' id='email' />
                </div>
                {/* /**------Message input------- */}
                <div className='form-outline mb-4'>
                    <label className='form-label' htmlFor='message'>Message</label>
                    <textarea className='form-control' id='message'></textarea>
                </div>
                {/* /**------Select country input------- */}
                <div className="form-group">
                    <label>Country</label>
                    <label htmlFor="country" className="form-label"></label>
                    <select id="country" className="form-control" >
                        <option value="fr">France</option>
                        <option value="Mr">Morocco</option>
                        <option value="al">Algeria</option>
                        <option value="tu">Tunisia</option>:
                    </select>
                </div>
                {/* /**------Checkbox------- */}
                <div className="form-check my-2">
                    <input
                        type="checkbox"
                        id="accept"
                        className="form-check-input"

                    />
                    <label htmlFor="accept" className="form-check-label">
                        Accept our rules
                    </label>
                </div>
                <div className="form-group  my-4">
                    <button type="submit" className="btn btn-primary w-75 mx-auto" >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormValidationBeginner