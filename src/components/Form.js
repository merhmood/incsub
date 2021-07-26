import React, {useState, useEffect} from 'react'

const Form = ({onEvent, propData}) => {

    const {autoFocusHandler, formHandler, blurHandler, submitHandler, eyeHandler} = onEvent
    const { data, autoFocus} = propData

    const {name, emailAddress, describe, password} = data.formData
    const {one, two, three} = data.style
    const {pColor, pTextColor, eColor, value} = data.formDataPassword.error
    const {eye, inputType} = data.formDataPassword.passwordVisibility
    const {error} = data

    const [submitButton, setSubmitButton] = useState(false)

    useEffect(()=>{    
        if (name.length > 0 && emailAddress.length > 0 && describe.length > 0 && password.length > 0 && error === false && pColor !== 'red' && eColor !== 'red') {
            setSubmitButton(true)
        }
        else{
             setSubmitButton(false)
        }
    }, [name.length, describe.length, emailAddress.length, password.length, error, pColor, eColor])
    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name='name' value={name} 
                    ref={autoFocus.one}  
                    onFocus={()=>autoFocusHandler(1)} onChange={formHandler} 
                    onBlur={()=>blurHandler(1)}/>
                    
                    <label style={{top: one.top, fontSize: one.fontSize, transition: one.transition}} 
                    onClick={()=>autoFocusHandler(1)}>
                        Your name</label>
                </div>
                <div>
                    <input type="text"  name='emailAddress' value={emailAddress} 
                    ref={autoFocus.two} style={error ? 
                    {outlineColor: 'red', borderColor: 'red'} : 
                    {outlineColor: 'black', borderColor: eColor}} 
                    onFocus={()=>autoFocusHandler(2)} 
                    onChange={formHandler} 
                    onBlur={()=>blurHandler(2)}/>

                    <label 
                    style={error ? 
                        {top: two.top, fontSize: two.fontSize, transition: two.transition, color:'red'} : 
                        {top: two.top, fontSize: two.fontSize, transition: two.transition}} 
                    onClick={()=>autoFocusHandler(2)}>
                        Email address</label>
                    {error && <p className='email-error'>Please enter a valid email address</p>}
                </div>
                <div>
                <select name="describe" onChange={formHandler}>
                    <option value="null" >I would describe my user type as</option>
                    <option value="Developer" >Developer</option>
                    <option value="Gamer">Gamer</option>
                </select>
                </div>
                <div>
                    <input type={inputType} name='password' value={password} 
                    style={pColor === 'red' ? 
                    {outlineColor: 'red', borderColor: 'red'} : 
                    {outlineColor: 'black', borderColor: pColor}} 
                    ref={autoFocus.three} 
                    onFocus={()=>autoFocusHandler(3)} 
                    onChange={formHandler} 
                    onBlur={()=>blurHandler(3)}/>

                    {value && <img src={!eye ? 'https://image.flaticon.com/icons/png/512/565/565654.png' : eye} alt="" onClick={eyeHandler}/>}
                    <label style={ pColor === 'red' ? {top: three.top, fontSize: three.fontSize, transition: three.transition, color:'red'} :{top: three.top, fontSize: three.fontSize, transition: three.transition, color:'black'}} 
                    onClick={()=>autoFocusHandler(3)}>
                        Password</label>
                    <p style={{color: pTextColor}} className='error' >Minimum 8 characters</p>
                </div>
                <button className={submitButton === true ? 'button': 'button-disabled'} disabled={submitButton}>Next</button>
            </form>
        </>
    )
}

export default Form
