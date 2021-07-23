export const appReducer = (state, action) => {
    if(action.type === "FORM"){
        if (action.name ==="emailAddress") {
            if(action.value.length > 0){
                if (action.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                    return({...state, formData:{...state.formData, [action.name]: action.value}, error: false})
                    }
                else{
                    return({...state, formData:{...state.formData, [action.name]: action.value}, error: true})
                    }
                }
                else if(action.value.length === 0){
                    return({...state, formData:{...state.formData, [action.name]: action.value}, error: false})
                }
        }
        if(action.name === 'password'){
            if(action.value.length === 0){
                return({
                    ...state, 
                    formData:{...state.formData, [action.name]: action.value} , 
                    formDataPassword:{...state.formDataPassword, 
                    error: {...state.error, color:'red', value: false}

                }
                })
            }
            else if (action.value.length > 0 && action.value.length < 8) {
                return({
                    ...state, 
                    formData:{...state.formData, [action.name]: action.value} , 
                    formDataPassword:{...state.formDataPassword, 
                    error: {...state.error, color:'red', value: true}
                }
                })
            }
            else if (action.value.length >= 8){
                return({
                    ...state, 
                    formData:{...state.formData, [action.name]: action.value} , 
                    formDataPassword:{...state.formDataPassword, 
                    error: {...state.error, color:'green', value: true}
                }
                })
            }
        }
        return({...state, formData:{...state.formData, [action.name]: action.value}})
    }
    if (action.type === "AUTO-FOCUS") {
        if (action.value === 1) {
            action.autoFocus.one.current.focus()
            return ({...state, style:{...state.style, one:{top: '-0.6em', fontSize: '0.6rem', transition: 'top 0.2s, fontsize 0.2s'}}})

        }
        else if (action.value === 2) {
             action.autoFocus.two.current.focus()
            return ({...state, style:{...state.style, two:{top: '-0.6em', fontSize: '0.6rem', transition: 'top 0.2s, fontsize 0.2s'}}})
        }
        else if (action.value === 3) {
             action.autoFocus.three.current.focus()
            return ({...state, style:{...state.style, three:{top: '-0.6em', fontSize: '0.6rem', transition: 'top 0.2s, fontsize 0.2s'}}})
        }
        else{
            return ({...state})
        } 
        
    }
    if (action.type === "BLUR") {
        if (action.value === 1 && action.formData.name.length === 0) {
            return ({...state, style:{...state.style, one:{top: '1.2em', fontSize: '0.8rem', transition: 'top 0.2s, fontsize 0.2s'}}})
        }
        else if (action.value === 2 && action.formData.emailAddress.length === 0) {
            return ({...state, style:{...state.style, two:{top: '1.2em', fontSize: '0.8rem', transition: 'top 0.2s, fontsize 0.2s'}}})
        }
        else if (action.value === 3 && action.formData.password.length === 0) {
            return ({...state, style:{...state.style, three:{top: '1.2em', fontSize: '0.8rem', transition: 'top 0.2s, fontsize 0.2s'}}})
        }
        else{
            return ({...state})
        }  
    }
    if (action.type === "EYE") {
        if (action.visibility === false) {
            return({
                    ...state, 
                    formData:{...state.formData, [action.name]: action.value} , 
                    formDataPassword:{...state.formDataPassword, 
                    passwordVisibility:{ eye: 'https://image.flaticon.com/icons/png/512/565/565655.png', visibility: true, inputType: 'text'}
                }
            })
        }
        else if (action.visibility === true) {
            return({
                    ...state, 
                    formData:{...state.formData, [action.name]: action.value} , 
                    formDataPassword:{...state.formDataPassword, 
                    passwordVisibility:{ eye: 'https://image.flaticon.com/icons/png/512/565/565654.png', visibility: false, inputType: 'password'}
                }
            })
        }

    }
}