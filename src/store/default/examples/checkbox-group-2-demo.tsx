"use client";
import React, { useState } from "react";
import { Checkbox } from "@/store/default/ui/checkbox";
import { CheckboxGroup } from "@/store/default/ui/checkbox-group";

const todos = [
  {
    id: "task1",
    title: "Design System",
    description: "Create a consistent design system for the app",
    tone: "info",
  },
  {
    id: "task2",
    title: "User Authentication",
    description: "Implement secure login and registration",
    tone: "warning",
  },
  {
    id: "task3",
    title: "Database Setup",
    description: "Configure and optimize database structure",
    tone: "error",
  },
  {
    id: "task4",
    title: "Testing",
    description: "Write and execute test cases",
    tone: "success",
  },
] as const;

export default function CheckboxGroupDemo2() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="w-full h-full">
      <CheckboxGroup
        value={value}
        onValueChange={setValue}
        allValues={todos.map((todo) => todo.id)}
        aria-label="Todo List"
        className="w-full space-y-6"
      >
        <div className="w-full flex items-center justify-between pb-3 border-b">
          <div>
            <h4 className="text-lg font-semibold">Project Tasks</h4>
            <p className="text-sm text-muted-foreground">
              Track your project progress
            </p>
          </div>
          <label className="flex items-center gap-2 pr-3 pl-1.5 py-1.5 rounded-md bg-secondary/40 hover:bg-secondary/60 transition-colors">
            <Checkbox parent />
            <span className="text-sm font-medium">Complete All</span>
          </label>
        </div>

        <div className="space-y-4 w-full">
          {todos.map((todo) => (
            <label
              key={todo.id}
              className="group relative flex items-start gap-4 p-4 rounded-lg border hover:border-primary/25 transition-all"
            >
              <Checkbox name={todo.id} tone={todo.tone} className="mt-0.5" />
              <div className="space-y-1">
                <div className="font-semibold group-hover:text-primary leading-none">
                  {todo.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {todo.description}
                </div>
              </div>
            </label>
          ))}
        </div>
      </CheckboxGroup>
    </div>
  );
}
