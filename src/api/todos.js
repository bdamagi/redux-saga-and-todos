export const getTodos = async () => {
    const [error, todos] = await fetch(
        'https://jsonplaceholder.typicode.com/todos'


    )
        .then(async response => [null, await response.json()])
        .catch(error => [error])

    return [error.todos]

}

