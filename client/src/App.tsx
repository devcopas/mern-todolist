import React from 'react';

import Header from 'components/Header/index';
import TaskList from 'components/TaskList/index';
import PlusButton from 'components/PlusButton/index';
import Form from 'components/Form/index';

const App: React.FC = () => {
    return (
        <main className="container relative bg-darkPurple mx-auto max-w-lg p-4 box-border min-h-screen">
            <Header />
            <TaskList />
            <Form />
            <PlusButton />
        </main>
    );
};

export default App;
