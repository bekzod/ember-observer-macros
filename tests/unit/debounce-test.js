import EmberObject from '@ember/object';
import { run } from '@ember/runloop';
import { observerDebounce } from 'ember-observer-macros';
import { module, test } from 'qunit';

module('Unit | Utility | debounce');

test('parses arguments correctly', function(assert) {
  let lastCallArgs = null;
  let originalDebounce = run.debounce;
  run.debounce = function(...args) {
    lastCallArgs = args;
  };

  let cb = function() {};
  let obj = EmberObject.extend({
    'hero': '',
    onHeroChange: observerDebounce('hero', cb, true, 200)
  }).create();

  assert.equal(lastCallArgs, null);

  obj.set('hero', 'batman');

  assert.deepEqual(lastCallArgs, [obj, cb, true, 200]);

  run.debounce = originalDebounce;
});
