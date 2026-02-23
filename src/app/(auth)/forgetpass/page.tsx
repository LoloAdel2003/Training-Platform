"use client";

import AuthInput from '@/components/auth/AuthInput';
import AuthLayout from '@/components/auth/AuthLayout';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from 'react-icons/io';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetSchema, ForgetSchema } from '../../../schemas/auth/forgetpassSchema';

const ForgetPasswordPage = () => {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ForgetSchema>({
    resolver: zodResolver(forgetSchema)
  });

  const onSubmit = (data: ForgetSchema) => {
    console.log("Email submitted:", data.email);
    // بعد الإرسال يمكن إعادة توجيه المستخدم لصفحة التحقق
    router.push('/verify');
  };

  return (
    <AuthLayout 
      title="Forget Password?" 
      subtitle="Don’t worry, happens to all of us. Enter your email below to recover your password"
      imageSrc="/imges/auth/Forgot.png"
    >
      <div className="flex flex-col gap-6">
        {/* زر الرجوع للخلف */}
        <Link 
          href="/signin" 
          className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-400  hover:text-primary transition-colors mb-2"
        >
          <IoIosArrowBack />
          Back to login
        </Link>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <AuthInput 
            label="Email" 
            type="email" 
            placeholder="alaa@gmail.com" 
            register={register("email")}
            error={errors.email?.message}
          />

          <button 
            type="submit"
            disabled={isSubmitting}
          className="bg-primary text-primary-foreground cursor-pointer py-2 rounded-lg font-bold hover:bg-primary/50 transition-colors mb-4 disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* مؤشر الصفحات (Dots) الموجود أسفل الصورة في التصميم */}
        <div className="flex justify-center gap-2 mt-8 md:mt-16">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgetPasswordPage;
