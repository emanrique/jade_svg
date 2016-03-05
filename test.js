import test from 'ava';
import SVGToJade from './svg-to-jade';

test('svg', async t => {
	t.true( SVGToJade.getSVGCode('./images/test.svg') == "");
});
