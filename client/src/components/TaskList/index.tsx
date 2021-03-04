import React from 'react';

import TaskCard from 'components/TaskCard/index';

const TaskList: React.FC = () => {
    return (
        <section className="flex flex-col overflow-x-hidden overflow-y-auto h-taskList rounded">
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
            <TaskCard title="Typescript"></TaskCard>
        </section>
    );
};

export default TaskList;
