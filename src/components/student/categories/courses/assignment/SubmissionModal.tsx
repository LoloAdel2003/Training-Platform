"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FileCard } from "./FileCard";

export const SubmissionModal = ({ existingSubmission, onUpdate }: any) => {

  const [text, setText] = useState(existingSubmission?.textContent || "");
  const [files, setFiles] = useState<File[]>([]);

  // إضافة ملفات
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  // حذف ملف
  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    onUpdate(text, files);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={existingSubmission ? "outline" : "default"}
          className="bg-primary text-primary-foreground shadow-md hover:opacity-90"
        >
          {existingSubmission ? "Edit Submission" : "Add Submission"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[525px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold border-b pb-4">
            Answer
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">

          {/* textarea */}
          <Textarea
            placeholder="My answer..."
            className="min-h-[150px] bg-background border-border focus-visible:ring-primary"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* upload files */}
          <label className="border-2 border-dashed border-border rounded-xl p-8 text-center flex flex-col items-center gap-2 hover:bg-accent/50 transition-colors cursor-pointer">
            <span className="font-semibold">Attach Files</span>
            <span className="text-xs text-muted-foreground">
              Drag and drop files or{" "}
              <span className="text-primary underline">browse files</span>
            </span>

            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {/* عرض الملفات */}
          <div className="flex flex-col gap-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between">
                <FileCard
                  name={file.name}
                  url={URL.createObjectURL(file)}
                />

                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeFile(index)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>

        </div>

        <div className="flex justify-end gap-3 mt-4">

          <DialogClose asChild>
            <Button variant="ghost" className="px-8">
              Cancel
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              className="bg-primary px-8"
              onClick={handleSubmit}
            >
              Update
            </Button>
          </DialogClose>

        </div>
      </DialogContent>
    </Dialog>
  );
};