// returns the state of *all* features for current user
function fetchAllFeatures () {
	// in reality, this would have been a `fetch` call:
	// `fetch("/api/features/all")`
	return new Promise( ( resolve ) => {
		const features = {
			featureFoo: true,
			featureBar: false,
			extendedSummary: false,
			feedbackDialog: true
		};

		setTimeout( resolve, 100, features );
	} );
}

// src/feature-x/summary.js
getFeatureState( 'extendedSummary' ).then( function ( isEnabled ) {
	if ( isEnabled ) {
		showExtendedSummary();
	} else {
		showBriefSummary();
	}
} );

// src/feature-y/feedback-dialog.js
getFeatureState( 'feedbackDialog' ).then( function ( isEnabled ) {
	if ( isEnabled ) {
		makeFeedbackButtonVisible();
	}
} );


/**
 * Solution
 */

function getFeatureState ( featureName ) {
	return fetchAllFeatures().then( featuresResult => {
		return new Promise( ( resolve, reject ) => {
			resolve( featuresResult[ featureName ] );
		} );
	} );
}

function showExtendedSummary () {
	console.log( 'show extended summary' );
}
function showBriefSummary () {
	console.log( 'show brief summary' );
}
function makeFeedbackButtonVisible () {
	console.log( 'make feedback button visible' );
}