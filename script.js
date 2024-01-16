document.addEventListener('DOMContentLoaded', function() {
    function addDivs(num, gridSize) {
        const squares = document.querySelector('.squares');
        squares.innerHTML = '';

        for (let i = 0; i < num; i++) {
            const newDiv = document.createElement('div');
            newDiv.setAttribute("class", "grids");
            squares.appendChild(newDiv);

            newDiv.addEventListener('mouseenter', (event) => {
                event.target.style.backgroundColor = 'red';
            });
        }
        const grids = document.querySelectorAll('.grids');
        grids.forEach(grid => {
            grid.style.height = gridSize;
            grid.style.width = gridSize;
        });
    }

    const small = document.querySelector('#small');
    const medium = document.querySelector('#medium');
    const large = document.querySelector('#large');

    small.addEventListener('click', () => {
        addDivs(64, '42px');
    });
    medium.addEventListener('click', () => {
        addDivs(144, '27.3333333px');
    });
    large.addEventListener('click', () => {
        addDivs(256);
    });
});