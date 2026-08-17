## Exercício 2 — Mínimo e primeira posição

### Objectivo de aprendizagem

Inicializar uma pesquisa a partir dos dados e manter o valor mínimo e o seu índice sincronizados.

### Contexto

É necessário encontrar o menor valor de uma lista e saber onde apareceu pela primeira vez. A lista pode conter números negativos e o mínimo pode estar repetido.

### Enunciado completo

Cria uma página com um campo para números separados por vírgulas, um botão `Encontrar mínimo` e uma zona que mostre o mínimo e o primeiro índice onde aparece.

Implementa `findMinimum(numbers)` com este contrato:

- recebe um array de números;
- devolve `null` quando recebe um array vazio;
- nos restantes casos, devolve `{ value, index }`;
- `value` é o menor número do array;
- `index` é a primeira posição onde esse número aparece;
- não altera o array recebido.

A interface deve validar e converter a string antes de chamar `findMinimum()`.

### Exemplo obrigatório

Para `7, -3, 4, -3`, a interface deve mostrar:

```text
Mínimo: -3
Primeiro índice: 1
```

### Starter completo

O starter inclui interface, parsing, validação, evento e output. Os `TODO` estão em `findMinimum()`.

### Hints graduais

1. Se não existe primeiro elemento, não existe mínimo: devolve `null`.
2. Usa `numbers[0]` e o índice `0` como primeira resposta provisória.
3. Começa o ciclo no índice `1`.
4. Usa `<`, não `<=`, para preservar a primeira ocorrência.

### Tabela de raciocínio para `7, -3, 4, -3`

| Índice | Valor actual | Mínimo antes | Substitui? | Índice mínimo depois |
| ---: | ---: | ---: | --- | ---: |
| 0 | 7 | ainda não existe | inicialização | 0 |
| 1 | -3 | 7 | sim | 1 |
| 2 | 4 | -3 | não | 1 |
| 3 | -3 | -3 | não; queremos o primeiro | 1 |

### Casos de teste obrigatórios

| Chamada ou input | Resultado esperado |
| --- | --- |
| `findMinimum([])` | `null` |
| `findMinimum([-8, -2, -10])` | `{ value: -10, index: 2 }` |
| `findMinimum([7, -3, 4, -3])` | `{ value: -3, index: 1 }` |
| interface vazia | mensagem de erro |
| interface com `2, texto, 4` | mensagem de erro |

### Erros comuns

- começar o mínimo em `0`, que pode nem pertencer à lista;
- usar `Math.min()` e esquecer o índice;
- actualizar o valor mínimo sem actualizar o índice;
- usar `<=` e devolver a última ocorrência.

### Critérios de sucesso

- funciona com negativos, um elemento e valores repetidos;
- respeita o contrato do array vazio;
- devolve a primeira ocorrência;
- o aluno explica por que razão `0` não é uma inicialização segura.