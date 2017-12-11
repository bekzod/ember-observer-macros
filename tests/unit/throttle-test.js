import EmberObject from '@ember/object';
import { run } from '@ember/runloop';
import { observerThrottle } from 'ember-observer-macros';
import { module, test } from 'qunit';

module('Unit | Utility | throttle');

test('parses arguments correctly', function(assert) {
  let lastCallArgs = null;
  let originalThrottle = run.throttle;
  run.throttle = function(...args) {
    lastCallArgs = args;
  };

  let cb = function() {};
  let obj = EmberObject.extend({
    'hero': '',
    onHeroChange: observerThrottle('hero', cb, true, 200),
  }).create();

  assert.equal(lastCallArgs, null);

  obj.set('hero', 'spiderman');

  assert.deepEqual(lastCallArgs, [obj, cb, true, 200]);

  run.throttle = originalThrottle;
});
