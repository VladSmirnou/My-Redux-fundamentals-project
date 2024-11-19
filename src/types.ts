export type FilterByStatusValues = 'all' | 'active' | 'completed';
export type FilterColorTagValues = {
    [key: string]: { selected: boolean };
};
export type Task = {
    id: number;
    title: string;
    colorTag: string | undefined;
    isDone: boolean;
};

// type Tasks = {
//     ids: Array<number>;
//     entities: {
//         [id: string]: Task;
//     };
// };
