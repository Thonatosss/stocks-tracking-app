'use client'
import InputField from "@/components/forms/InputField";
import {useForm} from "react-hook-form";
import FooterLink from "@/components/forms/FooterLink";


const SignIn = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onBlur',
    })
    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }
    return <section className="h-full flex justify-center items-center flex-col">
        <h1 className="form-title text-left">Log In Your Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-3/4">
            <InputField name="email"
                        label="Email"
                        placeholder="mmromashenko@gmail.com"
                        register={register}
                        error={errors.email}
                        validation={{
                            required: 'Email is required',
                            pattern: /^\w+@\w+\.\w+$/,
                            message: "Email address is required"
                        }}
            />
            <InputField name="password"
                        label="Password"
                        placeholder="Enter a strong password"
                        type="password"
                        register={register}
                        error={errors.password}
                        validation={{required: 'Password is required', minLength: 8}}
            />
            <button disabled={isSubmitting} className="yellow-btn w-full mt-5">
                {isSubmitting ? 'Logging in' : 'Log In'}
            </button>
            <FooterLink text="Don't have an accout?" linkText="Sign Up" href="/sign-up"/>
        </form>
    </section>
}
export default SignIn
