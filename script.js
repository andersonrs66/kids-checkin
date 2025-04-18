document.addEventListener("DOMContentLoaded", function () {
    const cardList = document.getElementById("card-list");

    // Dados embutidos diretamente
    const checkins = [
        {
            "id": 1,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Carlos",
            "responsavel": "Ana",
            "telefone": "12345-6789",
            "classeIcone": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4bWlVKkzXP6LoZLrSFnvH-4sAlTI7uQDMQ&s",
            "classeNome": "Peixinhos"
        },
        {
            "id": 2,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Mariana",
            "responsavel": "João",
            "telefone": "98765-4321",
            "classeIcone": "https://images.icon-icons.com/565/PNG/512/stars-bright_icon-icons.com_54249.png",
            "classeNome": "Luminares"
        },
        {
            "id": 3,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Carlos",
            "responsavel": "Ana",
            "telefone": "12345-6789",
            "classeIcone": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4bWlVKkzXP6LoZLrSFnvH-4sAlTI7uQDMQ&s",
            "classeNome": "Peixinhos"
        },
        {
            "id": 4,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Mariana",
            "responsavel": "João",
            "telefone": "98765-4321",
            "classeIcone": "https://images.icon-icons.com/565/PNG/512/stars-bright_icon-icons.com_54249.png",
            "classeNome": "Luminares"
        },
        {
            "id": 5,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Carlos",
            "responsavel": "Ana",
            "telefone": "12345-6789",
            "classeIcone": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4bWlVKkzXP6LoZLrSFnvH-4sAlTI7uQDMQ&s",
            "classeNome": "Peixinhos"
        },
        {
            "id": 6,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Mariana",
            "responsavel": "João",
            "telefone": "98765-4321",
            "classeIcone": "https://images.icon-icons.com/565/PNG/512/stars-bright_icon-icons.com_54249.png",
            "classeNome": "Luminares"
        },
        {
            "id": 7,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Carlos",
            "responsavel": "Ana",
            "telefone": "12345-6789",
            "classeIcone": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4bWlVKkzXP6LoZLrSFnvH-4sAlTI7uQDMQ&s",
            "classeNome": "Peixinhos"
        },
        {
            "id": 8,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Mariana",
            "responsavel": "João",
            "telefone": "98765-4321",
            "classeIcone": "https://images.icon-icons.com/565/PNG/512/stars-bright_icon-icons.com_54249.png",
            "classeNome": "Luminares"
        },
        {
            "id": 9,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Carlos",
            "responsavel": "Ana",
            "telefone": "12345-6789",
            "classeIcone": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4bWlVKkzXP6LoZLrSFnvH-4sAlTI7uQDMQ&s",
            "classeNome": "Peixinhos"
        },
        {
            "id": 10,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Mariana",
            "responsavel": "João",
            "telefone": "98765-4321",
            "classeIcone": "https://images.icon-icons.com/565/PNG/512/stars-bright_icon-icons.com_54249.png",
            "classeNome": "Luminares"
        },
        {
            "id": 11,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Carlos",
            "responsavel": "Ana",
            "telefone": "12345-6789",
            "classeIcone": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4bWlVKkzXP6LoZLrSFnvH-4sAlTI7uQDMQ&s",
            "classeNome": "Peixinhos"
        },
        {
            "id": 12,
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqaPZ6HpmxExPx5g_Rxgp8o0vPAdSCZcxMQ&s",
            "nomeCrianca": "Mariana",
            "telefone": "98765-4321",
            "classeIcone": "https://images.icon-icons.com/565/PNG/512/stars-bright_icon-icons.com_54249.png",
            "classeNome": "Luminares"
        }
    ];

    checkins.forEach(checkin => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", checkin.id); // Define um ID único no atributo data-id

        card.innerHTML = `
            <img src="${checkin.foto}" class="foto" alt="Foto">
            <div class="info">
                <h3>${checkin.nomeCrianca}</h3>
                <p>Responsável: ${checkin.responsavel}</p>
                <p>Telefone: ${checkin.telefone}</p>
            </div>
            <div class="classe">
                <img src="${checkin.classeIcone}" alt="Ícone Classe">
                <span>${checkin.classeNome}</span>
            </div>
        `;

        // Adiciona um evento de clique ao card
        card.addEventListener("click", function() {
            const cardId = this.getAttribute("data-id"); // Pega o ID do card clicado
            cardCallback(cardId);
        });

        cardList.appendChild(card);
    });

    function cardCallback(id) {
        console.log("Card clicado! ID:", id);
        alert(`Card de ID ${id} foi clicado!`);
    }

    // Adicionando suporte ao swipe com Hammer.js
    const hammer = new Hammer(cardList);
    const cardContainer = document.querySelector(".card-container");
    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    hammer.on("panmove", function (event) {
        const sensitivity = 0.05; // Ajuste de sensibilidade (menor valor = rolagem mais suave)
        cardContainer.scrollLeft -= event.deltaX * sensitivity; // Scroll horizontal
        cardContainer.scrollTop -= event.deltaY * sensitivity; // Scroll vertical
    });

});
