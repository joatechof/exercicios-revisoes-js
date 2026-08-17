## Exercício 3 — Ordenação numérica segura

### Objectivo de aprendizagem

Usar um comparador numérico e impedir a mutação acidental causada por `sort()`.

### Contexto

Uma interface deve permitir ordenar números de forma crescente ou decrescente. A lista original tem de continuar disponível na sua ordem inicial.

### Enunciado completo

Cria uma página com:

- um campo para números separados por vírgulas;
- uma selecção entre ordem crescente e decrescente;
- um botão `Ordenar`;
- uma zona que mostre o resultado, o array original e se o original foi preservado.

Implementa `sortNumbers(numbers, direction = "asc")` com este contrato:

- devolve um novo array;
- não altera `numbers`;
- usa ordem numérica crescente quando `direction` é `"asc"`;
- usa ordem numérica decrescente quando `direction` é `"desc"`;
- lança um erro se a direcção não for `"asc"` nem `"desc"`.

Com `[400, 60, 35]`, os resultados devem ser `[35, 60, 400]` em ordem crescente e `[400, 60, 35]` em ordem decrescente. O original deve permanecer `[400, 60, 35]`.

### Hints graduais

1. `sort()` altera o array no qual é chamado.
2. `[...numbers]` cria uma cópia suficiente para um array de números.
3. Crescente: `(a, b) => a - b`.
4. Decrescente: `(a, b) => b - a`.

### Casos de teste obrigatórios

| Input e direcção | Resultado esperado |
| --- | --- |
| `400, 60, 35`, crescente | `[35, 60, 400]` |
| `400, 60, 35`, decrescente | `[400, 60, 35]` |
| `-1, -20, 3`, crescente | `[-20, -1, 3]` |
| `2, 2, 1`, crescente | `[1, 2, 2]` |
| vazio ou valor inválido | mensagem de erro |
| array original depois de ordenar | continua igual |

### Erros comuns

- chamar `numbers.sort()` directamente;
- omitir o comparador e obter ordem lexical;
- inverter os comparadores;
- mostrar apenas o array ordenado e não verificar o original.

### Critérios de sucesso

- ambos os sentidos estão correctos;
- o original é preservado;
- entradas inválidas são rejeitadas;
- o aluno explica o comparador e a cópia.