const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => {
    button.addEventListener('click', () => {
        toggleButton(button);
        const id = parseInt(button.id.replace('btn', ''), 10);

        toggleAdjacentButtons(id);
    });
});

function toggleButton(button) {
    button.classList.toggle('pink');
}

function toggleAdjacentButtons(id) {
    const adjacentIds = getAdjacentIds(id);
    adjacentIds.forEach(adjId => {
        const adjacentButton = document.getElementById(`btn${adjId}`);
        if (adjacentButton) {
            toggleButton(adjacentButton);
        }
    });
    toggleButton(document.getElementById(`btn${id}`));
}

function getAdjacentIds(id) {
    const adjacentMapping = {
        1: [1, 2, 4, 5],
        2: [2, 1, 3, 4, 5, 6],
        3: [3, 2, 5, 6],
        4: [4, 1, 2, 5, 7, 8],
        5: [1, 2, 3, 4, 6, 7, 8, 9],
        6: [6, 2, 3, 5, 8, 9],
        7: [7, 4, 5, 8],
        8: [8, 4, 5, 6, 7, 9],
        9: [9, 5, 6, 8]
    };
    return adjacentMapping[id] || [];
}

