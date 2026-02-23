import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store"; // ✅ مهم

export interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
  isStarred: boolean;
}

interface TodoState {
  todos: Todo[];
  filter: "all" | "completed" | "not-completed";
}

const initialState: TodoState = {
  todos: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },

    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.unshift({
        id: crypto.randomUUID(),
        task: action.payload,
        isCompleted: false,
        isStarred: false,
      });
      
    },

   toggleTodo: (state, action: PayloadAction<string>) => {
  const index = state.todos.findIndex((t) => t.id === action.payload);
  if (index !== -1) {
    // نقلب حالة isCompleted
    state.todos[index].isCompleted = !state.todos[index].isCompleted;

    const todo = state.todos[index];

    if (todo.isCompleted) {
      // إذا صارت مكتملة، نزيلها من مكانها ونضيفها للنهاية
      state.todos.splice(index, 1);
      state.todos.push(todo);
    } else {
      // إذا رجعت غير مكتملة، ممكن نضيفها للبداية أو حسب الترتيب المطلوب
      state.todos.splice(index, 1);
      state.todos.unshift(todo);
    }
  }
},


    starTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.isStarred = !todo.isStarred;
      }
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    updateTodo: (
  state,
  action: PayloadAction<{ id: string; task: string }>
) => {
  const todo = state.todos.find((t) => t.id === action.payload.id);
  if (todo) {
    todo.task = action.payload.task;
  }
},


    setFilter: (
      state,
      action: PayloadAction<"all" | "completed" | "not-completed">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const {
  setTodos,
  addTodo,
  toggleTodo,
  starTodo,
  deleteTodo,
  setFilter,
  updateTodo
} = todoSlice.actions;

/* =========================
   SELECTOR
========================= */

export const selectFilteredTodos = (state: RootState) => {
  const { todos, filter } = state.todos;

  switch (filter) {
    case "completed":
      return todos.filter((todo) => todo.isCompleted);
    case "not-completed":
      return todos.filter((todo) => !todo.isCompleted);
    default:
      return todos;
  }
};

export default todoSlice.reducer;
