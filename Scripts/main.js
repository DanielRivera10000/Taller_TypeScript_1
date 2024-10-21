"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
console.log(data_js_1.series); // Verifica que los datos se estén importando
var seriesTable = document.getElementById("seriesTableBody");
function mostrarSeries() {
    var tbodySeries = document.createElement("tbody");
    data_js_1.series.forEach(function (serie) {
        tbodySeries.innerHTML += "\n        <tr>\n            <td>".concat(serie.id, "</td>\n            <td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        </tr>");
    });
    seriesTable.appendChild(tbodySeries);
}
mostrarSeries();
