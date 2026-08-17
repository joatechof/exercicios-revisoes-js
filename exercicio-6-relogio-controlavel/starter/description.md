## Exercício 6 — Relógio controlável

### Objectivo de aprendizagem

Gerir o ciclo de vida de um timer: criar, guardar o identificador, impedir duplicados e cancelar.

### Contexto

Uma página precisa de mostrar a hora local e permitir iniciar e parar as actualizações. Clicar repetidamente em “Iniciar” não pode criar intervalos concorrentes.

### Enunciado completo

Cria uma página com um relógio inicialmente em `00:00:00`, botões `Iniciar` e `Parar` e um texto de estado.

No JavaScript:

1. declara `let clockIntervalId = null`;
2. cria `formatTimePart(value)` para garantir dois algarismos;
3. cria `updateClock()` para obter a hora local e escrever `HH:MM:SS`;
4. cria `startClock()`;
5. cria `stopClock()`;
6. associa os botões com `addEventListener()`.

`startClock()` deve detectar se já existe um intervalo, impedir a duplicação, actualizar o relógio imediatamente, criar um intervalo de 1000 ms, guardar o identificador e actualizar a mensagem.

`stopClock()` deve detectar se o relógio já está parado, cancelar o intervalo activo, repor `clockIntervalId` em `null` e actualizar a mensagem.

### Hints graduais

1. O valor devolvido por `setInterval()` é a “senha” para cancelar esse intervalo.
2. `null` representa “não existe intervalo activo”.
3. Testa o estado antes de criar ou cancelar.
4. Chama `updateClock()` antes de `setInterval()` para não esperar um segundo.

### Casos de teste obrigatórios

| Acção | Resultado esperado |
| --- | --- |
| abrir a página | `00:00:00` e “Relógio parado.” |
| clicar `Iniciar` | hora aparece imediatamente e muda a cada segundo |
| clicar `Iniciar` novamente | não nasce outro intervalo; aparece mensagem explicativa |
| clicar `Parar` | hora deixa de mudar e o estado indica paragem |
| clicar `Parar` novamente | não ocorre erro; informa que já estava parado |
| iniciar depois de parar | volta a funcionar com um intervalo único |

### Erros comuns

- não guardar o identificador de `setInterval()`;
- guardar o ID numa variável local e perdê-lo;
- criar um intervalo em cada clique;
- esperar um segundo pelo primeiro valor;
- cancelar, mas não repor o estado em `null`.

### Critérios de sucesso

- existe no máximo um intervalo activo;
- o relógio inicia, pára e reinicia;
- horas, minutos e segundos têm dois algarismos;
- as mensagens tornam o estado observável;
- o aluno explica por que o ID e `null` são necessários.