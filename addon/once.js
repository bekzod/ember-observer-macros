import Ember from 'ember';
const { observer, run } = Ember;

export default function observerOnce(...args) {
  let func = args.pop();

  let wrappedFunc = function() {
    run.once(this, func);
  }

  args.push(wrappedFunc);
  return observer(...args);
}
