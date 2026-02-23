"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { TodoIconButton } from "./TodoActions";
import { cn } from "@/lib/utils";

export interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
  isStarred: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onStar: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTask: string) => void;
}

export const TodoItem = ({
  todo,
  onToggle,
  onStar,
  onDelete,
  onEdit,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleSave = () => {
    const trimmed = editedTask.trim();
    if (trimmed && trimmed !== todo.task) {
      onEdit(todo.id, trimmed);
    }
    setIsEditing(false);
  };

  return (
    <div
      className={cn(
        "group flex items-center justify-between p-4 mb-4 rounded-xl transition-all duration-300 border shadow-sm hover:shadow-md",
        todo.isCompleted
          ? "bg-card text-card-foreground border-border"
          : "bg-card border-primary text-card-foreground"
      )}
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4 flex-1">
        <Checkbox
          checked={todo.isCompleted}
          onCheckedChange={(checked) => {
            if (typeof checked === "boolean") onToggle(todo.id);
          }}
          className={cn(
            "w-5 h-5 rounded-md border-2 transition-colors",
            todo.isCompleted
              ? "border-muted-foreground bg-muted-foreground/20"
              : "border-muted-foreground"
          )}
        />

        {/* TASK CONTENT */}
        {isEditing ? (
          <input
            autoFocus
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") {
                setEditedTask(todo.task);
                setIsEditing(false);
              }
            }}
            className="text-sm font-medium bg-transparent outline-none border-b border-primary flex-1 text-card-foreground"
          />
        ) : (
          <span
            onClick={() => onToggle(todo.id)}
            className={cn(
              "text-sm font-medium capitalize cursor-pointer transition-all",
              todo.isCompleted && "opacity-70 line-through"
            )}
          >
            {todo.task}
          </span>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {!todo.isCompleted && !isEditing && (
          <>
            <TodoIconButton
              variant="star"
              active={todo.isStarred}
              onClick={() => onStar(todo.id)}
              className="text-accent hover:text-accent-foreground"
            />

            <TodoIconButton
              variant="edit"
              onClick={() => setIsEditing(true)}
              className="text-primary hover:text-primary-foreground"
            />
          </>
        )}

        <TodoIconButton
          variant={todo.isCompleted ? "delete" : "close"}
          onClick={() => onDelete(todo.id)}
          className={cn(
            todo.isCompleted ? "text-destructive hover:text-destructive-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        />
      </div>
    </div>
  );
};
