"use client";

import AuthInput from "@/components/auth/AuthInput";
import AuthLayout from "@/components/auth/AuthLayout";
import Link from "next/link";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema,LoginSchema } from "../../../schemas/auth/loginSchema";
import { useRouter } from "next/navigation";
import SocialButton from "@/components/custome/SocialButton";

const LoginPage = () => {
  const router=useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    console.log("READY FOR SERVER 👉", data);
    router.push('/')

    // لاحقًا:
    // await loginAction(data)
  };

  return (
    <AuthLayout
      title="Login"
      subtitle="Login to access your travelwise account"
      imageSrc="/imges/auth/Login.png"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
        <AuthInput
          label="Email"
          type="email"
          placeholder="alaa@gmail.com"
          register={register("email")}
          error={errors.email?.message}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="............"
          icon={<AiOutlineEyeInvisible />}
          register={register("password")}
          error={errors.password?.message}
        />

        <div className="flex justify-between items-center mt-2 mb-4">
          <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
            <input type="checkbox" className="rounded accent-primary" />
            Remember me
          </label>
          <Link
            href="/forgetpass"
            className="text-sm text-red-500 dark:text-red-400 hover:underline"
          >
            Forgot Password
          </Link>
        </div>

        <button
          disabled={isSubmitting}
          className="bg-primary text-primary-foreground cursor-pointer py-2 rounded-lg font-bold hover:bg-primary/50 transition-colors mb-4 disabled:opacity-60"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-red-500 dark:text-red-400 font-medium hover:underline">
            Sign up
          </Link>
        </p>

        <div className="mt-8">
          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-gray-200 dark:border-gray-400 w-full"></div>
            <span className="bg-card px-4 text-xs text-primary-foreground absolute">
              Or login with
            </span>
          </div>

          <div className="flex justify-center gap-4">
            <SocialButton icon={<FaFacebookF />} />
            <SocialButton icon={<FaGoogle />} />
            <SocialButton icon={<FaApple />} />
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};



export default LoginPage;
