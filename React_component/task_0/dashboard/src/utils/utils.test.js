import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils.js test functions', function() {
	describe('getFullYear test', function() {
		it('Returns the actual year', () => {
			expect(getFullYear()).toBe(new Date().getFullYear());
		});
	});
	describe('getFooterCopy test', function() {
		it('Returns the correct sentence if argument is true', () => {
			expect(getFooterCopy(true)).toBe('Holberton School');
		});
		it('Returns the correct sentence if argument is false', () => {
			expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
		});
	});
	describe('getLatestNotification test', function() {
		it('Returns the correct sentence', () => {
			expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
		});
	});
});