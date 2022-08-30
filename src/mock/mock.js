import { v4 as uuidv4 } from 'uuid';

export const myTasks = [
    {
        id: uuidv4(),
        task: 'go to super-market',
        isComplete: true,
    },
    {
        id: uuidv4(),
        task: 'make your homework',
        isComplete: false,
    },
    {
        id: uuidv4(),
        task: 'visit grandma :)',
        isComplete: false,
    },
    {
        id: uuidv4(),
        task: 'play with your child',
        isComplete: true,
    },
];
