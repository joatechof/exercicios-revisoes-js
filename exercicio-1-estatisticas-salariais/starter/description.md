## Exercício 1 — Estatísticas salariais robustas

### Objectivo de aprendizagem

Separar validação, conversão, cálculo e apresentação; praticar um acumulador, um contador e o cálculo da média.

### Contexto

Uma pequena empresa quer analisar cinco salários. O utilizador escreve os valores numa interface, mas os dados chegam ao JavaScript como texto. O programa deve validar os dados antes de efectuar qualquer cálculo.

### Enunciado completo

Cria uma página com:

- um título;
- um campo onde o utilizador escreve exactamente cinco salários separados por vírgulas;
- um botão `Calcular`;
- uma zona de resultado acessível.

No JavaScript, implementa `parseSalaries(rawValue)`, `calculateStatistics(salaries)`, `handleSalarySubmit(event)` e `showResult(message, isError)`.

`parseSalaries(rawValue)` deve:

1. remover espaços apenas no início e no fim do texto total e de cada parcela;
2. rejeitar texto vazio;
3. exigir exactamente cinco parcelas;
4. rejeitar posições vazias, como `900,,1200,1500,1800`;
5. converter as parcelas para números;
6. rejeitar `NaN`, `Infinity`, `-Infinity` e salários negativos;
7. devolver `{ salaries }` quando tudo é válido ou `{ error }` quando existe um problema.

`calculateStatistics(salaries)` recebe um array já validado e devolve um objecto com:

- `total`: soma dos cinco salários;
- `average`: média dos cinco salários;
- `above1000`: quantidade de salários estritamente superiores a `1000`.

O valor `1000` não conta como “acima de 1000”. A função de cálculo não pode ler o input nem alterar o DOM.

### Exemplo obrigatório

Para `900, 1000, 1200, 1500, 1800`, a interface deve mostrar:

```text
Total: 6400
Média: 1280
Acima de 1000: 3
```

### Starter completo

O starter abre sem erros, tem a interface, validação, eventos e output preparados. Os `TODO` estão apenas em `calculateStatistics()`.

### Hints graduais

1. Um acumulador começa em `0` e recebe `total += salary` em cada passagem.
2. Um contador só cresce dentro da condição que representa a regra.
3. Calcula a média depois de terminares o ciclo.
4. Usa `salaries.length`; não escrevas `5` dentro da função de cálculo.

### Casos de teste obrigatórios

| Input | Resultado esperado |
| --- | --- |
| vazio | mensagem de erro; nenhum cálculo |
| `900, 1000` | erro: não existem cinco salários |
| `900,,1200,1500,1800` | erro: existe uma posição vazia |
| `900, texto, 1200, 1500, 1800` | erro: existe um valor inválido |
| `900, -1, 1200, 1500, 1800` | erro: existe um salário negativo |
| `900, 1000, 1200, 1500, 1800` | total `6400`, média `1280`, contador `3` |

### Erros comuns

- chamar `Number()` antes de rejeitar a string vazia, porque `Number("")` devolve `0`;
- usar `>= 1000` quando o contrato diz “estritamente superior”;
- dividir o total por um valor escrito manualmente;
- misturar selecção de elementos dentro da função de cálculo.

### Critérios de sucesso

- os seis casos de teste produzem o resultado esperado;
- entradas inválidas nunca chegam a `calculateStatistics()`;
- `calculateStatistics()` só recebe dados e devolve dados;
- o aluno explica a diferença entre acumulador e contador.