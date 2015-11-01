import test from 'ava';
import fn from './';

test('Should return true', t => {
	t.is(fn(0), 1);
	t.is(fn(9), 1);
	t.is(fn(100), 3);
	t.is(fn(123.45), 5);
	t.is(fn(-1234), 4);
	t.end();
});
