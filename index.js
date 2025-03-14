// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

const body = document.querySelector('body');
const script = document.querySelector('script');

const switchOn = document.createElement('div');
body.insertBefore(switchOn, script);
switchOn.style.width = '30px';
switchOn.style.height = '30px';
switchOn.style.borderRadius = '15px';
switchOn.style.background = 'red';
switchOn.style.cursor = 'pointer';
switchOn.style.margin = '100px auto';

switchOn.addEventListener('click', function() {
    let table = document.querySelector('table');

    if (!table) {
        table = document.createElement('table');
        table.style.display = 'block';
        table.style.margin = '100px auto';
        table.style.borderCollapse = 'collapse';
        body.insertBefore(table, script);

        for (let i = 1; i <= 10; i++) {
            const row = document.createElement('tr');
            table.appendChild(row);
            // let sum = 1;
            for (let j = 1; j <= 10; j++) {
                const cell = document.createElement('td');
                row.appendChild(cell);
                cell.innerHTML = `${i * j}`;
                cell.style.border = 'black solid 1px';
                cell.style.padding = '5px';
                cell.style.width = '25px';
                cell.style.height = '25px';
                cell.style.textAlign = 'center';
            }
        }
    }
    else {
            table.style.display = table.style.display === 'none' ? 'block' : 'none';
        }
})