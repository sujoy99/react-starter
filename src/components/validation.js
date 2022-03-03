const validation = (values) => {

    const errors = {}

    if(!values.fullname){
        errors.fullname = "Name is required"
    }

    if(!values.email){
        errors.email = "Email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid"
    }

    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length < 3){
        errors.password = "Password must be more than three characters"
    }

    if(!values.componentTest){
        errors.componentTest = "ComponentTest is required"
    }

    return errors;
}

export default validation
