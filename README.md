# 🤖 IA Hub - Site Completo sobre Inteligência Artificial

Bem-vindo ao **IA Hub**, um site totalmente funcional e responsivo dedicado à Inteligência Artificial! Este projeto apresenta informações abrangentes, demonstrações interativas e um design moderno.

## 🌐 Acessar o Site

**URL do Site (GitHub Pages):** [https://renanq727-bot.github.io/website-ia/](https://renanq727-bot.github.io/website-ia/)

**Repositório:** [https://github.com/renanq727-bot/website-ia](https://github.com/renanq727-bot/website-ia)

## ✨ Principais Características

### 📱 Design Responsivo
- Layout fluido que se adapta perfeitamente a dispositivos móveis, tablets e desktops
- Menu hamburger automático em telas pequenas
- Otimizado para todas as resoluções

### 🎨 Interface Moderna
- Gradientes coloridos e animações suaves
- Paleta de cores profissional (roxo e verde)
- Efeitos visuais atrativos e transições fluidas
- Dark mode para algumas seções

### 🧠 Seções Educacionais
1. **Sobre IA** - Conceitos fundamentais (ML, Deep Learning, NLP, Visão Computacional)
2. **Aplicações** - Casos de uso em 6 principais indústrias
3. **Tecnologias** - Frameworks e ferramentas populares (TensorFlow, PyTorch, etc)
4. **Timeline** - História da IA de 1950 até 2024
5. **Estatísticas** - Dados sobre o mercado e adoção de IA

### 🎮 Funcionalidades Interativas
- **Classificador de Sentimentos** - Análise simples de texto
- **Preditor de Fibonacci** - Sequência matemática
- **Animações ao scroll** - Números que contam sozinhos
- **Newsletter** - Inscrição por email

## 📁 Estrutura do Projeto

```
website-ia/
├── index.html      # Arquivo HTML principal
├── styles.css      # Estilos e design responsivo
├── script.js       # Funcionalidades JavaScript
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### Opção 1: GitHub Pages (Recomendado)
O site já está disponível em GitHub Pages. Basta acessar:
- https://renanq727-bot.github.io/website-ia/

### Opção 2: Localmente
1. Clone o repositório:
```bash
git clone https://github.com/renanq727-bot/website-ia.git
cd website-ia
```

2. Abra o arquivo `index.html` no seu navegador:
```bash
# No Windows
start index.html

# No Mac
open index.html

# No Linux
xdg-open index.html
```

3. Ou use um servidor local (Python 3):
```bash
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

## 🎯 Seções do Site

### 1. **Navegação** (Navbar)
- Menu fixo no topo com links para todas as seções
- Logo do IA Hub
- Menu responsivo em mobile

### 2. **Hero Section**
- Apresentação impactante com animações
- Botão para explorar o site
- Background com efeito parallax

### 3. **Sobre IA**
- 4 cards informativos sobre conceitos fundamentais
- Ícones representativos
- Efeito hover com elevação

### 4. **Aplicações da IA**
- 6 campos de aplicação (Saúde, Automotiva, Negócios, etc)
- Cards com gradient colorido
- Efeito glassmorphism

### 5. **Tecnologias**
- Framework e bibliotecas principais
- Python, TensorFlow, PyTorch, Keras
- Cards com animação ao hover

### 6. **Seção Interativa**
- Classificador de sentimentos com IA
- Preditor de sequência de Fibonacci
- Validação de entrada
- Feedback visual instantâneo

### 7. **Estatísticas**
- 4 métricas importantes sobre IA
- Animação de contagem ao chegar na seção
- Design dark minimalista

### 8. **Timeline Histórica**
- 6 marcos importantes na história da IA
- Layout em zigzag
- Responsivo em mobile

### 9. **Newsletter**
- Inscrição por email
- Validação de email
- Feedback de sucesso/erro

### 10. **Rodapé**
- Links úteis
- Social media
- Copyright

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos, animações e responsividade
- **JavaScript (Vanilla)** - Funcionalidades interativas
- **GitHub Pages** - Hosting gratuito

## 🎨 Paleta de Cores

```
Primary Color:    #6c5ce7 (Roxo)
Secondary Color:  #00b894 (Verde)
Dark Background:  #1a1a2e
Light Background: #f5f5f5
Text Dark:        #2d3436
Text Light:       #ffffff
```

## 📝 Funcionalidades JavaScript

### 1. **Menu Responsivo**
- Toggle de menu em mobile
- Fecha ao clicar em um link

### 2. **Classificador de Sentimentos**
```javascript
- Detecta palavras positivas e negativas
- Classifica em: Positivo, Negativo, Neutro ou Misto
- Mudança de cor conforme sentimento
```

### 3. **Gerador de Fibonacci**
```javascript
- Calcula sequência até o número inserido
- Validação de entrada (1-20)
- Exibição clara da sequência
```

### 4. **Validação de Email**
```javascript
- Regex para validar formato de email
- Mensagem de sucesso/erro
- Auto-limpeza do formulário
```

### 5. **Animações**
- Scroll suave automático
- Parallax no hero
- Reveal de cards ao scroll
- Animação de números

## 🔧 Customização

### Alterar Cores
Abra `styles.css` e modifique as variáveis CSS:
```css
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #00b894;
    /* ... outras cores */
}
```

### Adicionar Mais Seções
1. Adicione o HTML em `index.html`
2. Estilize em `styles.css`
3. Adicione funcionalidades em `script.js`

### Modificar Conteúdo
Todos os textos e conteúdos são fáceis de editar diretamente no `index.html`

## 📱 Breakpoints Responsivos

```css
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px
- Extra pequeno: < 480px
```

## ⚡ Performance

- Otimizado para carregamento rápido
- CSS minificado e eficiente
- JavaScript vanilla (sem dependências)
- Imagens otimizadas (apenas emojis)
- Lazy loading em cards

## 🐛 Troubleshooting

### Site não aparece no GitHub Pages?
1. Vá para Settings → Pages
2. Certifique-se que "main" está selecionado como fonte
3. Aguarde 5 minutos para o build completar
4. Limpe cache do navegador (Ctrl+Shift+Delete)

### Menu não funciona?
- Verifique se o arquivo `script.js` está carregando
- Abra o console (F12) para ver erros

### Estilos não aparecem?
- Verifique se `styles.css` está no mesmo diretório
- Limpe o cache (Ctrl+F5)

## 📈 Futuros Melhoramentos

- [ ] Adicionar mais modelos interativos de IA
- [ ] Integração com APIs de IA reais
- [ ] Blog com artigos sobre IA
- [ ] Sistema de comentários
- [ ] Suporte a mais idiomas
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA)
- [ ] Analytics

## 📞 Contato

Para dúvidas ou sugestões, abra uma issue no repositório:
- [Issues](https://github.com/renanq727-bot/website-ia/issues)

## 📄 Licença

Este projeto é de código aberto e disponível sob a licença MIT.

## 🙏 Agradecimentos

Desenvolvido com ❤️ para entusiastas de IA e Machine Learning.

---

**Desenvolvido por:** renanq727-bot  
**Data:** 2024  
**Versão:** 1.0.0

Aproveite o site! 🚀
