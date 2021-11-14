$(document).ready(function () {
    setInterval(() => {
        let fecha_eli = new Date(2021, 9, 14, 23, 20);
        let fecha = new Date();

        let hora=0, dia=0, sem=0, mes=0, years=0, min=0, seg=0;

        diff = fecha - fecha_eli;
        let a = 1000*60*60*24*7*4.345238095238095*12;

        years = (diff-(diff%a))/a

        mes = ((diff%a)/a)*12
        dia = (mes-Math.trunc(mes))*30.416666666666664
        hora = (dia-Math.trunc(dia))*24
        min = (hora-Math.trunc(hora))*60
        seg = (min-Math.trunc(min))*60

        seg = Math.trunc(seg)
        min = Math.trunc(min)
        hora = Math.trunc(hora)
        dia = Math.trunc(dia)
        mes = Math.trunc(mes)

        let fecha_res = years+" años, "+mes+" meses, "+dia+" dias <br> "+hora+" horas, "+min+" min, "+seg+" seg"

        $("#fecha").html(fecha_res);
    }, 1000);
});

//Un centisegundo equivale a 10 milisegundos
//Un decisegundo equivale a 100 milisegundos
//Un segundo equivale a 1000 milisegundos
//Un minuto equivale a 60 000 milisegundos
//Una hora equivale a 3 600 000 milisegundos
//Un día equivale a 86 400 000 milisegundos
//Una semana equivale a 604 800 000 milisegundos
//Un mes equivale a 2 628 000 000 milisegundos
//Un año equivale a 31 536 000 000 milisegundos
//Un lustro equivale a 157 680 000 000 milisegundos
//Una década equivale a 315 360 000 000 milisegundos
//Un siglo equivale a 3 153 600 000 000 milisegundos
//Un milenio equivale a 31 536 000 000 000 milisegundos
// 1000*60*60*24*7*4.345238095238095*12