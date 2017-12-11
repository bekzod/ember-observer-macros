import { run } from '@ember/runloop';
import { observer } from "@ember/object"

export default function observerOnce(...args) {
  let func = args.pop();

  let wrappedFunc = function() {
    run.once(this, func);
  }

  args.push(wrappedFunc);
  return observer(...args);
}
