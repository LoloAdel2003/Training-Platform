"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Image as ImageIcon } from "lucide-react";
import { z } from "zod";

/* ---------------- Zod Schema ---------------- */
const reportSchema = z.object({
  description: z
    .string()
    .min(1, "Description is required"),
  image: z.instanceof(File).optional().nullable(),
});

const ProblemReportForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    /* ---------- Zod Validation ---------- */
    const result = reportSchema.safeParse({
      description,
      image,
    });

    if (!result.success) {
     setError(result.error.issues[0].message);

      return;
    }

    /* ---------- FormData (محاكاة باك) ---------- */
    const formData = new FormData();
    formData.append("description", description);
    if (image) formData.append("image", image);

    console.log("===== Report Data =====");
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    /* ---------- Reset Form ---------- */
    setDescription("");
    setImage(null);

    if (cameraInputRef.current) cameraInputRef.current.value = "";
    if (galleryInputRef.current) galleryInputRef.current.value = "";
  };

  const isFormValid = description.trim().length > 0;

  return (
    <Card className="max-w-4xl mx-auto border border-gray-400 rounded-2xl">
      <CardContent className="p-6 space-y-6">
        <p className="text-sm text-muted-foreground">
          Describe your issue, attach an image if needed, and submit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="border border-dashed border-gray-400 rounded-xl p-6 space-y-4 text-center">
            <p className="text-sm text-left font-medium">
              Capture Problem Photo
            </p>

            {/* Camera */}
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />

            <Button
              type="button"
              className="w-full flex gap-2"
              onClick={() => cameraInputRef.current?.click()}
            >
              <Camera size={18} />
              Open Camera
            </Button>

            <div className="text-sm text-muted-foreground">or</div>

            {/* Gallery */}
            <input
              ref={galleryInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />

            <Button
              type="button"
              variant="outline"
              className="w-full flex gap-2"
              onClick={() => galleryInputRef.current?.click()}
            >
              <ImageIcon size={18} />
              Choose from Gallery
            </Button>

            {image && (
              <p className="text-xs text-muted-foreground truncate">
                Selected: {image.name}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Describe a Problem *
            </label>
            <Textarea
              placeholder="Describe a problem here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[120px] text-gray-800"
            />
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full"
            disabled={!isFormValid}
          >
            Send a Report
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProblemReportForm;
