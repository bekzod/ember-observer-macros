import { run } from '@ember/runloop';
import { observer } from "@ember/object"

export default function observerThrottle(...args) {
  let observerArgs = [];

  while (typeof args[0] === 'string') {
    observerArgs.push(args.shift());
  }

  let wrappedFunc = function() {
    run.throttle(this, ...args);
  }

  observerArgs.push(wrappedFunc);

  return observer(...observerArgs);
}
