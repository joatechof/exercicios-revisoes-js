## Exercício 5 — Catálogo de carros

### Objectivo de aprendizagem

Escolher `map`, `filter`, `some` e `every` pela forma da resposta e preservar arrays e objectos originais.

### Contexto e dados

Um stand quer simular um aumento de 20%, seleccionar carros dentro de um orçamento e responder a perguntas sobre os preços finais. O catálogo começa com:

- vermelho — 2000 €;
- azul — 4500 €;
- rosa — 5000 €;
- branco — 7800 €.

### Enunciado completo

Cria uma página com um botão `Analisar catálogo` e quatro zonas de output: catálogo original, catálogo depois do aumento, carros com preço final até 6000 € e respostas booleanas.

Implementa quatro funções puras:

- `increasePrices(carList, percentage)` devolve um novo array com novos objectos e preços aumentados, arredondados com `Math.round()`;
- `selectAffordableCars(carList, maximumPrice)` devolve os carros cujo preço é menor ou igual ao limite;
- `hasCarBelow(carList, priceLimit)` responde se existe pelo menos um carro abaixo do limite;
- `areAllCarsBelow(carList, priceLimit)` responde se todos os carros estão abaixo do limite.

Usa os preços **depois do aumento** para filtrar e responder. Não alteres `cars` nem os objectos existentes.

### Resultado obrigatório

| Cor | Preço final |
| --- | ---: |
| vermelho | 2400 € |
| azul | 5400 € |
| rosa | 6000 € |
| branco | 9360 € |

Até 6000 € devem aparecer vermelho, azul e rosa. “Existe algum abaixo de 2500 €?” deve dar `true`. “Estão todos abaixo de 10000 €?” deve dar `true`.

### Hints graduais

1. Mesma quantidade de elementos transformados: `map()`.
2. `{ ...car, price: novoPreco }` cria um novo objecto.
3. Subconjunto: `filter()`.
4. Resposta “sim ou não”: “pelo menos um” usa `some`; “todos” usa `every`.

### Casos de teste obrigatórios

| Verificação | Resultado esperado |
| --- | --- |
| primeiro preço depois do aumento | `2400` |
| quantidade de carros até 6000 € | `3` |
| existe preço final abaixo de 2500 € | `true` |
| todos os preços finais abaixo de 10000 € | `true` |
| primeiro preço original depois da análise | continua `2000` |

### Erros comuns

- usar `forEach()` para alterar os objectos originais;
- aplicar o filtro aos preços antigos;
- usar `< 6000` e excluir o preço exactamente igual ao limite;
- usar `filter()` para responder a uma pergunta booleana;
- usar `shift()` como se seleccionasse por preço.

### Critérios de sucesso

- resultados e booleanos coincidem com as tabelas;
- o original é preservado;
- cada método responde ao tipo de pergunta adequado;
- o aluno explica por que `map()` e spread são ambos necessários.