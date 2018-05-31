({
	fireMyEvent : function(component, event, helper) {
		var compEvent = component.getEvent("myEventInstance");
        compEvent.fire();
	}
})