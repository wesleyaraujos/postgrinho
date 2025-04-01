sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'postgrinhouui/test/integration/FirstJourney',
		'postgrinhouui/test/integration/pages/livrosList',
		'postgrinhouui/test/integration/pages/livrosObjectPage'
    ],
    function(JourneyRunner, opaJourney, livrosList, livrosObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('postgrinhouui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThelivrosList: livrosList,
					onThelivrosObjectPage: livrosObjectPage
                }
            },
            opaJourney.run
        );
    }
);