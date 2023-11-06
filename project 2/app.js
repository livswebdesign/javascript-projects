let data = [
    {
    name: 'matero',
    age: '30'
    },

{
    name: 'sarah',
    age: '32'
    },

{
    name: 'john',
    age: '20'
    },
{
    name: 'tim',
    age: '27'
    },
{
    name: 'sam',
    age: '22'
    },
{
    name: 'joey',
    age: '34'
    },
    
];

const info = document.querySelector ('#info')
let details = data.map(function(item){
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>');
});

info.innerHTML = details.join ('\n');