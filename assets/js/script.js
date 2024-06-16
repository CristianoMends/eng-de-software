
const posts = [
    'java-classes-anonymous',
    'java-functional-interfaces',
    'java-generics',
    'java-lambda-expressions',
    'java-method-reference',
    'java-optional',
    'java-poo',
    'java-stream',
    'cors'
    ];

const postList = document.getElementById('postList');

posts.forEach(fileName => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '/eng-de-software/posts/' + fileName + '.html'
    link.textContent = fileName;
    listItem.appendChild(link);
    postList.appendChild(listItem);
});