"use client";

import AuthInput from '@/components/auth/AuthInput';
import AuthLayout from '@/components/auth/AuthLayout';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { verifySchema,VerifySchema } from '../../../schemas/auth/verifySchema';
// Schema للتحقق من الكود
const VerifyCodePage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<VerifySchema>({
    resolver: zodResolver(verifySchema)
  });

  const onSubmit = (data: VerifySchema) => {
    console.log("Code submitted:", data.code);
    // هنا يمكن إرسال الكود للـ backend للتحقق
router.push('/setpass');
  };

  return (
    <AuthLayout 
      title="Verify Code" 
      subtitle="An authentication code has been sent to your email."
      imageSrc="/imges/auth/verify.png"
    >
      <div className="flex flex-col gap-6">
        {/* زر الرجوع */}
        <Link 
          href="/forgetpass" 
          className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-400 hover:text-primary transition-colors mb-2"
        >
          <IoIosArrowBack />
          Back
        </Link>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <AuthInput 
            label="Enter Code" 
            type="text" 
            placeholder="Enter Code Here" 
            register={register("code")}
            error={errors.code?.message}
          />

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Didn't receive a code?{" "}
            <button 
              type="button" 
              className="text-red-400 font-medium hover:underline"
              // لاحقًا يمكن إضافة منطق resend
            >
              Resend
            </button>
          </p>

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
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyCodePage;
