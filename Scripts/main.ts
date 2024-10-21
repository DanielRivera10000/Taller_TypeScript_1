import { series } from './data.ts';

console.log(series);
let seriesTable: HTMLElement = document.getElementById("seriesTableBody")!;

function mostrarSeries(): void {
    let tbodySeries = document.createElement("tbody");

    series.forEach(serie => {
        tbodySeries.innerHTML += `
        <tr>
            <td>${serie.id}</td>
            <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        </tr>`;
    });

    seriesTable.appendChild(tbodySeries);
}

mostrarSeries();






