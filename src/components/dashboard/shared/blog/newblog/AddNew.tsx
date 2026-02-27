// app/add-article/page.tsx
// import { ArticleEditor } from "@/components/sections/article-editor/article-editor";
import { Save, Send } from "lucide-react";
import { ArticleEditor } from "./ArticleEditor";

export default function AddArticlePage() {
  return (
    <main className="min-h-screen  ">
      
      {/* Header */}
      <header className="flex items-center gap-3 mb-8">
        {/* <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" /> Status indicator example */}
          <h1 className="text-2xl font-bold">Articles Overview</h1>
      </header>

      {/* Main Content Area */}
      <ArticleEditor />

      {/* Action Buttons Section */}
      <footer className="mt-12 flex items-center justify-end gap-4 p-4 border border-soft rounded-xl bg-card shadow-sm">
        <button className="flex items-center gap-2.5 px-6 py-2.5 text-sm font-semibold rounded-lg border-2 border-primary text-primary bg-background hover:bg-secondary transition duration-150">
          <Save className="w-4 h-4" />
          Save as Draft
        </button>
        <button className="flex items-center gap-2.5 px-6 py-2.5 text-sm font-semibold rounded-lg bg-primary text-white shadow-small hover:bg-accent hover:text-accent-foreground transition duration-150">
          <Send className="w-4 h-4" />
          Publish Article
        </button>
      </footer>
    </main>
  );
}