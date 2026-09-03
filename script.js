// 1. Geração automática de fundo estrelado cintilante
const starfield = document.getElementById('starfield');
const numberOfStars = 150;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('bg-star');

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2.5 + 0.5;
    const duration = Math.random() * 2 + 1;
    const delay = Math.random() * 2;

    star.style.left = `${x}vw`;
    star.style.top = `${y}vh`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    starfield.appendChild(star);
}

// 2. Banco de dados com informações e ícones separados e corretos para cada astro
const planetData = {
    sun: {
        icon: "☀️",
        title: "O Sol",
        distance: "0 km (Centro)",
        mass: "333.000 massas terrestres",
        desc: "Estrela tipo G da sequência principal, o Sol contém 99,8% de toda a massa do Sistema Solar e gera energia através de fusão nuclear."
    },
    mercury: {
        icon: "🪨",
        title: "Mercúrio",
        distance: "57,9 milhões de km",
        mass: "3,30 × 10²³ kg",
        desc: "O menor planeta do Sistema Solar e o mais próximo do Sol. Sua superfície sofre variações extremas de temperatura."
    },
    venus: {
        icon: "🟠",
        title: "Vênus",
        distance: "108,2 milhões de km",
        mass: "4,87 × 10²⁴ kg",
        desc: "O planeta mais quente do sistema devido a um efeito estufa descontrolado causado por sua atmosfera espessa de dióxido de carbono."
    },
    earth: {
        icon: "🌍",
        title: "Terra",
        distance: "149,6 milhões de km",
        mass: "5,97 × 10²⁴ kg",
        desc: "Nosso planeta natal, o único conhecido por abrigar vida, com 71% de sua superfície coberta por água líquida."
    },
    mars: {
        icon: "🔴",
        title: "Marte",
        distance: "227,9 milhões de km",
        mass: "6,42 × 10²³ kg",
        desc: "Conhecido como o Planeta Vermelho devido ao óxido de ferro em sua superfície. Possui o maior vulcão do sistema solar, o Monte Olimpo."
    },
    jupiter: {
        icon: "🪐",
        title: "Júpiter",
        distance: "778,5 milhões de km",
        mass: "1,90 × 10²⁷ kg",
        desc: "O maior planeta do Sistema Solar, um gigante gasoso famoso por sua Grande Mancha Vermelha e dezenas de luas."
    },
    saturn: {
        icon: "🪐",
        title: "Saturno",
        distance: "1,43 bilhão de km",
        mass: "5,68 × 10²⁶ kg",
        desc: "Famoso por seu espetacular e complexo sistema de anéis formados predominantemente por partículas de gelo e rocha."
    },
    uranus: {
        icon: "🔵",
        title: "Urano",
        distance: "2,87 bilhões de km",
        mass: "8,68 × 10²⁵ kg",
        desc: "Um gigante de gelo que possui uma inclinação axial única, fazendo com que praticamente 'gire de lado' em sua órbita."
    },
    neptune: {
        icon: "🔷",
        title: "Netuno",
        distance: "4,50 bilhões de km",
        mass: "1,02 × 10²⁶ kg",
        desc: "O planeta mais distante do Sol na lista tradicional, conhecido por seus ventos supersônicos extremamente violentos e coloração azul viva."
    }
};

// 3. Controle do Modal e Cliques em todos os Astros
const modal = document.getElementById('planet-modal');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalDistance = document.getElementById('modal-distance');
const modalMass = document.getElementById('modal-mass');
const modalDesc = document.getElementById('modal-desc');
const closeModalBtn = document.getElementById('close-modal');
const astros = document.querySelectorAll('.sun, .planet');

astros.forEach(astro => {
    astro.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = astro.getAttribute('data-planet');
        const data = planetData[key];

        if (data) {
            modalIcon.innerText = data.icon;
            modalTitle.innerText = data.title;
            modalDistance.innerText = data.distance;
            modalMass.innerText = data.mass;
            modalDesc.innerText = data.desc;
            modal.classList.add('active');
        }
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (!modal.contains(e.target) && !e.target.classList.contains('planet') && !e.target.classList.contains('sun')) {
        modal.classList.remove('active');
    }
});

// 4. Lógica do Botão de Pausar Órbitas
const pauseBtn = document.getElementById('pause-btn');
const solarSystem = document.querySelector('.solar-system');
let isPaused = false;

pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    solarSystem.classList.toggle('paused', isPaused);
    pauseBtn.innerText = isPaused ? "Retomar Órbitas ▶️" : "Pausar Órbitas ⏸️";
});

// 5. Lógica do Buraco Negro Gargantua (Sucção real para o canto superior direito)
const gargantua = document.getElementById('gargantua');

gargantua.addEventListener('click', () => {
    solarSystem.classList.add('sucked');
    starfield.style.opacity = '0';
    document.body.style.background = '#000000';
    
    pauseBtn.style.opacity = '0';
    pauseBtn.style.pointerEvents = 'none';
    
    modal.classList.remove('active');
});
