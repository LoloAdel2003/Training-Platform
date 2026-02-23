"use client";

import AuthInput from '@/components/auth/AuthInput';
import AuthLayout from '@/components/auth/AuthLayout';
import Link from 'next/link';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, signupSchema } from '../../../schemas/auth/siginupSchema';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router=useRouter()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = (data: SignupSchema) => {
    console.log("Form Data:", data);
    // هنا ممكن ترسل البيانات للـ backend
    router.push('/signin')
  };

  return (
    <AuthLayout 
      title="Sign Up" 
      subtitle="Let’s get you all set up so you can access your personal account."
      imageSrc="/imges/auth/Signup.png"
    >
      <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
        
        {/* الصف الأول: الاسم الأول والاسم الأخير */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AuthInput 
            label="First Name" 
            type="text" 
            placeholder="Enter Your First Name" 
            register={register("firstName")}
            error={errors.firstName?.message}
          />
          <AuthInput 
            label="Last Name" 
            type="text" 
            placeholder="Enter Your Last Name" 
            register={register("lastName")}
            error={errors.lastName?.message}
          />
        </div>

        {/* الصف الثاني: الإيميل ورقم الهاتف */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AuthInput 
            label="Email" 
            type="email" 
            placeholder="Enter Your Email" 
            register={register("email")}
            error={errors.email?.message}
          />
          <AuthInput 
            label="Phone Number" 
            type="text" 
            placeholder="Enter Your Phone Number" 
            register={register("phone")}
            error={errors.phone?.message}
          />
        </div>

        {/* الصف الثالث: كلمة المرور وتأكيدها */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AuthInput 
            label="Password" 
            type="password" 
            placeholder="................" 
            icon={<AiOutlineEyeInvisible />} 
            register={register("password")}
            error={errors.password?.message}
          />
          <AuthInput 
            label="Confirm Password" 
            type="password" 
            placeholder="................" 
            icon={<AiOutlineEyeInvisible />} 
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
        </div>

        {/* خيارات الموافقة */}
        <div className="flex flex-col gap-4 mt-3 mb-4">
          <label className="flex items-center gap-2 text-[14px] text-gray-600  dark:text-gray-400 cursor-pointer">
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded accent-[#2D3E8B]" 
              {...register("agreeTerms")}
            />
            <span>I agree to all the <span className="text-red-400">Terms</span> and <span className="text-red-400">Privacy Policies</span></span>
          </label>
          {errors.agreeTerms && <span className="text-red-400 text-sm">{errors.agreeTerms.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-primary-foreground cursor-pointer py-2 rounded-lg font-bold hover:bg-primary/50 transition-colors mb-4 disabled:opacity-60"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account? <Link href="/signin" className="text-red-400 font-medium hover:underline">Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
