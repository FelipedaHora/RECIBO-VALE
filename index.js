function voltar(){
    window.location.href ="index.html";
}

function setDataToday(){
    const myDate = new Date().toLocaleDateString();

    console.log(myDate); // 29/07/2022 
    
    var dataConvertida = FormataStringData(myDate);
    dataInput.value = dataConvertida;
}

function getDados(){
    
    var nomeInputvalue = document.getElementById("nomeInput").value;
    var valorInput = document.getElementById("valorInput").value;
    var localInput = document.getElementById("cidadeInput").value;
    var dataInput = document.getElementById("dataInput").value;
    var numeroInput = document.getElementById("numeroInput").value;
    var dadosEmpresaInputValue = document.getElementById("dadosEmpresaInput").value;
    
    if(validarCampos()){
        document.getElementById("nomeImpresso").innerHTML = nomeInputvalue;
        document.getElementById("valorImpresso").innerHTML = valorInput.extenso();
        document.getElementById("numeroValorInput").innerHTML = `R$ ${valorInput}`;
        if(dataInput == ""){
            setDataToday();
            var dataInputAtualizado = document.getElementById("dataInput").value;
            document.getElementById("localDataImpresso").innerHTML = `${localInput}, ${dataInputAtualizado}`;
        }
        else{
            document.getElementById("localDataImpresso").innerHTML = `${localInput}, ${dataInput}`;
        }
        document.getElementById("dadosEmpresaImpresso").innerHTML = dadosEmpresaInputValue;
        document.getElementById("numeroAserImpresso").innerHTML = `N°${numeroInput}   `;
    }

}

String.prototype.extenso = function(c){
    var ex = [
        ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
        ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"],
        ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
        ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
    ];
    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
    for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
        j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
        if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
        for(a = -1, l = v.length; ++a < l; t = ""){
            if(!(i = v[a] * 1)) continue;
            i % 100 < 20 && (t += ex[0][i % 100]) ||
            i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
            s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
            ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
        }
        a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
        a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
    }
    return r.join(e);
}

function FormataStringData(data) {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
  
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

function validarCampos(){
    var valor = document.getElementById("valorInput");
    var nome = document.getElementById("nomeInput");
    var cidade = document.getElementById("cidadeInput");
    var retorno = true;
    if (valor.value <= 0) {
        valor.style.border = "1px solid red";
        valor.style.outline = "1px solid red";
        valor.focus();
        retorno = false;
    }
    else{
        valor.style.border = "1px solid #dfdddd";
        valor.style.outline = "1px solid #dfdddd";
    }
    
    if (nome.value <= 0) {
        nome.style.border = "1px solid red";
        nome.style.outline = "1px solid red";
        nome.focus();

        retorno = false;
    }
    else {
        nome.style.border = "1px solid #dfdddd";
        nome.style.outline = "1px solid #dfdddd";
    }

    if (cidade.value <= 0) {
        cidade.style.border = "1px solid red";
        cidade.style.outline = "1px solid red";
        cidade.focus();

        retorno = false;
    }
    else {
        cidade.style.border = "1px solid #dfdddd";
        cidade.style.outline = "1px solid #dfdddd";
    }


    return retorno;
}




