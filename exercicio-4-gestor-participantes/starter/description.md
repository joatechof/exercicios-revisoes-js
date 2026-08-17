## Exercício 4 — Gestor de participantes

### Objectivo de aprendizagem

Usar um array como fonte de verdade, separar regras de dados dos eventos e voltar a renderizar o DOM depois de cada alteração válida.

### Contexto

Uma actividade precisa de manter uma lista de participantes. O utilizador deve poder adicionar e remover nomes sem criar duplicados acidentais.

### Enunciado completo

Cria uma página que começa com `Marta` e `Rui` e que tenha:

- um formulário para adicionar um nome;
- um formulário para remover um nome;
- uma mensagem de sucesso ou erro;
- uma lista visível de participantes.

Usa `let participants = ["Marta", "Rui"]` como fonte de verdade e implementa `addParticipant`, `removeParticipant`, os dois handlers de submit, `renderParticipants` e `showMessage`.

Regras obrigatórias:

1. remover apenas espaços exteriores;
2. rejeitar nomes vazios;
3. impedir duplicados sem distinguir maiúsculas de minúsculas;
4. remover sem distinguir maiúsculas de minúsculas;
5. remover exactamente o participante encontrado;
6. não alterar o array numa operação inválida;
7. depois de uma operação válida, renderizar toda a lista a partir do array;
8. mostrar uma mensagem clara;
9. limpar e focar apenas o input usado na operação válida;
10. mostrar “Ainda não existem participantes.” quando a lista fica vazia.

### Starter completo

O starter já trata eventos, output, estado vazio e renderização. Os `TODO` estão nas duas funções que alteram os dados.

### Hints graduais

1. Normaliza a comparação, não o nome que vais mostrar.
2. Usa `some()` para perguntar se já existe.
3. Usa `findIndex()` para descobrir a posição a remover.
4. Usa `splice(index, 1)` apenas depois de confirmar que `index !== -1`.
5. O DOM é uma fotografia do array; depois de mudar o array, chama `renderParticipants()`.

### Casos de teste obrigatórios

| Acção | Resultado esperado |
| --- | --- |
| adicionar vazio ou espaços | erro; lista inalterada |
| adicionar `marta` | erro de duplicado; lista inalterada |
| adicionar ` Ana ` | `Ana` é acrescentada e mostrada |
| remover `RUI` | `Rui` é removido |
| remover pessoa inexistente | erro; lista inalterada |
| remover todos | aparece o estado vazio |

### Erros comuns

- fazer `push()` antes de validar;
- guardar todos os nomes em minúsculas e perder a apresentação original;
- usar `shift()` e remover sempre a primeira pessoa;
- alterar o DOM sem actualizar o array;
- esquecer `event.preventDefault()`.

### Critérios de sucesso

- todos os casos da tabela funcionam;
- array e DOM nunca divergem;
- nenhuma operação inválida altera o estado;
- o aluno identifica regras, eventos e renderização.