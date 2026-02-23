"use client";

import AuthInput from '@/components/auth/AuthInput';
import AuthLayout from '@/components/auth/AuthLayout';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { setpassSchema, SetpassSchema } from '../../../schemas/auth/setpassSchema';

const SetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SetpassSchema>({
    resolver: zodResolver(setpassSchema),
  });

  const onSubmit = (data: SetpassSchema) => {
    console.log("Password Data:", data);
    // هنا لاحقًا API call
  };

  return (
    <AuthLayout
      title="Set a Password"
      subtitle="Your previous password has been reset. Please set a new password for your account."
      imageSrc="/imges/auth/set_password.png"
    >
      <div className="flex flex-col gap-6">
        {/* زر الرجوع */}
        <Link
          href="/verify"
          className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-400 hover:text-primary transition-colors mb-2"
        >
          <IoIosArrowBack />
          Back
        </Link>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
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

          <button
            type="submit"
            disabled={isSubmitting}
          className="bg-primary text-primary-foreground cursor-pointer py-2 rounded-lg font-bold hover:bg-primary/50 transition-colors mb-4 disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* مؤشر الصفحات */}
        <div className="flex justify-center gap-2 mt-8 md:mt-16">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SetPasswordPage;
