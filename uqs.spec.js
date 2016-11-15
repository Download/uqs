var expect = require('chai').expect
var uqs = require('./uqs')

describe('uqs', function(){

	it('is an object', function(){
		expect(uqs).to.be.an('object')
	})

	it('has a method `parse`', function(){
		expect(uqs.parse).to.be.a('function')
	})

	it('has a method `stringify`', function(){
		expect(uqs.parse).to.be.a('function')
	})

	describe('parse', function(){

		it('parses a querystring into an object', function(){
			var test = 'they=did&forget=something' 
			var expected = {they:'did',forget:'something'}
			var actual = uqs.parse(test)
			expect(actual).to.deep.equal(expected)
		})

		it('accepts an optional starting question mark', function(){
			var test = '?they=did&forget=something' 
			var expected = {they:'did',forget:'something'}
			var actual = uqs.parse(test)
			expect(actual).to.deep.equal(expected)
		})

		it('decodes percent-encoded values', function(){
			var test = '?they=did&forget=something%20important' 
			var expected = {they:'did',forget:'something important'}
			var actual = uqs.parse(test)
			expect(actual).to.deep.equal(expected)
		})

		it('decodes percent-encoded keys', function(){
			var test = '?they=did&forget%20something=important' 
			var expected = {they:'did','forget something': 'important'}
			var actual = uqs.parse(test)
			expect(actual).to.deep.equal(expected)
		})

		it('handles array parameters', function(){
			var test = '?they=did&they=forget&they=something' 
			var expected = {they:['did','forget','something']}
			var actual = uqs.parse(test)
			expect(actual).to.deep.equal(expected)
		})
	})


	describe('stringify', function(){

		it('stringifies an object into a querystring', function(){
			var test = {they:'did',forget:'something'}
			var actual = uqs.stringify(test)
			// order is not enforced but we are ok with that
			expect(actual).to.contain('they=did')
			expect(actual).to.contain('forget=something')
			expect(actual).to.contain('&')
		})

		it('percent-encodes url-unsafe values', function(){
			var test = {they:'did',forget:'something important'}
			var expected = 'forget=something%20important'
			var actual = uqs.stringify(test)
			expect(actual).to.contain(expected)
		})

		it('percent-encodes unsafe keys', function(){
			var test = {they:'did','forget something': 'important'}
			var expected = 'forget%20something=important' 
			var actual = uqs.stringify(test)
			expect(actual).to.contain(expected)
		})

		it('handles array parameters', function(){
			var test = {they:['did','forget','something']}
			var expected = 'they=did&they=forget&they=something' 
			var actual = uqs.stringify(test)
			expect(actual).to.deep.equal(expected)
		})
	})
})

