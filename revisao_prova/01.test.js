function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero");
  }
  return a / b;
}

test("teste da divisão", () => {
  const resultado = dividir(10, 2);
  console.log("Resultado no teste:", resultado);

  expect(resultado).toBe(5);
});