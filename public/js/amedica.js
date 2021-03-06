//Carga alertas con el documento
$(document).ready(function(){
    imc();
    temperatura();
    frec_cardiaca();
    presion_arterial();
});

//Calcula el índice de masa corporal
$(document).ready(function(){
  $('#val_peso').focusout(function(){
    imc();
  });
});

//Muestra alertas de signos vitales en consultas médicas
$(document).ready(function(){
  //Temperatura
  $('#val_temperatura').focusout(function(){
    temperatura();
  });

  //Frecuencia Cardiaca
  $('#val_fc').focusout(function(){
    frec_cardiaca();
  });

  //Presión Arterial
  $('#val_pa').focusout(function(){
    presion_arterial();
  });
});

function imc(){
  var talla = $('#val_talla').val();
  var peso = $('#val_peso').val();
  var imc = peso/Math.pow(talla, 2);
  imc = imc.toFixed(1);
  $('#imc').html(imc);
}

function temperatura(){
  var temp = $('#val_temperatura').val();
  var edad = $('#edad').text();
  var hipotermia = '<div class="alert alert-primary d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Hipotermia </div> </div>';
  var fiebre = '<div class="alert alert-danger d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Fiebre </div> </div>';
  var normal = '<div class="alert alert-success" role="alert">Normal</div>';
  
  if (temp != '') {
    if(edad <= 2){
      if(temp < 36.1){
        $('#alerta_temperatura').html(hipotermia);
      }else if(temp > 37.7){
        $('#alerta_temperatura').html(fiebre);
      }else{
        $('#alerta_temperatura').html(normal);
      }
    }else if(edad > 2 && edad <= 8){
      if(temp < 37){
        $('#alerta_temperatura').html(hipotermia);
      }else if(temp > 37){
        $('#alerta_temperatura').html(fiebre);
      }else{
        $('#alerta_temperatura').html(normal);
      }
    }else if(edad > 8 && edad <= 15){
      if(temp < 36.5){
        $('#alerta_temperatura').html(hipotermia);
      }else if(temp > 37){
        $('#alerta_temperatura').html(fiebre);
      }else{
        $('#alerta_temperatura').html(normal);
      }
    }else if(edad > 15 && edad <= 60){
      if(temp < 36.4){
        $('#alerta_temperatura').html(hipotermia);
      }else if(temp > 37.2){
        $('#alerta_temperatura').html(fiebre);
      }else{
        $('#alerta_temperatura').html(normal);
      }
    }else if(edad > 60){
      if(temp < 35){
        $('#alerta_temperatura').html(hipotermia);
      }else if(temp > 36){
        $('#alerta_temperatura').html(fiebre);
      }else{
        $('#alerta_temperatura').html(normal);
      }
    }
  }
}

function frec_cardiaca(){
  var fc = $('#val_fc').val();
  var edad = $('#edad').text();
  var bradicardia = '<div class="alert alert-primary d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Bradicardia </div> </div>';
  var taquicardia = '<div class="alert alert-danger d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Taquicardia </div> </div>';
  var normal = '<div class="alert alert-success" role="alert">Normal</div>';

  if (fc != "") {
    if(edad == 0){
      if(fc < 140){
        $('#alerta_fc').html(bradicardia);
      }else if(fc >= 160){
        $('#alerta_fc').html(taquicardia);
      }else{
        $('#alerta_fc').html(normal);
      }
    }else if(edad > 0 && edad <= 1){
      if(fc < 115){
        $('#alerta_fc').html(bradicardia);
      }else if(fc >= 130){
        $('#alerta_fc').html(taquicardia);
      }else{
        $('#alerta_fc').html(normal);
      }
    }else if(edad > 1 && edad <= 12){
      if(fc < 100){
        $('#alerta_fc').html(bradicardia);
      }else if(fc >= 115){
        $('#alerta_fc').html(taquicardia);
      }else{
        $('#alerta_fc').html(normal);
      }
    }else if(edad > 12 && edad <= 60){
      if(fc < 70){
        $('#alerta_fc').html(bradicardia);
      }else if(fc > 80){
        $('#alerta_fc').html(taquicardia);
      }else{
        $('#alerta_fc').html(normal);
      }
    }else if(edad > 60){
      if(fc < 60){
        $('#alerta_fc').html(hipotermia);
      }else if(fc > 70){
        $('#alerta_fc').html(fiebre);
      }else{
        $('#alerta_fc').html(normal);
      }
    }   
  }
}

function presion_arterial(){
  var pa = $('#val_pa').val().split('/');
  var sis = pa[0];
  var dia = pa[1];
  
  var optima = '<div class="alert alert-success" role="alert">Optima</div>';
  var normal = '<div class="alert alert-success" role="alert">Normal</div>';
  var normal_alta = '<div class="alert alert-success" role="alert">Normal alta</div>';
  var ht_g1 = '<div class="alert alert-danger d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Hipertensión grado I </div> </div>';
  var ht_g2 = '<div class="alert alert-danger d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Hipertensión grado II </div> </div>';
  var ht_g3 = '<div class="alert alert-danger d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Hipertensión grado III </div> </div>';
  var ht_sistolica_aislada = '<div class="alert alert-danger d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Hipertensión sistólica aislada </div> </div>';

  if (sis <= 120 && dia <= 80) {
    $('#alerta_pa').html(optima);
  }else if(sis > 120 && sis <= 129 && dia > 80 && dia <= 84){
    $('#alerta_pa').html(normal);
  }else if(sis > 129 && sis <= 139 && dia > 84 && dia <= 89){
    $('#alerta_pa').html(normal_alta);
  }else if(sis > 139 && sis <= 159 && dia > 89 && dia <= 99){
    $('#alerta_pa').html(ht_g1);
  }else if(sis > 159 && sis <= 179 && dia > 99 && dia <= 109){
    $('#alerta_pa').html(ht_g2);
  }else if(sis > 179 && dia > 110){
    $('#alerta_pa').html(ht_g3);
  }else if(sis > 140 && dia < 90){
    $('#alerta_pa').html(normal);
  }
}

function frec_respiratoria(){
  var fr = $('#val_fr').val();
    var edad = $('#edad').text();
    var bradipnea = '<div class="alert alert-primary d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Bradipnea </div> </div>';
    var taquipnea_hipernea = '<div class="alert alert-danger d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Taquipnea ó Hipernea </div> </div>';
    var apnea = '<div class="alert alert-danger d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Apnea </div> </div>';
    var disnea = '<div class="alert alert-danger d-flex align-items-center" role="alert">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> <div> Disnea </div> </div>';
    var normal = '<div class="alert alert-success" role="alert">Normal</div>';

    if (fr == 0) {
      $('#alerta_fr').html(apnea);
    }

    if(edad > 25){
      if(fr < 12){
        $('#alerta_fr').html(bradipnea);
      }else if(fc >= 20){
        $('#alerta_fr').html(taquipnea_hipernea);
      }
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()