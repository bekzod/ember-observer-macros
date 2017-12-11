# ember-observer-macros

Adds few observer macros to avoid calling observer function to often

# Importing/ Usage
`import { observerOnce, observerDebounce, observerThrottle } from 'ember-observer-macros';`


### observerOnce
Calls observer function once in run loop

```javascript

nameChanged: observerOnce('propName1', 'propName2', function() {})

```


### observerDebounce
Debounces observer function 

```javascript

nameChanged: observerDebounce('propName1', 'propName2', function() {}, 200)

```

### observerThrottle
Throttles observer function

```javascript

nameChanged: observerThrottle('propName1', 'propName2', function() {}, 200)

```

## Installation

* `ember install ember-observer-macros` 
