# PARTE 2: Documentação

ID	Requisito	Descrição
RF-01	Criar usuário	O sistema deve permitir a criação de usuários com nome e idade válidos através da rota POST /users
RF-02	Validar nome	O sistema deve impedir a criação de usuários quando o nome não for informado
RF-03	Validar idade	O sistema deve impedir a criação de usuários menores de 18 anos

# ENTREGA 08 — Descritivo de Casos de Teste

8.1 Casos de Teste
ID Caso	ID Requisito	Descrição	Precondição	Passos	Resultado Esperado
CT-01	RF-01	Criar usuário com dados válidos	Servidor rodando	Enviar POST /users com name e age válidos	Usuário criado com sucesso e retorno status 201
CT-02	RF-02	Criar usuário sem nome	Servidor rodando	Enviar POST /users sem o campo name	Retornar erro 400 com mensagem "O nome do usuário é obrigatório."
CT-03	RF-03	Criar usuário menor de idade	Servidor rodando	Enviar POST /users com age menor que 18	Retornar erro 400 com mensagem "O usuário deve ser maior de idade."

## 8.2 Ferramentas e Ambiente

Node.js
Express
Jest

Ambiente:

Sistema Operacional Windows
Visual Studio Code
Node.js instalado


