import React from 'react'

const InqueryForm = () => {
  return (
    
        <form action="" method='post'>
            <h1>Send us a inquery</h1>
            <label htmlFor="name">Full Name</label><br />
            <input type="text" name='name' required /><br />
            <label htmlFor="number">Phone Number</label><br />
            <input type="number" name='number' required /><br />
            <label htmlFor="email">Email</label> <br />
            <input type="email" name='email' required /><br />
            <label htmlFor="Inqueryfor">Inquery For</label><br />
            <select name="inqueryFor" id="inqueryFor">
                <option value="">Select</option>
                <option value="Sale">Sale Properties</option>
                <option value="Rent">Rent Properties</option>
                <option value="Buy">Buy Properties</option>
            </select><br />
            <label htmlFor="mssage">Message</label><br />
            <textarea name="messaage" id="message" cols={50} rows={5}></textarea><br />
            <input type="submit"  value="Submit" className='submit_btn' name='inquery_message'/>
        </form>
    
  )
}

export default InqueryForm