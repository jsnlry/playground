$(document).ready(function() {
	var items = new Bloodhound({ 
// 	    local: [{ value: 'Test number one' }, { value: 'Another test' }, { value: 'This is what we want' }], 
//	    remote: {
//				url: 'remote-data.json', 
//				filter: function(resp) { $('#typhd').value('asdf'); }
//			},
//	    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.value); }, 
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
	    queryTokenizer: Bloodhound.tokenizers.whitespace,
			remote: 'remote-data.json'
	});
	
	items.initialize();
	$('#typhd').typeahead(null, { source: items.ttAdapter() });
	$('#typhd').attr('autocomplete', 'off');
});
