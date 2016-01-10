function respondable() {
	$('.respondable').each( function(index, tableID) {
    $(tableID).find( "thead tr th" ).each( function(index) {
      index += 1;
      $(tableID).find( "tbody tr td:nth-child(" + index + ")" ).attr( "data-title", $(this).text() );
      $(tableID).find( "tbody tr td:nth-child(" + index + ")" ).prepend('<span aria-hidden="true">'+$(this).text()+'</span>');
    });
	});
}