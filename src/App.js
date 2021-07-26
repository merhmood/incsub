import React,{useRef, useReducer} from 'react'

import Form from './components/Form'
import { appReducer } from './appReducer'

import './App.css'

const App = () => {

  let autoFocus = {
    one: useRef(), 
    two: useRef(), 
    three: useRef()
  }

  const [data, dispatch] = useReducer(appReducer, {
    style: {
      one:{ top: '',fontSize: ''}, 
      two:{top: '', fontSize: ''}, 
      three:{ top: '', fontSize: ''}
    }, 

    formData: { 
      name:'',
      emailAddress: '', 
      describe: '', 
      password: ''
  },
  formDataPassword:
  {
    error:{eColor:'#cccccc', pColor: '#cccccc', pTextColor: 'black', value: false},
    passwordVisibility:{ eye: '', visibility: false, inputType: 'password'}
  },
  error: false
})
const{visibility} = data.formDataPassword.passwordVisibility
const{pTextColor} =  data.formDataPassword.error
const eyeHandler = ()=>{
  dispatch({type: "EYE", visibility: visibility})
}



  const autoFocusHandler = (value)=>{
    dispatch({type:"AUTO-FOCUS", value, autoFocus, formData: data.formData , error: pTextColor})
  }
  const formHandler = (e)=>{
    const {name, value} = e.target
    dispatch({type:"FORM", name: name, value: value})
  }
  const blurHandler = (value)=>{
   dispatch({type:"BLUR", value ,formData: data.formData})
  }
  const submitHandler = (e)=>{
    e.preventDefault()
  }
  return (
    <div className='row'>
      <div className='col-1'>
        <div className='pagination'>
            <div><p>Step 1 of 3 </p><div className='bullet'></div><div className='bullet_fade'></div><div className='bullet_fade'></div></div>
          </div>
        <div className='container'>
          <div className='form'>
            <h1>Let's setup your account</h1>
            <p>Already have an account? &nbsp;<span>Sign in</span></p>

            <Form onEvent={{autoFocusHandler, formHandler, blurHandler, submitHandler, eyeHandler}} propData={{ data, autoFocus}}/>

            <p></p>
          </div>
        </div>
      </div>
      <div className='col-2'>
        <div className='container'>
          <h1>DUMMY HEADING</h1>
          <p>Culpa esse voluptate tempor consectetur nisi est anim adipisicing et. Culpa in eiusmod aute Lorem consequat et irure. Tempor eiusmod magna occaecat commodo deserunt laborum sunt commodo eu exercitation consectetur. Consequat ullamco ea proident esse. Nostrud voluptate laborum magna sit laboris elit pariatur consequat excepteur ad. Dolor ex excepteur excepteur excepteur pariatur. Sint incididunt amet quis amet consectetur consequat voluptate ea.</p>
        </div>
      </div>
    </div>
  )
}

export default App
