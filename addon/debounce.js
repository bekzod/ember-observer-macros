import Ember from 'ember';
const { observer, run } = Ember;

export default function observerDebounce(...args) {
  let observerArgs = [];

  while (typeof args[0] === 'string') {
    observerArgs.push(args.shift());
  }

  let wrappedFunc = function() {
    run.debounce(this, ...args);
  }

  observerArgs.push(wrappedFunc);

  return observer(...observerArgs);
}
