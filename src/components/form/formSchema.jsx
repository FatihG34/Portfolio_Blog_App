import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    firstName: Yup.string()
    .max(25, 'You must enter a maximum of 25 characters')
    .required('First Name information must be filled'),
    lastName: Yup.string()
    .max(25, 'You must enter a maximum of 25 characters')
    .required('Last Name information must be filled'),
    email: Yup.string()
    .email('Please enter a valid e-mail address')
    .required('e-mail information must be filled')
    .matches(/([\w._%+-]+@[\w.-]+\.[a-zA-Z]{0,4})/, 'Such as : asdf@dfgv.com'),
    password: Yup.string()
    .min(8).max(16)
    .required('Password information must be filled')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
})