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
                    data: [176012,104633,50423],
                    backgroundColor: ['#F20505', '#F2E41B', '#3F8C68'],
                    borderWidth: 1
                }]
            };

            dadosGraf = {
                labels: ['Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste', 'Norte'],
                datasets: [{
                    label: 'total x região',
                    data: [110356,118900,50982,21026,34147],
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
                    data: [181579,137537,375583],
                    borderWidth: 1
                }]
            };

            dadosGraf = {
                labels: ['Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste', 'Norte'],
                datasets: [{
                    label: 'total x região',
                    data: [110356,118900,50982,21026,34147],
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
                    data: [56348,26576,19517],
                    borderWidth: 1
                }]
            };

            dadosGraf = {
                labels: ['Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste', 'Norte'],
                datasets: [{
                    label: 'total x região',
                    data: [110356,118900,50982,21026,34147],
                    borderWidth: 1
                }]
            };
            break;
        case 'sul':
            dadosMyChart = {
                labels: ['Infraestrutura', 'Ensino', 'Tecnologia'],
                datasets: [{
                    label: 'Pontuação',
                    data: [77519,59741,15686],
                    backgroundColor: ['#123456', '#F2E41B', '#3F8C68'],
                    borderWidth: 1
                }]
            };

            dadosGraf = {
                labels: ['Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste', 'Norte'],
                datasets: [{
                    label: 'total x região',
                    data: [110356,118900,50982,21026,34147],
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
                    data: [31145,24227,7706],
                    borderWidth: 1
                }]
            };

            dadosGraf = {
                labels: ['Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste', 'Norte'],
                datasets: [{
                    label: 'total x região',
                    data: [110356,118900,50982,21026,34147],
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
            labels: ['Agua','Esgoto','Energia'],
            datasets: [{
                label: 'Infraestrutura',
                backgroundColor: nordesteColor,
                borderColor: '#F20505',
                borderWidth: 1,
                data: [57669,57941,60402],
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
            labels: ['tv','laboratorio','internet'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: nordesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [41822,12032,50779],
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
            labels: ['fundamental','fundamental_medio','medio'],
            datasets: [{
                label: 'Ensino',
                backgroundColor: nordesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [43212,3162,4049],
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
            labels: ['qt_turmas_fund','qt_turmas_medio'],
            datasets: [{
                label: 'Media de turmas',
                backgroundColor: nordesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [7.61,9.42],
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
            labels: ['qt_prof_fund','qt_prof_medio'],
            datasets: [{
                label: 'media de prof por ensino',
                backgroundColor: nordesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [9.9,8],
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
            labels: ['Agua','Esgoto','Energia'],
            datasets: [{
                label: 'infraestrutura',
                backgroundColor: sudesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [60311,60527,60741],
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
            labels: ['tv','laboratorio','internet'],
            datasets: [{
                label: 'Tecnologia',
                backgroundColor: sudesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [54636,24452,58449],
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
            labels: ['fundamental','fundamental_medio','medio'],
            datasets: [{
                label: 'Ensino',
                backgroundColor: sudesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [25063,10112,2411],
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
            labels: ['qt_turmas_fund','qt_turmas_medio'],
            datasets: [{
                label: 'Media de turmas',
                backgroundColor: sudesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [12.32,8.63],
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
            labels: ['qt_prof_fund','qt_prof_medio'],
            datasets: [{
                label: 'media de prof por ensino',
                backgroundColor: sudesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [19.54,21],
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
            labels: ['Agua','Esgoto','Energia'],
            datasets: [{
                label: 'Infraestrutura',
                backgroundColor: sulColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [25540,25957,26022],
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
            labels: ['tv','laboratorio','internet'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: sulColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [23373,10795,25573],
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
            labels: ['fundamental','fundamental_medio','medio'],
            datasets: [{
                label: 'Ensino',
                backgroundColor: sulColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [11068,3869,749],
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
            labels: ['qt_turmas_fund','qt_turmas_medio'],
            datasets: [{
                label: 'Media de turmas',
                backgroundColor: sulColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [11.26,8.68],
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
            labels: ['qt_prof_fund','qt_prof_medio'],
            datasets: [{
                label: 'media de prof por ensino',
                backgroundColor: sulColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [ 17.43,20],
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
            labels: ['Agua','Esgoto','Energia'],
            datasets: [{
                label: 'Infraestrutura',
                backgroundColor: norteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [57669,57941,60402],
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
            labels: ['tv','laboratorio','internet'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: norteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [10149,4014,12413],
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
            labels: ['fundamental','fundamental_medio','medio'],
            datasets: [{
                label: 'Ensino',
                backgroundColor: norteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [16912,1761,844],
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
            labels: ['qt_turmas_fund','qt_turmas_medio'],
            datasets: [{
                label: 'Media de turmas',
                backgroundColor: norteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [ 7.17,11],
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
            labels: ['qt_prof_fund','qt_prof_medio'],
            datasets: [{
                label: 'media de prof por ensino',
                backgroundColor: norteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [8.68,12],
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
            labels: ['Agua','Esgoto','Energia'],
            datasets: [{
                label: 'Infraestrutura',
                backgroundColor: centro_oesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [10352,10347,10446],
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
            labels: ['tv','laboratorio','internet'],
            datasets: [{
                label: 'tecnologia',
                backgroundColor: centro_oesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [9396,4568,10263],
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
            labels: ['fundamental','fundamental_medio','medio'],
            datasets: [{
                label: 'Ensino',
                backgroundColor: centro_oesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [5250,2060,396],
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
            labels: ['qt_turmas_fund','qt_turmas_medio'],
            datasets: [{
                label: 'Media de turmas',
                backgroundColor: centro_oesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [12.42,8.89],
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
            labels: ['qt_prof_fund','qt_prof_medio'],
            datasets: [{
                label: 'media de prof por ensino',
                backgroundColor: centro_oesteColor,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [16.7,17],
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





