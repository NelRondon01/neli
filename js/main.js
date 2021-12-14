$(document).ready(function () {
    setInterval(() => {
        let fecha_eli = new Date(2021, 9, 14);
        let fecha = new Date();

        let vals = [0, 0, 0, 0, 0, 0, 0]

        diff = fecha - fecha_eli;
        let a = 1000*60*60*24*7*4.345238095238095*12;
        
        vals[0] = (diff-(diff%a))/a
        vals[1] = ((diff%a)/a)*12
        vals[2] = (vals[1]-Math.trunc(vals[1]))*30.416666666666664
        vals[3] = (vals[2]-Math.trunc(vals[2]))*24
        vals[4] = (vals[3]-Math.trunc(vals[3]))*60
        vals[5] = (vals[4]-Math.trunc(vals[4]))*60

        vals[5] = Math.trunc(vals[5])
        vals[4] = Math.trunc(vals[4])
        vals[3] = Math.trunc(vals[3])
        vals[2] = Math.trunc(vals[2])
        vals[1] = Math.trunc(vals[1])

        for(i=0;i<vals.length;i++){
            if(vals[i] < 10){
                vals[i] = "0"+vals[i]
            }
        }

        $("#year .vl").text(vals[0])
        $("#mes .vl").text(vals[1])
        $("#dia .vl").text(vals[2])
        $("#hora .vl").text(vals[3])
        $("#min .vl").text(vals[4])
        $("#seg .vl").text(vals[5])
    }, 500);

    anime({
        targets: ".fecha, h1",
        scale: [1.2, 1],
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 2000,
        delay: 1000
    })
});
