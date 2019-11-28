const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];
const totalTimeFrontend = tasks.reduce((acc, value)=> {
   if (value.category === 'Frontend'){
       acc += value.timeSpent
   }
   return acc;
}, 0);
console.log('Общее количество времени, затраченное на работу над задачами из категории Frontend' + ': ' + totalTimeFrontend + ' |');

const totalTimeBug = tasks.reduce((acc, value)=> {
    if (value.type === 'bug'){
        acc += value.timeSpent
    }
    return acc;
}, 0);
console.log('Общее количество времени, затраченное на работу над задачами типа bug' + ': ' + totalTimeBug + ' |');

const includesUI = (tasks.filter(task => {
   return task.title.includes('UI');
})).length;
console.log('Количество задач, имеющих в названии слово "UI"' + ' ' + includesUI);

const frontendAndBackendCount = tasks.reduce((acc, value)=>{
    acc[value.category]++;
    return acc;
},{Frontend: 0, Backend: 0});
console.log(frontendAndBackendCount);

const arrayTasks = tasks.filter(title => {
    if (title.timeSpent > 4){
        return title;
    }
}).map((items)=>{
    return {title: items.title, category: items.category}
});
console.log(arrayTasks);
