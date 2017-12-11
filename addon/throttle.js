import Ember from 'ember';
const { observer, run } = Ember;

export default function observerThrottle(...args) {
  let lastValue = args[args.length - 1];
  let wait = typeof lastValue === 'number' ? args.pop() : 0;
  let func = args.pop();

  let wrappedFunc = function() {
    run.throttle(this, func, wait);
  }

  args.push(wrappedFunc);
  return observer(...args);
}
