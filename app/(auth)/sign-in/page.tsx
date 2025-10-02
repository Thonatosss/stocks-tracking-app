'use client'
import InputField from "@/components/forms/InputField";
import {useForm} from "react-hook-form";
import FooterLink from "@/components/forms/FooterLink";
import {signInWithEmail, signUpWithEmail} from "@/lib/actions/auth.actions";
import {toast} from "sonner";
import {useRouter} from "next/navigation";


const SignIn = () => {
    const router = useRouter();
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
            const result = await signInWithEmail(data);
            if (result.success) router.push("/");
        } catch (e) {
            console.log(e);
            toast.error('Sign in failed', {
                description: e instanceof Error ? e.message : 'Failed to sign in'
            })
        }
    }
    return <section className="h-full flex justify-center items-center flex-col">
        <h1 className="form-title text-left">Log In Your Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-3/4">
            <InputField name="email"
                        type="email"
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
