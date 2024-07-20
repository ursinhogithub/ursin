document.addEventListener('DOMContentLoaded', (event) => {
    const totalPoints = document.getElementById('total-points');
    const storePopup = document.getElementById('store-popup');
    const closePopup = document.querySelector('.close');

    totalPoints.addEventListener('click', () => {
        storePopup.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        storePopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == storePopup) {
            storePopup.style.display = 'none';
        }
    });

    let clickCount = 0;
    let savedClickCount = 0;
    const clickCounter = document.getElementById('click-count');
    const saveClicksButton = document.getElementById('save-clicks');
    const totalPointsDisplay = document.getElementById('total-points');

    document.getElementById('click-object').addEventListener('click', () => {
        clickCount++;
        clickCounter.textContent = clickCount;
    });

    saveClicksButton.addEventListener('click', () => {
        savedClickCount += clickCount;
        clickCount = 0;
        clickCounter.textContent = clickCount;
        totalPointsDisplay.textContent = `Click: ${savedClickCount}`;
    });

    function openStore() {
        storePopup.style.display = 'block';
    }

    function closeStore() {
        storePopup.style.display = 'none';
    }

    window.buyWithPoints = function(pointsCost) {
        if (savedClickCount >= pointsCost) {
            savedClickCount -= pointsCost;
            totalPointsDisplay.textContent = `Cliques: ${savedClickCount}`;
            alert("Compra realizada com sucesso!");
        } else {
            alert("Pontos insuficientes para esta compra.");
        }
    }

    window.buyWithMoney = function() {
        // Aqui você pode adicionar a lógica para comprar com dinheiro real.
        // Pode ser uma integração com um sistema de pagamento.
        alert("Compra com dinheiro não está implementada ainda.");
    }
});
