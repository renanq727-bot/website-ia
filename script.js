// Menu móvel
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Classificador de Sentimentos Simples
function classificarSentimento() {
    const texto = document.getElementById('textInput').value.toLowerCase();
    const resultado = document.getElementById('resultado');

    if (!texto) {
        resultado.textContent = 'Por favor, digite algo!';
        resultado.style.backgroundColor = '#ff6b6b';
        return;
    }

    // Palavras positivas e negativas
    const palavrasPositivas = ['bom', 'ótimo', 'excelente', 'maravilhoso', 'feliz', 'alegre', 'amor', 'incrível', 'fantástico', 'adorei', 'amei', 'perfeito', 'legal'];
    const palavrasNegativas = ['ruim', 'péssimo', 'terrível', 'horrível', 'triste', 'odeio', 'pior', 'chato', 'decepcionante', 'frustrado', 'bravo', 'angry'];

    let pontuacaoPositiva = 0;
    let pontuacaoNegativa = 0;

    palavrasPositivas.forEach(palavra => {
        if (texto.includes(palavra)) pontuacaoPositiva++;
    });

    palavrasNegativas.forEach(palavra => {
        if (texto.includes(palavra)) pontuacaoNegativa++;
    });

    let sentimento = '';
    let cor = '';
    let emoji = '';

    if (pontuacaoPositiva > pontuacaoNegativa) {
        sentimento = '😊 POSITIVO';
        cor = '#00b894';
        emoji = '✅ Sentimento Positivo Detectado!';
    } else if (pontuacaoNegativa > pontuacaoPositiva) {
        sentimento = '😞 NEGATIVO';
        cor = '#ff6b6b';
        emoji = '❌ Sentimento Negativo Detectado!';
    } else if (pontuacaoPositiva === 0 && pontuacaoNegativa === 0) {
        sentimento = '😐 NEUTRO';
        cor = '#74b9ff';
        emoji = '➖ Sentimento Neutro Detectado!';
    } else {
        sentimento = '🤔 MISTO';
        cor = '#fdcb6e';
        emoji = '⚖️ Sentimentos Mistos Detectados!';
    }

    resultado.innerHTML = `<div>${emoji}<br><strong>${sentimento}</strong></div>`;
    resultado.style.backgroundColor = cor;
}

// Sequência de Fibonacci
function calcularFibonacci() {
    const numero = parseInt(document.getElementById('numberInput').value);
    const resultadoDiv = document.getElementById('resultadoNumero');

    if (!numero || numero < 1 || numero > 20) {
        resultadoDiv.textContent = 'Por favor, digite um número entre 1 e 20!';
        resultadoDiv.style.backgroundColor = '#ff6b6b';
        return;
    }

    const fibonacci = [0, 1];
    
    for (let i = 2; i < numero; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    const sequencia = fibonacci.slice(0, numero).join(', ');
    resultadoDiv.innerHTML = `<strong>Sequência de Fibonacci (${numero} números):</strong><br>${sequencia}`;
    resultadoDiv.style.backgroundColor = '#00b894';
}

// Inscrição na Newsletter
function inscreverNewsletter(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value;
    const mensagem = document.getElementById('mensagemNewsletter');

    if (validarEmail(email)) {
        mensagem.textContent = '✅ Inscrição realizada com sucesso! Você receberá atualizações em breve.';
        mensagem.classList.add('sucesso');
        event.target.reset();
    } else {
        mensagem.textContent = '❌ Email inválido. Tente novamente!';
        mensagem.classList.add('erro');
    }

    // Remover mensagem após 5 segundos
    setTimeout(() => {
        mensagem.textContent = '';
        mensagem.classList.remove('sucesso', 'erro');
    }, 5000);
}

// Validar Email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Efeito de scroll suave já está no CSS (scroll-behavior: smooth)

// Animação de números ao chegar na seção de estatísticas
function animarNumeros() {
    const stats = document.querySelectorAll('.stat-item h3');
    let animacaoJaExecutada = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animacaoJaExecutada) {
                animacaoJaExecutada = true;
                stats.forEach((stat, index) => {
                    const texto = stat.textContent;
                    const numero = parseInt(texto.replace(/\D/g, ''));
                    
                    if (!isNaN(numero)) {
                        let contador = 0;
                        const incremento = Math.ceil(numero / 50);
                        
                        const intervalo = setInterval(() => {
                            contador += incremento;
                            if (contador >= numero) {
                                stat.textContent = texto;
                            } else {
                                stat.textContent = contador + (texto.replace(/[0-9]/g, ''));
                            }
                        }, 20);
                    }
                });
            }
        });
    });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Inicializar animação de números
window.addEventListener('load', animarNumeros);

// Event listeners para input
document.getElementById('textInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        classificarSentimento();
    }
});

document.getElementById('numberInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        calcularFibonacci();
    }
});

// Adicionar scroll reveal para cards
const revealCards = () => {
    const cards = document.querySelectorAll('.sobre-card, .app-card, .tech-card, .demo-box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });
};

window.addEventListener('load', revealCards);

// Efeito parallax simples
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// Log de carregamento
console.log('🤖 Site sobre IA carregado com sucesso!');
console.log('✨ Bem-vindo ao IA Hub!');