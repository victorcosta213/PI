
function executar(i){
    mudar(i);
    criarGrafico('grafico1', data1, options1);
    criarGrafico('grafico2', data2, options2);
}


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

// Dados e opções para o primeiro gráfico
var data1 = {
    labels: ['Passo 1', 'Passo 2', 'Passo 3', 'Passo 4'],
    datasets: [{
        label: 'Progresso',
        data: [25, 50, 75, 100], 
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
            max: 100
        }
    }
};

// Dados e opções para o segundo gráfico
var data2 = {
    labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D'],
    datasets: [{
        label: 'Valores',
        data: [10, 20, 30, 40], 
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

var options2 = {
    scales: {
        y: {
            beginAtZero: true,
            max: 50
        }
    }
};

// Criar os gráficos
criarGrafico('grafico1', data1, options1);
criarGrafico('grafico2', data2, options2);



