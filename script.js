let myChart = null;
let grafChart = null;

var nordesteColor = "#FE0000";
var sudesteColor = "#F2E41B";
var sulColor= "#8A8CBF";
var norteColor = "#3F8C68";
var centro_oesteColor= "#F2784B";



let dadosFiltro =[
    [7.5,5.2,8.0,20,30],
    [6.0,6.0,8.0,20,30],
    [7.0,5.0,7.0,20,30],
    [6.0,5.0,7.0,20,30],
    [6.0,4.0,5.0,20,30],
];

document.getElementById('ID_DO_BOTAO_1').addEventListener('click', function() {
    document.getElementById('reg').value = 'nordeste';
    testando();
    receber();
});

document.getElementById('ID_DO_BOTAO_2').addEventListener('click', function() {
    // Adicione a lógica desejada para o segundo botão
});

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

var myChart1 = null;

function delet(){
    if(myChart1){
        myChart1.destroy();
    }
}

function gerarGraficoFiltro(i) {
    receber(); 
   
    if (i === 1 && local.value === "nordeste") {
    delet();
        

        var data = {
            labels: ['nordeste'],
            datasets: [{
                label: 'Infraestrutura',
                backgroundColor: nordesteColor,
                borderColor: '#F20505',
                borderWidth: 1,
                data: [dadosFiltro[0][0]],
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
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    } else if(i === 2 && local.value === "nordeste"){
        delet()
        var data = {
            labels: ['nordeste'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: nordesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[0][2]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 3 && local.value === "nordeste"){
        delet();
        var data = {
            labels: ['nordeste'],
            datasets: [{
                label: 'Ensino',
                backgroundColor: nordesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[0][1]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 4 && local.value === "nordeste"){
        delet();
        var data = {
            labels: ['nordeste'],
            datasets: [{
                label: 'Alunos',
                backgroundColor: nordesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[0][3]],
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
     
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 5 && local.value === "nordeste"){
        delet()
        var data = {
            labels: ['nordeste'],
            datasets: [{
                label: 'professores',
                backgroundColor: nordesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[0][4]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if (i === 1 && local.value === "sudeste") {
        delet()
        var data = {
            labels: ['sudeste'],
            datasets: [{
                label: 'infraestrutura',
                backgroundColor: sudesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[1][0]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    } else if(i === 2 && local.value === "sudeste"){
        delet()
        var data = {
            labels: ['sudeste'],
            datasets: [{
                label: 'Tecnologia',
                backgroundColor: sudesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[1][2]],
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
       
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 3 && local.value === "sudeste"){
        delet();
        var data = {
            labels: ['sudeste'],
            datasets: [{
                label: 'Ensino',
                backgroundColor: sudesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[1][1]],
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
       
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 4 && local.value === "sudeste"){
        delet()
        var data = {
            labels: ['sudeste'],
            datasets: [{
                label: 'Aluno',
                backgroundColor: sudesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[1][3]],
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
    
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 5 && local.value === "sudeste"){
        delet();
        var data = {
            labels: ['sudeste'],
            datasets: [{
                label: 'professores',
                backgroundColor: sudesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[1][4]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if (i === 1 && local.value === "sul") {
        delet();
        var data = {
            labels: ['sul'],
            datasets: [{
                label: 'Infraestrutura',
                backgroundColor: sulColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[2][0]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    } else if(i === 2 && local.value === "sul"){
        delet();
        var data = {
            labels: ['sul'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: sulColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[2][2]],
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
     
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 3 && local.value === "sul"){
        delet;
        var data = {
            labels: ['sul'],
            datasets: [{
                label: 'Ensino',
                backgroundColor: sulColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[2][1]],
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
     
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 4 && local.value === "sul"){
        delet();
        var data = {
            labels: ['sul'],
            datasets: [{
                label: 'Alunos',
                backgroundColor: sulColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[2][3]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 5 && local.value === "sul"){
        delet();
        var data = {
            labels: ['sul'],
            datasets: [{
                label: 'professores',
                backgroundColor: sulColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[2][4]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if (i === 1 && local.value === "norte") {
        delet();
        var data = {
            labels: ['norte'],
            datasets: [{
                label: 'Infraestrutura',
                backgroundColor: norteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[4][0]],
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
       
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    } else if(i === 2 && local.value === "norte"){
        delet();
        var data = {
            labels: ['norte'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: norteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[4][2]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 3 && local.value === "norte"){
        delet();
        var data = {
            labels: ['norte'],
            datasets: [{
                label: 'Ensino',
                backgroundColor: norteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[4][1]],
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
     
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 4 && local.value === "norte"){
        delet();
        var data = {
            labels: ['norte'],
            datasets: [{
                label: 'Alunos',
                backgroundColor: norteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[4][3]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 5 && local.value === "norte"){
        delet();
        var data = {
            labels: ['norte'],
            datasets: [{
                label: 'Professores',
                backgroundColor: norteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[4][4]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if (i === 1 && local.value === "centro-oeste") {
        delet();
        var data = {
            labels: ['centro-oeste'],
            datasets: [{
                label: 'Infraestrutura',
                backgroundColor: centro_oesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[3][0]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    } else if(i === 2 && local.value === "centro-oeste"){
        delet();
        var data = {
            labels: ['centro-oeste'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: centro_oesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[3][2]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 3 && local.value === "centro-oeste"){
        delet();
        var data = {
            labels: ['centro-oeste'],
            datasets: [{
                label: 'Ensino',
                backgroundColor: centro_oesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[3][1]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 4 && local.value === "centro-oeste"){
        delet();
        var data = {
            labels: ['centro-oeste'],
            datasets: [{
                label: 'Alunos',
                backgroundColor: centro_oesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[3][3]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }else if(i === 5 && local.value === "centro-oeste"){
        delet();
        var data = {
            labels: ['centro-oeste'],
            datasets: [{
                label: 'Professores',
                backgroundColor: centro_oesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [dadosFiltro[3][4]],
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
      
        if (myChart1) {
            myChart1.destroy();
        }

        myChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });


}
}




