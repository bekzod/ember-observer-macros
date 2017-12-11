const { observer, run } = Ember;

default export function observerOnce(args) {
  let func = args.pop();

  let wrappedFunc = function() {
    run.once(this, func);
  }

  args.push(wrappedFunc);
  return observer(...args);
}
