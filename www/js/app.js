$(document).ready( function() {
    $.ajax({
        type: 'GET',
        url: 'http://swapi.co/api/planets/',
        dataType: 'json',
        data: { get_param: 'value' },
        error: function (erro) {
            alert(erro.responseText);
        },
        success: function(data) {
            var divPlanet = document.querySelector("#contPlaneta");
            divPlanet.innerHTML = "";
            $.each(data.results, function(i, obj) {
                divPlanet.innerHTML += '<a href="javascript:DetalhePlaneta(\'' + obj.url + '\')" >' + obj.name + '</a> <br />';
            })
        }
    })
})

function DetalhePlaneta(Planeta) {
    $.ajax({
        type: 'GET',
        url: Planeta,
        dataType:'json',
        data: { get_param: 'value' },
        error: function(erro) {
            alert(erro.responseText);
        },
        success: function(data) {
            var divPlaneta = document.querySelector("#mostrarPlaneta");
            divPlaneta.innerHTML = "";
            divPlaneta.innerHTML += "Nome: " + data.name + "<br/>Rota&ccedil;&atilde;o:" + data.rotation_period + "<br/>Orbita: " + data.orbital_period + "<br/>Popula&ccedil;&atilde;o: " + data.population + "<br/>";
    }});
}