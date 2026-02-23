"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TodoItem } from "./TodoItem";

import {
  setTodos,
  toggleTodo,
  starTodo,
  deleteTodo,
  setFilter,
  addTodo,
  updateTodo,
  selectFilteredTodos,
} from "@/store/slices/todoSlice";

import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";

// مثال بيانات أولية
const MOCK_DATA = [
  { id: "1", task: "Meeting with Developer", isCompleted: false, isStarred: false },
  { id: "2", task: "Add quiz to React course", isCompleted: false, isStarred: true },
  { id: "3", task: "Add assignment to Fullstack course", isCompleted: false, isStarred: false },
  { id: "4", task: "Add blogs", isCompleted: true, isStarred: false },
];

export const TodoContainer = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectFilteredTodos);
  const filter = useAppSelector((state) => state.todos.filter);
  const allTodos = useAppSelector((state) => state.todos.todos);

  // تحميل البيانات مرة واحدة عند mount
  useEffect(() => {
    dispatch(setTodos(MOCK_DATA));
  }, [dispatch]);

  // ✨ وظيفة تعديل النص
  const handleEdit = (id: string, newTask: string) => {
    dispatch(updateTodo({ id, task: newTask }));
  };

  const handleAddNew = () => {
    dispatch(addTodo("Add Task Here"));
    
  };

  return (
    <div className="flex flex-col items-center justify-start  w-full">
      {allTodos.length === 0 ? (
        // حالة ما في أي تاسكات
        <div className="flex flex-col items-center justify-center mt-16 gap-4">
          <p className="text-center text-muted-foreground text-lg">
            No tasks available.
          </p>
          <Button onClick={handleAddNew} variant="default">
            Add New Task
          </Button>
        </div>
      ) : (
        // حالة وجود تاسكات
        <>
          {/* HEADER مع Tabs وزر Add */}
          <div className="flex flex-wrap items-center justify-between gap-4 w-full">
            <Tabs
              value={filter}
              onValueChange={(value) =>
                dispatch(setFilter(value as "all" | "completed" | "not-completed"))
              }
            >
              <TabsList className="gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="not-completed">Not-Completed</TabsTrigger>
              </TabsList>
            </Tabs>

            <Button onClick={handleAddNew} variant="default">
              Add New
            </Button>
          </div>

          {/* LIST OF TODOS */}
          <div className="mt-8 w-full">
            {todos.length === 0 ? (
              <p className="text-center text-muted-foreground">
                No tasks for this filter.
              </p>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={(id) => dispatch(toggleTodo(id))}
                  onStar={(id) => dispatch(starTodo(id))}
                  onDelete={(id) => dispatch(deleteTodo(id))}
                  onEdit={handleEdit}
                />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};
