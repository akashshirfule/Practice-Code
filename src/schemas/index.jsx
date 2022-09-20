import * as Yup from 'yup';

export const SignupSchema=Yup.object({
    name:Yup.string().min(2).max(8).required("Enter your name"),
    email:Yup.string().email().required("Enter your email"),
    password:Yup.string().min(6).required("Enter Your password"),
    cpassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must be match")
})