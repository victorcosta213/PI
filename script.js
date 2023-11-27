let myChart = null;
let grafChart = null;

function gerarGrafico(regiao) {
    const ctxMyChart = document.getElementById('myChart');
    const ctxGraf = document.getElementById('graf');

    if (myChart) {
        myChart.destroy();
    }
    if (grafChart) {
        grafChart.destroy();
    }

    let dadosMyChart;
    let dadosGraf;

    // Modifique esta parte para adicionar dados para cada região
    switch (regiao.toLowerCase()) {
        case 'nordeste':
            dadosMyChart = {
                labels: ['Infraestrutura', 'Ensino', 'Tecnologia'],
                datasets: [{
                    label: 'pont (Nordeste)',
                    data: [7.5, 5.2, 8.0],
                    backgroundColor: ['#F20505', '#F2E41B', '#3F8C68'],
                    borderWidth: 1
                }]
            };

            dadosGraf = {
                labels: ['Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste', 'Norte'],
                datasets: [{
                    label: 'total x região',
                    data: [6.5,5.0,5.7,5.4,5.2],
                    backgroundColor: ['#F20505', '#F2E41B', '#3F8C68'],
                    borderWidth: 1
                }]
            };
            break;
        case 'sudeste':
            dadosMyChart = {
                labels: ['Infraestrutura', 'Ensino', 'Tecnologia'],
                datasets: [{
                    label: 'Pontuação',
                    data: [6.0, 6.0, 8.0],
                    borderWidth: 1
                }]
            };

            dadosGraf = {
                labels: ['Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste', 'Norte'],
                datasets: [{
                    label: 'total x região',
                    data: [6.5,5.0,5.7,5.4,5.2],
                    backgroundColor: ['yellow', 'green', 'pink'],
                    borderWidth: 1
                }]
            };
            break;
        case 'norte':
            dadosMyChart = {
                labels: ['Infraestrutura', 'Ensino', 'Tecnologia'],
                datasets: [{
                    label: 'Pontuação',
                    data: [6.0,4.0,5.0],
                    borderWidth: 1
                }]
            };

            dadosGraf = {
                labels: ['Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste', 'Norte'],
                datasets: [{
                    label: 'total x região',
                    data: [6.5,5.0,5.7,5.4,5.2],
                    borderWidth: 1
                }]
            };
            break;
        case 'sul':
            dadosMyChart = {
                labels: ['Infraestrutura', 'Ensino', 'Tecnologia'],
                datasets: [{
                    label: 'Pontuação',
                    data: [7.0, 5.0, 7.0],
                    backgroundColor: ['#123456', '#F2E41B', '#3F8C68'],
                    borderWidth: 1
                }]
            };

            dadosGraf = {
                labels: ['Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste', 'Norte'],
                datasets: [{
                    label: 'total x região',
                    data: [6.5,5.0,5.7,5.4,5.2],
                    backgroundColor: ['#654321', '#F2E41B', '#3F8C68'],
                    borderWidth: 1
                }]
            };
            break;
        case 'centro-oeste':
            dadosMyChart = {
                labels: ['Infraestrutura', 'Ensino', 'Tecnologia'],
                datasets: [{
                    label: 'Pontuação',
                    data: [6.0, 5.0, 7.0],
                    borderWidth: 1
                }]
            };

            dadosGraf = {
                labels: ['Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste', 'Norte'],
                datasets: [{
                    label: 'total x região',
                    data: [6.5,5.0,5.7,5.4,5.2],
                    backgroundColor: ['#987654', '#F2E41B', '#3F8C68'],
                    borderWidth: 1
                }]
            };
            break;
        default:
            dadosMyChart = null;
            dadosGraf = null;
    }

    if (dadosMyChart) {
        myChart = new Chart(ctxMyChart, {
            type: 'bar',
            data: dadosMyChart,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        ctxMyChart.innerText = "Sem informações";
    }

    if (dadosGraf) {
        grafChart = new Chart(ctxGraf, {
            type: 'bar',
            data: dadosGraf,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        ctxGraf.innerText = "Sem informações";
    }
}

function testando() {
    let reg = document.getElementById('reg').value;
    gerarGrafico(reg);
}