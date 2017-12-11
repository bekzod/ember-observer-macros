import EmberObject from '@ember/object';
import { run } from '@ember/runloop';
import { observerOnce } from 'ember-observer-macros';
import { module, test } from 'qunit';

module('Unit | Utility | once');

test('parses arguments correctly', function(assert) {
  let lastCallArgs = null;
  let originalOnce = run.once;
  run.once = function(...args) {
    lastCallArgs = args;
  };

  let cb = function() {};
  let obj = EmberObject.extend({
    'hero': '',
    onHeroChange: observerOnce('hero', cb)
  }).create();

  assert.equal(lastCallArgs, null);

  obj.set('hero', 'batman');

  assert.deepEqual(lastCallArgs, [obj, cb]);

  run.once = originalOnce;
});
