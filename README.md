# ember-observer-macros [![Ember Observer Score](http://emberobserver.com/badges/ember-slack-search-input.svg)](http://emberobserver.com/addons/ember-observer-macros) [![npm version](https://badge.fury.io/js/ember-observer-macros.svg)](https://badge.fury.io/js/ember-slack-search-input) [![travis status](https://travis-ci.org/bekzod/ember-observer-macros.svg)](https://travis-ci.org/bekzod/ember-observer-macros.svg)

Adds few observer macros to avoid calling observer function too often

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
