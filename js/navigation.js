// add the select form drop down item
$('#menu').append(
  // '<select id="select-1"></select>'+
  // '<select id="select-2"></select>'+
  // '<select id="select-3"></select>'+
  '<select id="select-4"></select>'
);

// fill the drop down menu with the menu options
$('#menu a').each(function() {
  var $anchor = $(this);
  $('#menu select').append(
    '<option value='+$anchor.attr("href")+'>'+
    $anchor.text()+
    '</option>'
  );
  $('#menu option').addClass('select-option');
});

// navigate to correct location based on option selected
$('#menu select').on ('change',function() {
var $select = $(this);
var $option = $select.find('option:selected')
console.info(
  'Habeis delecionado la opción  ' +
$option.text() +
' del menu ' +
$select.attr('id') +
' y te lleva a ' +
$option.val()
);
  location.href = $(this).val();
});

// indicate which navigation item we are currently looking at
$('#menu a').click(function() {
  var $anchor = $(this);
  console.info(
    'Habeis dado click sobre la opción' +
    $anchor.text()
  );
  $('#menu li').removeClass("selected");
  $(this).parent().addClass("selected");
});
