import React from "react"
import { Button } from "../../ui/button"
import { Textarea } from "../../ui/textarea"
import AuthInput from "../../auth/AuthInput"
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormValues, contactSchema } from "@/schemas/contact/contactSchema";
import { useForm } from "react-hook-form";
export default function ContactForm() { {
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
      });
    
      const onSubmit = (data: ContactFormValues) => {
        console.log("Contact Form Data:", data);
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-card max-w-3xl mx-auto mt-6 p-6 rounded-xl  shadow border border-gray-300 space-y-4">
          <span className="text-gray-600 dark:text-gray-400">We'd love to hear from you! Please fill out the form below to get in touch.</span>
          <AuthInput
            label="Name"
            type="text"
            placeholder="Enter your name"
            register={register("name")}
            error={errors.name?.message}
          />

          <AuthInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            register={register("email")}
            error={errors.email?.message}
          />

          {/* Textarea (shadcn) */}
          <div className="relative mt-5">
            <label className="absolute -top-3 left-4 bg-card rounded-sm px-1 text-[14px] text-primary font-medium z-10">
              Message
            </label>

            <Textarea
              placeholder="Write your message here..."
              className={`mt-2 py-3 h-25 border border-border placeholder-gray-400 dark:placeholder-gray-300 ${
                errors.message ? "border-red-400" : "focus:border-primary"
              }`}
              {...register("message")}
            />

            {errors.message && (
              <p className="text-xs text-red-400 mt-1 ml-2">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Button */}
          <Button type="submit" className="w-full mt-4">
            Send Message
          </Button>
        </form>
  )
}}