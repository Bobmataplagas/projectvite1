function greetPerson(name:string){
    return `Hola, ${name}`;
}

console.log(greetPerson('Fernando'))
//Podemos definir una función de flechapara obtener el mismo resultado
const getUser = (nameUser:string) => `Hola, ${nameUser}`;
console.log(getUser('María'))
const getDetailUser = () => {
    return {
        uid: 'ABC-123',
        username: 'Tony001'
    }
}
console.log(getDetailUser())