## StageForm jQuery Plugin

A simple application, dependant on JavaScript and the JQuery library, that segments HTML forms in order that the user is not overwhelmed with data. It looks for "fieldset" elements (that are the semantic way to define areas of a form) inside of the element that it is invoked on and only displays one at a time.

### Features

#### Added on 23/10/11

- Added ability to enable progress bar.
- Added button to go back to previous fieldset (currently dysfunctional )
- Enabled changing of text on navigational buttons.
- Added parameter to change animation between sections.

#### Added on 22/10/11

- Simple to implement.
- No JS dependant markup is targeted.
- Attaches action to valid elements.

### Usage

Providing that the plugin file is loaded after JQuery itself, that you just call:

```javascript

  $('#some-form').stageForm({
    
    // DEFAULT VALUES THAT ARE ASSUMED WITHOUT INCLUSION
    progress : true,
    progressColor : "#ccc" // CAN BE ANY FORMAT ACCEPTED BY CSS
    NextText : "Next",
    previousText : "Previous",
    animation : "fade" // CAN ALSO BE SLIDE 
    
  });

```

This relies on the fact that each step of the form is within its own "fieldset" (see demo for working example).

### Feature Enhancements
This is my first ever plugin. As I learn more and more, I will actively improve the feature set of this as well as adding various customisation options (such as changing the animation between fieldsets). If you have any suggestions, problems or would like to help make it better, please post to the issue queue. In particular, I would really appreciate it if somebody helped me to make it more efficient.