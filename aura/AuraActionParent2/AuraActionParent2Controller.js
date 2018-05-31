({
	handleComponentEvent : function(component, event, helper) {
        var buttonClicked = event.getSource().getLocalId();
        if (buttonClicked === 'clapbutton')
            alert('I am clapping!');
        else if (buttonClicked === 'jumpbutton')
            alert('I am jumping!');
        else 
            alert('I am dancing!');
	}
})