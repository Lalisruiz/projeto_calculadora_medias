# Calculadora de Médias

**EBAC Projeto 02 - Integrando HTML com JavaScript - Módulo de Front-End**

Uma aplicação web moderna e responsiva para calcular médias de atividades acadêmicas, desenvolvida como atividade prática do curso da **EBAC (Escola Britânica de Artes Criativas e Tecnologia)**.

## Deploy da Aplicação

**Acesse a aplicação:** https://lari-projeto-calculadora-medias.vercel.app/

## Sobre o Projeto

Este projeto faz parte do **Projeto 02** do módulo de Front-End da EBAC, focando na integração entre HTML e JavaScript. A calculadora permite que estudantes insiram suas atividades e notas para acompanhar seu desempenho acadêmico de forma visual e intuitiva.

## Funcionalidades

- **Adicionar atividades** com nome e nota
- **Validação automática** de notas (0-10)
- **Cálculo da média final** em tempo real
- **Soma total das notas**
- **Contador de atividades**
- **Status visual** (Aprovado/Reprovado) com ícones SVG
- **Validação de duplicatas** - impede inserção de atividades repetidas
- **Interface responsiva** para desktop e mobile
- **Design moderno** com fonte Roboto

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript (ES6+)** - Lógica e interatividade
- **Google Fonts** - Tipografia (Roboto)
- **SVG Icons** - Ícones personalizados

## Estrutura do Projeto

```
calculadora_medias/
├── index.html          # Página principal
├── main.css           # Estilos da aplicação
├── main.js            # Lógica JavaScript
├── images/            # Ícones SVG
│   ├── graduation-cap.svg
│   ├── check-success.svg
│   ├── close-error.svg
│   ├── warning-recuperacao.svg
│   └── plus-add.svg
└── README.md          # Documentação
```

## Design Features

- **Fonte Roboto** do Google Fonts
- **Ícones SVG** personalizados para cada status
- **Campo de nota destacado** com design diferenciado
- **Tabela responsiva** com efeitos hover
- **Cores intuitivas** (verde para aprovado, vermelho para reprovado)
- **Layout limpo e moderno**

## Como Executar

1. **Clone ou baixe** o projeto
2. **Abra o terminal** na pasta do projeto
3. **Execute um servidor local**:
   ```bash
   python -m http.server 8000
   ```
4. **Acesse** no navegador: `http://localhost:8000`

## Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (até 767px)

## Contexto Educacional

**EBAC - Projeto 02: Integrando HTML com JavaScript**  
**Módulo:** Front-End  
**Objetivo:** Desenvolver uma aplicação web integrando HTML, CSS e JavaScript

Este projeto demonstra a aplicação prática dos seguintes conceitos do módulo:

### Conceitos Aplicados:
- **Manipulação do DOM** - Seleção e modificação de elementos
- **Event Handlers** - Captura e tratamento de eventos
- **Validação de formulários** - Verificação de dados de entrada
- **Arrays e loops** - Estruturas de dados e iteração
- **Funções ES6** - Sintaxe moderna do JavaScript
- **CSS responsivo** - Design adaptável
- **Integração HTML/CSS/JS** - Comunicação entre as tecnologias

### Competências Desenvolvidas:
- Estruturação semântica com HTML5
- Estilização avançada com CSS3
- Programação funcional em JavaScript
- Debugging e resolução de problemas
- Boas práticas de desenvolvimento

## Funcionalidades Técnicas

### Validações Implementadas:
- Notas entre 0 e 10
- Campos obrigatórios
- Prevenção de atividades duplicadas
- Tratamento de erros

### Cálculos Automáticos:
- Média aritmética das notas
- Soma total das notas
- Status final (Aprovado ≥ 7.0)

## Critérios de Aprovação

- **Nota mínima**: 7.0
- **Status**: Aprovado (≥7.0) | Reprovado (<7.0)
- **Indicação visual**: Ícones coloridos para cada status

##  Desenvolvedora
Desenvolvido por Larissa Ruiz
