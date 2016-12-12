import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/app';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Countries', () => {
	describe('GET api/v1/countries', () => {

		it('responds with JSON array', () => {
			return chai.request(app).get('/api/v1/countries')
				.then(res => {
					expect(res.status).to.equal(200);
					expect(res).to.be.json;
					expect(res.body).to.be.an('array');
					expect(res.body).to.have.length(248);
				});
		});

		it('should include Spain', () => {
			return chai.request(app).get('/api/v1/countries')
				.then(res => {
					const Spain = res.body.find(country => country.cca2 === 'ES');
					expect(Spain).to.exist;
					expect(Spain).to.have.all.keys([
						'name',
						'tld',
						'cca2',
						'ccn3',
						'cca3',
						'cioc',
						'currency',
						'callingCode',
						'capital',
						'altSpellings',
						'region',
						'subregion',
						'languages',
						'translations',
						'latlng',
						'demonym',
						'landlocked',
						'borders',
						'area',
					]);
				});
		});

	});

	describe('GET api/v1/countries/:id', () => {

		it('responds with single JSON object', () => {
			return chai.request(app).get('/api/v1/countries/ES')
				.then(res => {
					expect(res.status).to.equal(200);
					expect(res).to.be.json;
					expect(res.body).to.be.an('object');
				});
		});

		it('should return Spain', () => {
			return chai.request(app).get('/api/v1/countries/ES')
				.then(res => {
					debugger
					expect(res.body.name.common).to.equal('Spain');
				});
		});

	});
});