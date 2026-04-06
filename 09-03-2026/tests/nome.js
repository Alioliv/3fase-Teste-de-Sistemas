export function nome(valor) {

    // verificar se foi enviado
    if (!valor) {
        throw new Error("Nome é obrigatório");
    }

    // verificar se é string
    if (typeof valor !== "string") {
        throw new Error("Nome precisa ser texto");
    }

    // remover espaços
    const nomeFormatado = valor.trim();

    // verificar tamanho mínimo
    if (nomeFormatado.length < 3) {
        throw new Error("Nome muito curto");
    }

    // exemplo de regra inválida
    if (nomeFormatado === "Senai") {
        throw new Error("Nome inválido");
    }

    return nomeFormatado;
}