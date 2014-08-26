# ng-toggle

__Double and Triple-State Toggle AngularJS Directives__

1. Toggles should be prettier, and not restricted to checkbox functionality.
2. Sometimes a checkbox should have more than 2 states.
3. Indeterminate checkboxes are cool for nested checklists, but simply a fancy way to say `false`.

So, Here is an elegant solution for regular and three-state toggle switches inspired by mobile touch toggles.

[THE DEMO](http://codepen.io/tannerlinsley/pen/uoGfg)

## Get Started

Install Via Bower

`bower install -S ngToggle`

Include Files

```html
<link rel="stylesheet" type="text/css" href="/assets/bower_components/ngTriToggle/ng-toggle.css" />
<script type="text/javascript" src="/assets/bower_components/ngTriToggle/ng-toggle.js"></script>
```

## Using the directive

```html
<ng-toggle 
  tri-toggle 
  ng-change="myFunction()" 
  ng-model="value">
</ng-toggle> 

<!-- Default Values : true-val = 1, false-val = 0, no-val = null; -->
```

```html
<ng-toggle 
  tri-toggle 
  ng-change="myFunction()" 
  ng-model="value" 
  ng-true-val="'myString'" 
  ng-false-val="0" 
  ng-no-val="-1">
</ng-toggle> 

<!-- Custom Values : true-val = true, false-val = -1, no-val = 'Nothing Selected!' -->
```

## License

The MIT License (MIT)

Copyright (c) 2014 Tanner Linsley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
