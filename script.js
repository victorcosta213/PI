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


//AQUI//

var local;

function receber() {
    local = document.getElementById('reg');
}

function gerarGraficoFiltro(i) {
    receber(); 
   
    if (i === 1 && local.value === "nordeste") {
        var data = {
            labels: ['Infraestrutura'],
            datasets: [{
                label: 'nordeste',
                backgroundColor: '#F20505',
                borderColor: '#F20505',
                borderWidth: 1,
                data: [7.5],
            }]
        };

       
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    } else if(i === 2 && local.value === "nordeste"){
        var data = {
            labels: ['Ensino'],
            datasets: [{
                label: 'nordeste',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [5.2],
            }]
        };

     
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

       
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 3 && local.value === "nordeste"){
        var data = {
            labels: ['tecnologia'],
            datasets: [{
                label: 'nordeste',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [8],
            }]
        };

       
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 4 && local.value === "nordeste"){
        var data = {
            labels: ['Alunos'],
            datasets: [{
                label: 'nordeste',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [30],
            }]
        };

        
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

      
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 5 && local.value === "nordeste"){
        var data = {
            labels: ['professores'],
            datasets: [{
                label: 'nordeste',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [40],
            }]
        };

       
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

       
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if (i === 1 && local.value === "sudeste") {
        var data = {
            labels: ['sudeste'],
            datasets: [{
                label: 'infraestrutura',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [6],
            }]
        };

   
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

      
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    } else if(i === 2 && local.value === "sudeste"){
        var data = {
            labels: ['sudeste'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [8],
            }]
        };

       
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

    
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 3 && local.value === "sudeste"){
        var data = {
            labels: ['sudeste'],
            datasets: [{
                label: 'ensino',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [6],
            }]
        };

      
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

       
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 4 && local.value === "sudeste"){
        var data = {
            labels: ['sudeste'],
            datasets: [{
                label: 'alunos',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [80],
            }]
        };

      
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

      
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 5 && local.value === "sudeste"){
        var data = {
            labels: ['sudeste'],
            datasets: [{
                label: 'professores',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [90],
            }]
        };

       
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

    
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if (i === 1 && local.value === "sul") {
        var data = {
            labels: ['sul'],
            datasets: [{
                label: 'infraestrutura',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [7],
            }]
        };

      
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

    
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    } else if(i === 2 && local.value === "sul"){
        var data = {
            labels: ['sul'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [7],
            }]
        };

       
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

       
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 3 && local.value === "sul"){
        var data = {
            labels: ['sul'],
            datasets: [{
                label: 'ensino',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [5],
            }]
        };

     
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

      
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 4 && local.value === "sul"){
        var data = {
            labels: ['sul'],
            datasets: [{
                label: 'alunos',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [80],
            }]
        };

       
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

    
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 5 && local.value === "sul"){
        var data = {
            labels: ['sul'],
            datasets: [{
                label: 'professores',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [90],
            }]
        };

 
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

      
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if (i === 1 && local.value === "norte") {
        var data = {
            labels: ['norte'],
            datasets: [{
                label: 'infraestrutura',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [6],
            }]
        };

   
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    } else if(i === 2 && local.value === "norte"){
        var data = {
            labels: ['norte'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [5],
            }]
        };

       
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

    
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 3 && local.value === "norte"){
        var data = {
            labels: ['norte'],
            datasets: [{
                label: 'ensino',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [5],
            }]
        };

       
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 4 && local.value === "norte"){
        var data = {
            labels: ['norte'],
            datasets: [{
                label: 'alunos',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [80],
            }]
        };

       
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

       
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 5 && local.value === "norte"){
        var data = {
            labels: ['norte'],
            datasets: [{
                label: 'professores',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [90],
            }]
        };

       
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

       
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if (i === 1 && local.value === "centro-oeste") {
        var data = {
            labels: ['centro-oeste'],
            datasets: [{
                label: 'infraestrutura',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [6],
            }]
        };

      
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

   
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    } else if(i === 2 && local.value === "centro-oeste"){
        var data = {
            labels: ['centro-oeste'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [5],
            }]
        };

   
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

   
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 3 && local.value === "centro-oeste"){
        var data = {
            labels: ['centro-oeste'],
            datasets: [{
                label: 'ensino',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [5],
            }]
        };

  
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

   
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 4 && local.value === "centro-oeste"){
        var data = {
            labels: ['centro-oeste'],
            datasets: [{
                label: 'alunos',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [80],
            }]
        };

    
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

     
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 5 && local.value === "centro-oeste"){
        var data = {
            labels: ['centro-oeste'],
            datasets: [{
                label: 'professores',
                backgroundColor: 'rgba(60, 100, 12, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [90],
            }]
        };

   
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

   
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }


}

