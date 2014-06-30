$(document).ready(function () {

  var g_result = 0;
  var g_last_operator = "";
  var g_is_operator_last_pressed = false;

  $('.num-button').click(function(){
      var number = $(this).data('num');
      var old_number = $('#input_box').val();

      var new_number ="";
      if (old_number == "0" || g_is_operator_last_pressed) {
          new_number = number;
      }
      else{
          new_number = old_number + number;
      }

      $('#input_box').val(new_number);

      g_is_operator_last_pressed = false;
  });

  $('.clear-button').click(function (){
      $('#input_box').val("0");
      g_result = 0;
      g_last_operator = "";
      g_is_operator_last_pressed = false;
  });

  $('.operator-button').click(function(){
      var operator =$(this).data('operator');
      var number = parseFloat($('input_box')val());

      if (g_last_operator == ""){
          g_result = number;
          }
      else if (g_is_operator_last_pressed && g_last_operator == "equal"){
          g_result =number;
      }
      else {
          var result = 0;
          if (g_last_operator == "add"){
              result = g_result + number;
          }
          else if (g_last_operator == "subtract"){
              result = g_result - number;
          }
          g_result = result;
          $('#input_box').val(result);
      }

      g_last_operator = operator;
      g_is_operator_last_pressed = true;

    });

});