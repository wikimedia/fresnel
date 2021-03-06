'use strict';
/**
 * Get data from the Navigation Timing API in the browser.
 *
 * @module probes/navtiming
 * @see {@link Probe}
 * @see <https://www.w3.org/TR/navigation-timing-2/>
 */

/* istanbul ignore next */
function browserCode() {
	/* eslint-env browser */
	const timing = performance.getEntriesByType( 'navigation' )[ 0 ];
	return timing.toJSON();
}

module.exports = {
	async after( page, writer, addData ) {
		const response = await page.evaluate( browserCode );
		addData( response );
	}
};
