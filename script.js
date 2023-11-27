function mudar(i) {
    var elementos = document.getElementsByClassName("filtro");
    
    if(elementos[i].style.backgroundColor === "white"){
    elementos[i].style.backgroundColor = "#003857";
    elementos[i].style.color = 'white';
    }else{
        elementos[i].style.backgroundColor = "white";
        elementos[i].style.color = '#003857';  
    }
    
  }


function criarGrafico(idDaDiv, data, options) {
    var ctx = document.getElementById(idDaDiv).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

function gerarGraficos() {
    var data1 = {
        labels: ['Nordeste', 'Sudeste', 'Sul', 'Centro-oeste', 'Norte'],
        datasets: [{
            label: 'Total de pontos por Região',
            data: [6.5, 6.0, 5.7, 5.4, 5.2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    var options1 = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10
            }
        }
    };

    var data2 = {
        labels: ['Infraestrutura', 'Ensino', 'Tecnologia'],
        datasets: [{
            label: 'Valores',
            data: [10, 20, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    };

    var options2 = {
        scales: {
            y: {
                beginAtZero: true,
                max: 50
            }
        }
    };

    criarGrafico('grafico1', data1, options1);
    criarGrafico('grafico2', data2, options2);
}

// Chame a função para gerar os gráficos




let myChart = null; // Inicializa myChart como null

function gerarGrafico(regiao) {
    const ctx = document.getElementById('mychart');

    if (myChart) {
        myChart.destroy(); // Destrói o gráfico existente se houver um
    }

    // Defina os dados do gráfico com base na região
    let dados;
    switch (regiao.toLowerCase()) {
        case 'nordeste':
            dados = {
                labels: ['Nordeste'],
                datasets: [{
                    label: 'Pontuação',
                    data: [12],
                    borderWidth: 1
                }]
            };
            break;
        case 'sudeste':
            dados = {
                labels: ['Sudeste'],
                datasets: [{
                    label: 'Pontuação',
                    data: [18],
                    borderWidth: 1
                }]
            };
            break;
        case 'norte':
            dados = {
                labels: ['Norte'],
                datasets: [{
                    label: 'Pontuação',
                    data: [22],
                    borderWidth: 1
                }]
            };
            break;

        default:
            dados = null;
    }

    if (dados) {
        myChart = new Chart(ctx, {
            type: 'bar',
            data: dados,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        ctx.innerText = "Sem informações";
    }
}

function testando() {
    let reg = document.getElementById('reg');
    gerarGrafico(reg.value);
}