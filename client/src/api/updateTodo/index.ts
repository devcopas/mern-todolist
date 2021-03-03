import axios from 'axios';

import { getTodo } from 'api/getTodo';

import { TodoBody } from 'types/todos.type';
import { TodoStatus } from 'enums/todos.enum';

export const updateTodo = async (id: string): Promise<void> => {
    try {
        const selectedTodo = await getTodo(id);

        if (selectedTodo.status === 200) {
            const todo = selectedTodo.data.result;
            const body: TodoBody = {
                title: todo.title,
            };

            todo.status === TodoStatus.completed ? (body.status = 'uncompleted') : (body.status = 'completed');

            await axios({
                method: 'PUT',
                url: `http://localhost:8080/${id}`,
                data: body,
            });
        }
    } catch (error) {
        throw new Error(error);
    }
};
