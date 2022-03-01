import { fireEvent, render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { addTodo, App, removeTodo, Todo } from "./App"

describe('addTodo', () => {
    it('', () => {
        const todos: Todo[] = []
        const result = addTodo(todos, 'New todo, yay!')
        expect(result).toMatchObject([{ id: 1, title: 'New todo, yay!' }])
    })
})

describe('removeTodo', () => {
    it('', () => {
        const todos: Todo[] = [
            { id: 1, title: 'New todo, yay!' }
        ]
        const result = removeTodo(todos, 1)
        expect(result).toMatchObject([])
    })
})

describe('App', () => {
    it('displays `Todo app` when the app loads', () => {
        render(<App />)
        const display = screen.getByTestId('header')
        expect(display.textContent).toBe('Todo app')
    })

    it('It add a todo when I press `ADD TODO` button', () => {
        render(<App />)
        const addTodoButton = screen.getByTestId('AddTodoBtn')
        fireEvent.click(addTodoButton)
        const todoLiEl = screen.getByTestId(`todo-1`)
        expect(todoLiEl.textContent).toContain('New todo, yay!')
        const removeTodoButton = screen.getByTestId(`removeTodo-1`)
        expect(removeTodoButton.textContent).toContain('X')
        expect(todoLiEl).toBeUndefined
    })
})
