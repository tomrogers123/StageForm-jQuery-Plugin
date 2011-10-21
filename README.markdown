## StageForm jQuery Plugin

A simple application, dependant on JavaScript and the JQuery library, that segments HTML forms in order that the user is not overwhelmed with data. It looks for <fieldset></fieldset> elements (that are the semantic way to define areas of a form) inside of the element that it is invoked on and only displays one at a time.

### Features
- Simple to implement.
- No JS dependant markup is targeted.
- Attaches action to valid elements.

### Usage

As yet, there are no option you can pass to the function meaning, providing that the plugin file is loaded after JQuery itself, that you just call:

```javascript

  $('#some-form').stageForm();

```

## Feature Enhancements
This is my first ever plugin. As I learn more and more, I will actively improve the feature set of this as well as adding various customisation options (such as changing the animation between fieldsets). If you have any suggestions, problems or would like to help make it better, please post to the issue queue. In particular, I would really appreciate it if somebody helped me to make it more efficient.