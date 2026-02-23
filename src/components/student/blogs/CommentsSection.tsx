"use client";
// components/comments/CommentsSection.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
import { CommentItem } from "./CommentItem";
import { Checkbox } from "../../ui/checkbox";

export default function CommentsSection() {
  return (
    <div className="  p-6 space-y-4 bg-app font-sans">
      
      {/* Header */}
      <div>
        <h3 className="text-xl font-bold text-foreground">Comments</h3>
        <p className="text-muted-foreground text-sm">20 Comments</p>
      </div>

      {/* Comments List */}
      <div className="space-y-1">
        <CommentItem 
          author="Laura Hipster" 
          date="October 03, 2022"
          avatarSrc="https://github.com/shadcn.png"
          content="This article perfectly captures how online learning is shaping the future. I really believe technology will make education more equal for everyone."
        />
        <CommentItem 
          author="Laura Hipster" 
          date="October 03, 2022"
          avatarSrc="https://github.com/shadcn.png"
          isReply
          content="Thank you for your thoughtful comment! At EduQuest, we truly believe accessibility is key, and we're constantly working to make high-quality learning available to all learners worldwide."
        />
         <CommentItem 
          author="Laura Hipster" 
          date="October 03, 2022"
          avatarSrc="https://github.com/shadcn.png"
          isReply
          content="Thank you for your thoughtful comment! At EduQuest, we truly believe accessibility is key, and we're constantly working to make high-quality learning available to all learners worldwide."
        />
         <CommentItem 
          author="Laura Hipster" 
          date="October 03, 2022"
          avatarSrc="https://github.com/shadcn.png"
          content="This article perfectly captures how online learning is shaping the future. I really believe technology will make education more equal for everyone."
        />
        <CommentItem 
          author="Laura Hipster" 
          date="October 03, 2022"
          avatarSrc="https://github.com/shadcn.png"
          isReply
          content="Thank you for your thoughtful comment! At EduQuest, we truly believe accessibility is key, and we're constantly working to make high-quality learning available to all learners worldwide."
        />
      </div>

      {/* Pagination (Simplified) */}
      <div className="flex justify-center gap-2 py-4">
        {[1, 2, 3].map((page) => (
          <Button 
            key={page}
            variant={page === 1 ? "default" : "outline"}
            className={`w-10 h-10 rounded-full ${page === 1 ? "bg-primary text-primary-foreground" : "border-border text-muted-foreground"}`}
          >
            {page}
          </Button>
        ))}
      </div>

      {/* Leave a Comment Form */}
      <div className="space-y-6  border border-border p-4 pt-6 rounded-sm">
        <div className="space-y-1">
          <h3 className="text-xl font-bold">Leave A Comment</h3>
          <p className="text-sm text-muted-foreground">Your email address will not be published. Required fields are marked *</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Name*" className="bg-card border-border h-12 focus:ring-primary" />
            <Input placeholder="Email*" type="email" className="bg-card border-border h-12 focus:ring-primary" />
          </div>
          <Textarea 
            placeholder="Comment" 
            className="bg-card border-border min-h-[150px] focus:ring-primary" 
          />
          
          <div className="flex items-start space-x-2 space-x-reverse py-2">
            <Checkbox id="save-info" />
            <label htmlFor="save-info" className="ml-2 text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Save My Name, Email In This Browser For The Next Time I Comment
            </label>
          </div>

          <Button className="bg-primary hover:opacity-90 text-primary-foreground px-8 py-6 rounded-full text-lg shadow-medium transition-all active:scale-95">
            Posts Comment
          </Button>
        </form>
      </div>
    </div>
  );
}