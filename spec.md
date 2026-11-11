# Specification

## Overview
A simple vanilla JavaScript task tracker application that allows users to create, read, update, and delete tasks. Tasks can be categorized, filtered, marked as completed, and are persisted using LocalStorage. Overdue tasks are highlighted.

## Functional Requirements
- **Add Task**: Users can add a new task with a title, description, due date, and category.
- **Edit Task**: Existing tasks can be edited.
- **Delete Task**: Tasks can be removed.
- **Toggle Completion**: Mark tasks as completed/uncompleted via a checkbox.
- **Category Filtering**: Filter tasks by selected category.
- **Completion Filtering**: Show all, completed only, or incomplete only tasks.
- **Overdue Highlight**: Tasks past their due date are highlighted in red.
- **Persistence**: All tasks are saved in the browser's LocalStorage and loaded on page load.

## Non‑functional Requirements
- Implemented using only HTML, CSS, and vanilla JavaScript (no frameworks).
- Responsive UI with basic animations.
- Works in modern browsers.

## UI Elements
- Task list display area.
- Form for adding/editing tasks.
- Category filter dropdown.
- Completion status filter controls.
- Buttons for edit and delete actions.

## Data Model
```json
{
  "id": "unique-id",
  "title": "Task title",
  "description": "Optional details",
  "category": "Work | Personal | ...",
  "dueDate": "YYYY-MM-DD",
  "completed": false
}
```

## Storage
Tasks are stored as a JSON string under the key `tasks` in LocalStorage.
