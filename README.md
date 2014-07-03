# ng-Tri-Toggle

__Triple-State Toggle AngularJS Directive__

1. Sometimes a checkbox should have more than 2 options.
2. Indeterminate checkboxes are cool for nested checklists, but simply a fancy way to say `false`.

So, Here is an elegant solution for a three-state toggle switch inspired by mobile touch toggles.

## Get Started

`bower install -S ngTriToggle`

## Using the directive

```html
<tri-toggle 
  ng-change="myFunction()" 
  ng-model="value">
</tri-toggle> 

<!-- Default Values : true-val = 1, false-val = 0, no-val = null; -->
```

```html
<tri-toggle 
  ng-change="myFunction()" 
  ng-model="value" 
  ng-true-val="'myString'" 
  ng-false-val="0" 
  ng-no-val="-1">
</tri-toggle> 

<!-- Custom Values : true-val = true, false-val = -1, no-val = 'Nothing Selected!' -->
```

__Note__: `ng-change` _callback function is not a watch, and will only be triggered on user interaction.  Make your own watch to monitor the model more closely. :)_

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
