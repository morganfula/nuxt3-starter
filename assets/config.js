'use strict';

const apiEndpoint = 'r7alwpengine.ch'; // change api.moustachedesign.xyz to your wordpress url

export default {
	appTitleShort: 'Rencontres du 7e art',
	appTitle: 'Rencontres du 7e art',
	appTitleShort: 'R7AL',
	appDescription: 'r7al REST API',
	appThemeColor: 'BB133E',
	appBgColor: '#00172c ',
	appIcon: 'assets/icon.png',
	// these are the rest api endpoints and your wordpress url
	client: `https://${apiEndpoint}`,
	wpDomain: `https://${apiEndpoint}/wp-json`,
	url: 'https://rencontres7art.ch/', // your website url
	loadDbName: '[starter_wp]', // db name if needed

	api: {
		homePage: '/wp/v2/pages/5919',
		edition2021: '/wp/v2/pages/5930',
		about: '/wp/v2/pages/5949',
		gallery: '/wp/v2/pages/5955',
		pro: '/wp/v2/pages/5957',
		past: '/wp/v2/pages/5959',
		navbar: '/wp/v2/pages/5963',
		footer: '/wp/v2/pages/6006',
		program: '/wp/v2/program/',
		pages: '/wp/v2/pages?per_page=100',
		events: '/wp/v2/program?per_page=100',
		volonteers: '/wp/v2/pages/7829',
		moreEvents: '/wp/v2/program?per_page=100&page=2',
		media: '/wl/v1/posts?page=1&per_page=100&_embed=1',
		team22: '/wp/v2/pages/7844',
		partners22: '/wp/v2/pages/7856',
		videos2021: '/wp/v2/pages/7910',
		videos2022: '/wp/v2/pages/7886',
		team21: '/wp/v2/pages/7121',
		moviesMirror2022: '/wp/v2/pages/7923',
		guestFilms2022: '/wp/v2/pages/7934',
		marilyTribute2022: '/wp/v2/pages/7937',
		thinkRestored2022: '/wp/v2/pages/7940',
		honorGuest2022: '/wp/v2/pages/7943',
		guests2022: '/wp/v2/pages/7946',
		tributeToMarilyn: '/wp/v2/pages/7949',
		masterclass2022: '/wp/v2/pages/7952',
		rencontres2022: '/wp/v2/pages/7955',
		roundTables: '/wp/v2/pages/7958',
		specialEvents2022: '/wp/v2/pages/7961',
		conversations2022: '/wp/v2/pages/7964',
		conference2022: '/wp/v2/pages/8164',
		tickets22: '/wp/v2/pages/8170',
		mirror22: '/wp/v2/pages/8167',
		ceremony: '/wp/v2/pages/8320',
		joinUs: '/wp/v2/pages/8553',

		events22: '/wp/v2/events?page=1&per_page=100&_embed=1',

		postFormContact: '/contact-form-7/v1/contact-forms/6507/feedback',
		newsletter: '/contact-form-7/v1/contact-forms/6943/feedback', // change  with the contact form 7 id provided
	},
};
