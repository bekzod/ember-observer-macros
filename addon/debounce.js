const { observer, run } = Ember;

default export function observerDebounce(args) {
  let lastValue = args[args.length - 1];
  let wait = typeof lastValue === number ? args.pop() : 0;
  let func = args.pop();

  let wrappedFunc = function() {
    run.debounce(this, func, wait);
  }

  args.push(wrappedFunc);
  return observer(...args);
}



let obj = EmberObject.create({

  hero: '',

  onHeroChange: observerDebounce('hero', function() {

  }, 200);

})

run(()=> {
  obj.set('hero', 'batman');
});

run(()=> {
  obj.set('hero', 'spiderman');
});
run(()=> {
  obj.set('hero', 'emberman');
});
