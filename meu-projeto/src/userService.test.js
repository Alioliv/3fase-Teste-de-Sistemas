import { createUser } from './userService.js';


// TESTE DE SUCESSO

test("Deve criar usuário corretamente", () => {

    const user = createUser({
        name: "Maria",
        age: 20
    });

    expect(user.name).toBe("Maria");

    expect(user.age).toBe(20);

    expect(user.isActive).toBe(true);

    expect(user.roles).toEqual(['user']);

});


// TESTE SEM NOME

test("Deve gerar erro sem nome", () => {

    expect(() => {

        createUser({
            age: 25
        });

    }).toThrow("O nome do usuário é obrigatório.");

});


// TESTE MENOR DE IDADE

test("Deve gerar erro menor de idade", () => {

    expect(() => {

        createUser({
            name: "João",
            age: 15
        });

    }).toThrow("O usuário deve ser maior de idade.");

});