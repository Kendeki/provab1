glob = 0;

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formN');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var nome = document.getElementById('nome').value;
            var matricula = document.getElementById('matricula').value;
            var nota1 = parseFloat(document.getElementById('nota1').value);
            var nota2 = parseFloat(document.getElementById('nota2').value);
            
            if (nome && matricula && !isNaN(nota1) && !isNaN(nota2)) {
                var media = (nota1 + nota2) / 2;
                
                var situacao;
                if (media > 5)
                    situacao = "Aprovado";
                else
                    situacao = "Reprovado";
                
                var info = ["Nome", "Matrícula", "Nota 1", "Nota 2", "Média", "Situação"];
                var valores = [nome, matricula, nota1, nota2, media.toFixed(2), situacao];

                if (glob == 0){
                    var tabela = document.getElementById("tabela");

                    var table = document.createElement("TABLE");
                    table.setAttribute("id", "table")
                    table.border = '1';

                    var tbody = document.createElement("TBODY");
                    table.appendChild(tbody);

                    var tr = document.createElement("TR");
                    tbody.appendChild(tr);

                    for (var i = 0; i < 6; i++){
                        var th = document.createElement("TH");
                        th.width = '75';
                        th.appendChild(document.createTextNode(info[i]));
                        tr.appendChild(th);
                    }

                    tr = document.createElement("TR");
                    tbody.appendChild(tr);

                    for (var j = 0; j < 6; j++){
                        var td = document.createElement("TD");
                        td.width = '75';
                        td.appendChild(document.createTextNode(valores[j]));
                        tr.appendChild(td);
                    }

                    tabela.appendChild(table);
                    glob++;
                }
                else{
                    var tbody = document.getElementById("table").getElementsByTagName("tbody")[0];

                    var tr = document.createElement("TR");

                    for (var j = 0; j < 6; j++){
                        var td = document.createElement("TD");
                        td.width = '75';
                        td.appendChild(document.createTextNode(valores[j]));
                        tr.appendChild(td);
                    }

                    tbody.appendChild(tr);
                }
            } else {
                alert("não é permitido campos vazios.");
            }
        });
    }
});
