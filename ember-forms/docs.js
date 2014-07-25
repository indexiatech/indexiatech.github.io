(function() {

(function() {

var _ref;

Ember.Forms = Ember.Namespace.create();

Ember.Forms.VERSION = '0.0.1';

if ((_ref = Ember.libraries) != null) {
  _ref.register('Ember Forms', Ember.Forms.VERSION);
}


})();

(function() {

Ember.Forms.utils = {};

Ember.Forms.utils.createBoundSwitchAccessor = function(switchValue, myProperty, myDefault) {
  if (myDefault == null) {
    myDefault = 'default';
  }
  return (function(key, value) {
    if (arguments.length === 2) {
      this.set(myProperty, (value ? switchValue : myDefault));
    }
    return this.get(myProperty) === switchValue;
  }).property(myProperty);
};

Ember.Forms.utils.namelize = function(string) {
  return string.underscore().split('_').join(' ').capitalize();
};


})();

(function() {


/***
Mixin that should be applied for all controls
 */
Ember.Forms.ControlMixin = Ember.Mixin.create({
  classNameBindings: ['class'],
  "class": 'form-control',
  init: function() {
    this._super();
    return Ember.Binding.from("model." + (this.get('propertyName'))).to('value').connect(this);
  },
  hasValue: (function() {
    return this.get('value') !== null;
  }).property('value').readOnly()
});


})();

(function() {


/*
A mixin that enriches a view that is attached to a model property.

The property name by default is taken from the parentView unless explictly
    defined in the `property` variable.

This mixin also binds a property named `errors` to the model's `model.errors.@propertyName` array
 */
Em.Forms.HasPropertyMixin = Em.Mixin.create({
  property: void 0,
  propertyName: (function() {
    if (this.get('property')) {
      return this.get('property');
    } else if (this.get('parentView.property')) {
      return this.get('parentView.property');
    } else {
      return Em.assert(false, 'Property could not be found.');
    }
  }).property('parentView.property'),
  init: function() {
    this._super();
    return Em.Binding.from('model.errors.' + this.get('propertyName')).to('errors').connect(this);
  }
});


})();

(function() {


/*
A mixin that enriches a view that is attached to a model property that has validation
    support.

This mixin binds a property named `errors` to the model's `model.errors.@propertyName` array
 */
Em.Forms.HasPropertyValidationMixin = Em.Mixin.create({
  init: function() {
    this._super();
    Em.assert(!Em.isNone(this.get('propertyName')), 'propertyName is required.');
    return Em.Binding.from('model.errors.' + this.get('propertyName')).to('errors').connect(this);
  },
  status: (function() {
    if (this.get('errors.length')) {
      return 'error';
    } else {
      return 'success';
    }
  }).property('errors.length')
});


})();

(function() {


/*
Find the form of the view that merges this mixin
 */
Ember.Forms.InFormMixin = Em.Mixin.create({
  form: (function() {
    var parentView;
    parentView = this.get('parentView');
    while (parentView) {
      if (parentView.get('tagName') === 'form') {
        return parentView;
      }
      parentView = parentView.get('parentView');
    }
    return Ember.assert(false, 'Cannot find form');
  }).property('parentView'),
  model: (function() {
    return this.get('form.model');
  }).property('form')
});


})();

(function() {

Ember.TEMPLATES["components/form-control-help"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/form-group"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("wrapperClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group", options))));
  data.buffer.push("\n    </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "wrapperClass", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/form-label"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/form-submit-button"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("horiClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("classes")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("disabled")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n    </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("classes")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("disabled")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "form.isHorizontal", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-form-submit'] || (depth0 && depth0['em-form-submit']),options={hash:{
    'text': ("submit_button_text"),
    'class': ("submit_button_class")
  },hashTypes:{'text': "ID",'class': "ID"},hashContexts:{'text': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-submit", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "submit_button", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/formgroup/control-within-label"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group-control", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group-control", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = (helper = helpers['em-form-label'] || (depth0 && depth0['em-form-label']),options={hash:{
    'text': ("label"),
    'horiClass': (""),
    'inlineClass': (""),
    'viewName': ("labelViewName")
  },hashTypes:{'text': "ID",'horiClass': "STRING",'inlineClass': "STRING",'viewName': "ID"},hashContexts:{'text': depth0,'horiClass': depth0,'inlineClass': depth0,'viewName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-label", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/formgroup/form-group-control"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("controlWrapper")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "controlView", {hash:{
    'viewName': ("controlViewName"),
    'property': ("propertyName")
  },hashTypes:{'viewName': "ID",'property': "ID"},hashContexts:{'viewName': depth0,'property': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "controlView", {hash:{
    'viewName': ("controlViewName"),
    'property': ("propertyName")
  },hashTypes:{'viewName': "ID",'property': "ID"},hashContexts:{'viewName': depth0,'property': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "controlWrapper", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/formgroup/form-group"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "v_icons", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    \n    ");
  stack1 = helpers.unless.call(depth0, "form.isInline", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "yieldInLabel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "labelWrapperClass", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("labelWrapperClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/control-within-label", options) : helperMissing.call(depth0, "partial", "components/formgroup/control-within-label", options))));
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/control-within-label", options) : helperMissing.call(depth0, "partial", "components/formgroup/control-within-label", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "labelWrapperClass", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("labelWrapperClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['em-form-label'] || (depth0 && depth0['em-form-label']),options={hash:{
    'text': ("label"),
    'viewName': ("labelViewName")
  },hashTypes:{'text': "ID",'viewName': "ID"},hashContexts:{'text': depth0,'viewName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-label", options))));
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group-control", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group-control", options))));
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers['em-form-label'] || (depth0 && depth0['em-form-label']),options={hash:{
    'text': ("label"),
    'viewName': ("labelViewName")
  },hashTypes:{'text': "ID",'viewName': "ID"},hashContexts:{'text': depth0,'viewName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-label", options))));
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group-control", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group-control", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group-control", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group-control", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <span class=\"form-control-feedback\"><i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("v_icon")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i></span>\n    ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "canShowErrors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['em-form-control-help'] || (depth0 && depth0['em-form-control-help']),options={hash:{
    'text': ("help"),
    'viewName': ("helpViewName")
  },hashTypes:{'text': "ID",'viewName': "ID"},hashContexts:{'text': depth0,'viewName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-control-help", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, "template", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

})();

(function() {


/*
Form View

A component for rendering a form element.

Syntax:
{{em-form
    //The layout of the form
    form_layout="form|inline|horizontal"
    //The model bound to the form if any
    model="some_model_instance"
    //The action to be invoked on the controller when a form is submitted.
    action="some_action"
    //if true a submit button will be rendered
    submit_button=true|false
    //the submit button text
    submit_button_text="Add"
    //if true validation icons will be rendered
    v_icons=true|false
}}
 */
Ember.Forms.FormComponent = Ember.Component.extend({
  tagName: 'form',
  layoutName: 'components/form',
  classNameBindings: ['form_layout_class'],
  attributeBindings: ['role'],
  role: 'form',
  form_layout_class: (function() {
    switch (this.get('form_layout')) {
      case 'horizontal':
      case 'inline':
        return "form-" + (this.get('form_layout'));
      default:
        return 'form';
    }
  }).property('form_layout'),
  isDefaultLayout: Ember.Forms.utils.createBoundSwitchAccessor('form', 'form_layout', 'form'),
  isInline: Ember.Forms.utils.createBoundSwitchAccessor('inline', 'form_layout', 'form'),
  isHorizontal: Ember.Forms.utils.createBoundSwitchAccessor('horizontal', 'form_layout', 'form'),
  action: 'submit',
  model: void 0,
  form_layout: 'form',
  submit_button: true,
  submit_button_text: "Submit",
  submit_button_class: void 0,
  v_icons: true,
  registerEvents: (function() {
    if (!Em.isNone(this.get('targetObject').on)) {
      return this.get('targetObject').on('form.reset', (function(_this) {
        return function() {
          return _this.reset();
        };
      })(this));
    }
  }).on('init'),
  reset: function() {
    var cv, _i, _len, _ref;
    _ref = this.get('childViews');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      cv = _ref[_i];
      if (cv.get('canShowErrors')) {
        cv.set('canShowErrors', false);
      }
    }
    if (!Em.isNone(this.get('targetObject.model.reset'))) {
      return this.get('targetObject.model').reset();
    }
  },

  /*
  Form submit
  
  Optionally execute model validations and perform a form submission.
   */
  submit: function(e) {
    var promise;
    if (e) {
      e.preventDefault();
    }
    if (Ember.isNone(this.get('model.validate'))) {
      return this.get('targetObject').send(this.get('action'));
    } else {
      promise = this.get('model').validate();
      return promise.then((function(_this) {
        return function() {
          if (_this.get('model.isValid')) {
            return _this.get('targetObject').send(_this.get('action'));
          }
        };
      })(this));
    }
  }
});

Ember.Handlebars.helper('em-form', Ember.Forms.FormComponent);


})();

(function() {


/*
Form Control Help

Renders a textual help of the control.

Note: currently must be a direct descendant of a form-group or 'property' must be explicitly defined

Syntax:
{{em-form-control-help}}
 */
Em.Forms.FormControlHelpComponent = Em.Component.extend(Em.Forms.InFormMixin, Em.Forms.HasPropertyMixin, {
  tagName: 'span',
  classNames: ['help-block'],
  classNameBindings: ['extraClass', 'horiClassCalc'],
  layoutName: 'components/form-control-help',
  text: void 0,
  extraClass: void 0,
  horiClass: 'col-sm-offset-2 col-sm-10',
  horiClassCalc: (function() {
    if (this.get('form.isHorizontal') && this.get('horiClass')) {
      return this.get('horiClass');
    }
  }).property('form.isHorizontal'),
  init: function() {
    this._super();
    return Em.Binding.from('model.errors.' + this.get('propertyName')).to('errors').connect(this);
  },
  helpText: (function() {
    return this.get('errors.firstObject') || this.get('text');
  }).property('text', 'errors.firstObject'),
  hasHelp: (function() {
    var _ref;
    return ((_ref = this.get('helpText')) != null ? _ref.length : void 0) > 0;
  }).property('helpText'),
  hasError: (function() {
    var _ref;
    return (_ref = this.get('errors')) != null ? _ref.length : void 0;
  }).property('errors.length')
});

Em.Handlebars.helper('em-form-control-help', Em.Forms.FormControlHelpComponent);


})();

(function() {


/*
Form Group

Wraps labels, controls and help message for optimum spacing and validation styles.
A wrapper for a single input with its assistances views such as label, help message.

A form group can yield the control's view after or within a label, this is dependent on the control
    required layout and is defined byt he yieldInLabel property


Syntax:
{{em-form-group
    //The state of the form group
    status="none|error|warning|success"
    //If true the control view is yieled within the label
    yieldInLabel=true|false
    //If true validation icons will be rendered, by default inherited from the form
    v_icons: true
    //Label of the form group, default is a human friendly form of the property name
    label="Some label"
}}
 */
Em.Forms.FormGroupComponent = Em.Component.extend(Em.Forms.InFormMixin, Em.Forms.HasPropertyMixin, Em.Forms.HasPropertyValidationMixin, {
  tagName: 'div',
  layoutName: 'components/form-group',
  "class": 'form-group',
  classNameBindings: ['class', 'hasSuccess', 'hasWarning', 'hasError', 'v_icons:has-feedback'],
  attributeBindings: ['disabled'],
  hasSuccess: (function() {
    return this.get('validations') && this.get('status') === 'success' && this.get('canShowErrors');
  }).property('status', 'canShowErrors'),
  hasWarning: (function() {
    return this.get('validations') && this.get('status') === 'warning' && this.get('canShowErrors');
  }).property('status', 'canShowErrors'),
  hasError: (function() {
    return this.get('validations') && this.get('status') === 'error' && this.get('canShowErrors');
  }).property('status', 'canShowErrors'),
  v_icons: Em.computed.alias('form.v_icons'),
  v_success_icon: 'fa fa-check',
  v_warn_icon: 'fa fa-exclamation-triangle',
  v_error_icon: 'fa fa-times',
  validations: true,
  yieldInLabel: false,
  v_icon: (function() {
    if (!this.get('canShowErrors')) {
      return;
    }
    switch (this.get('status')) {
      case 'success':
        return this.get('v_success_icon');
      case 'warning':
      case 'warn':
        return this.get('v_warn_icon');
      case 'error':
        return this.get('v_error_icon');
      default:
        return null;
    }
  }).property('status', 'canShowErrors'),
  init: function() {
    return this._super();
  },

  /*
  Observes the helpHasErrors of the help control and modify the 'status' property accordingly.
   */

  /*
  Listen to the focus out of the form group and display the errors
   */
  focusOut: function() {
    return this.set('canShowErrors', true);
  }
});

Em.Handlebars.helper('em-form-group', Em.Forms.FormGroupComponent);


})();

(function() {


/*
Form Label

When styled with bootstrap, when form is rendered horizontally, the label require the 'extraClass' property to
    be set to a value such 'col-sm-2' to be aligned properly.

Syntax:
{{em-form-label
    text="Some label"
    extraClass="col-sm-2"
}}

Or can serve as a block helper for elements that needs to be wrapped within label element.
{{#em-form-label text="Active?"}}
    {{em-checkbox}}
{{/em-form-label}}
 */
Ember.Forms.FormLabelComponent = Ember.Component.extend(Em.Forms.InFormMixin, {
  tagName: 'label',
  layoutName: 'components/form-label',
  classNames: ['control-label'],
  classNameBindings: ['extraClass', 'inlineClassCalc', 'horiClassCalc'],
  attributeBindings: ['for'],
  horiClass: 'col-sm-2',
  horiClassCalc: (function() {
    if (this.get('form.isHorizontal') && this.get('horiClass')) {
      return this.get('horiClass');
    }
  }).property('form.isHorizontal'),
  inlineClass: 'sr-only',
  inlineClassCalc: (function() {
    if (this.get('form.isInline') && this.get('inlineClass')) {
      return this.get('inlineClass');
    }
  }).property('form.form_layout')
});

Ember.Handlebars.helper('em-form-label', Ember.Forms.FormLabelComponent);


})();

(function() {


/*
Form Input

Syntax:
{{em-input property="property name"}}
 */
Em.Forms.FormInputComponent = Em.Forms.FormGroupComponent.extend({
  controlView: Em.TextField.extend(Em.Forms.ControlMixin, {
    attributeBindings: ['placeholder'],
    placeholder: Em.computed.alias('parentView.placeholder'),
    type: Em.computed.alias('parentView.type'),
    model: Em.computed.alias('parentView.model'),
    propertyName: Em.computed.alias('parentView.propertyName')
  }),
  property: void 0,
  label: void 0,
  placeholder: void 0,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});

Ember.Handlebars.helper('em-input', function(options) {
  return Ember.Handlebars.helpers.view.call(this, Ember.Forms.FormInputComponent, options);
});


})();

(function() {


/*
Form Input

Syntax:
{{em-text property="property name" rows=4}}
 */
Em.Forms.FormTextComponent = Em.Forms.FormGroupComponent.extend({
  controlView: Em.TextArea.extend(Em.Forms.ControlMixin, {
    attributeBindings: ['placeholder'],
    placeholder: Em.computed.alias('parentView.placeholder'),
    model: Em.computed.alias('parentView.model'),
    propertyName: Em.computed.alias('parentView.propertyName'),
    rows: Em.computed.alias('parentView.rows')
  }),
  property: void 0,
  label: void 0,
  placeholder: void 0,
  rows: 4,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});

Ember.Handlebars.helper('em-text', function(options) {
  return Ember.Handlebars.helpers.view.call(this, Ember.Forms.FormTextComponent, options);
});


})();

(function() {


/*
Form Input

Syntax:
{{em-checkbox property="property name"}}
 */
Em.Forms.FormCheckboxComponent = Em.Forms.FormGroupComponent.extend({
  v_icons: false,
  validations: false,
  yieldInLabel: true,
  controlView: Em.Checkbox.extend(Em.Forms.ControlMixin, {
    "class": false,
    model: Em.computed.alias('parentView.parentView.model'),
    propertyName: Em.computed.alias('parentView.parentView.propertyName'),
    init: function() {
      this._super();
      return Ember.Binding.from("model." + (this.get('propertyName'))).to('checked').connect(this);
    }
  }),
  wrapperClass: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-offset-2 col-sm-10';
    }
  }).property('form.form_layout'),
  labelWrapperClass: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'checkbox';
    }
    return null;
  }).property('form.form_layout'),
  "class": (function() {
    if (this.get('form.form_layout') !== 'horizontal') {
      return 'checkbox';
    }
    return 'form-group';
  }).property('form.form_layout')
});

Ember.Handlebars.helper('em-checkbox', function(options) {
  return Ember.Handlebars.helpers.view.call(this, Ember.Forms.FormCheckboxComponent, options);
});


})();

(function() {


/*
Form Select

Syntax:
{{em-select property="property name"
    content=array_of_options
    optionValuePath=keyForValue
    optionLabelPath=keyForLabel
    prompt="Optional default prompt"}}
 */
Em.Forms.FormSelectComponent = Em.Forms.FormGroupComponent.extend({
  v_icons: false,
  controlView: Em.Select.extend(Em.Forms.ControlMixin, {
    model: Em.computed.alias('parentView.model'),
    propertyName: Em.computed.alias('parentView.propertyName'),
    content: Em.computed.alias('parentView.content'),
    optionValuePath: Em.computed.alias('parentView.optionValuePath'),
    optionLabelPath: Em.computed.alias('parentView.optionLabelPath'),
    prompt: Em.computed.alias('parentView.prompt'),
    selection: Em.computed.alias('parentView.selection')
  }),
  property: void 0,
  content: void 0,
  optionValuePath: void 0,
  optionLabelPath: void 0,
  prompt: void 0,
  selection: void 0,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});

Ember.Handlebars.helper('em-select', function(options) {
  return Ember.Handlebars.helpers.view.call(this, Ember.Forms.FormSelectComponent, options);
});


})();

(function() {


/*
Form Submit Button

Syntax:
{{em-form-submit text="Submit"}}
 */
Ember.Forms.FormSubmitComponent = Ember.Component.extend(Ember.Forms.InFormMixin, {
  classes: 'btn btn-default',
  layoutName: 'components/form-submit-button',
  classNames: ['form-group'],
  text: 'Submit',
  type: 'submit',
  attributeBindings: ['disabled'],
  horiClass: 'col-sm-offset-2 col-sm-10',
  disabled: (function() {
    if (!Ember.isNone(this.get('model.isValid'))) {
      return !this.get('model.isValid');
    } else {
      return false;
    }
  }).property('model.isValid')
});

Ember.Handlebars.helper('em-form-submit', Ember.Forms.FormSubmitComponent);


})();

})();

(function() {

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navbar", options) : helperMissing.call(depth0, "render", "navbar", options))));
  data.buffer.push("\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-xs-12\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sidebar", options) : helperMissing.call(depth0, "render", "sidebar", options))));
  data.buffer.push("\n        </div>\n        <div class=\"col-sm-9 col-xs-12 page\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["block_form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}
  if (helper = helpers['bs-form-group']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['bs-form-group']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['bs-form-group']) { stack1 = blockHelperMissing.call(depth0, 'bs-form-group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data}
  if (helper = helpers['bs-form-group']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['bs-form-group']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['bs-form-group']) { stack1 = blockHelperMissing.call(depth0, 'bs-form-group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['bs-form-label'] || (depth0 && depth0['bs-form-label']),options={hash:{
    'text': ("Name")
  },hashTypes:{'text': "STRING"},hashContexts:{'text': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-form-label", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['bs-form-input'] || (depth0 && depth0['bs-form-input']),options={hash:{
    'placeholder': ("name")
  },hashTypes:{'placeholder': "STRING"},hashContexts:{'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-form-input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['bs-form-control-help'] || (depth0 && depth0['bs-form-control-help']),options={hash:{
    'text': ("Please enter full name")
  },hashTypes:{'text': "STRING"},hashContexts:{'text': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-form-control-help", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['bs-form-label'] || (depth0 && depth0['bs-form-label']),options={hash:{
    'text': ("Password")
  },hashTypes:{'text': "STRING"},hashContexts:{'text': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-form-label", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['bs-form-input'] || (depth0 && depth0['bs-form-input']),options={hash:{
    'placeholder': ("password"),
    'type': ("password")
  },hashTypes:{'placeholder': "STRING",'type': "STRING"},hashContexts:{'placeholder': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-form-input", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
  if (helper = helpers['bs-form']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['bs-form']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['bs-form']) { stack1 = blockHelperMissing.call(depth0, 'bs-form', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<h3>And the following template:</h3>\n<div class=\"well line-example\">\n    <pre><code class=\"hbs\">\n        &#123;&#123;#form&#125;&#125;\n        &#123;&#123;&#125;&#125;\n        &#123;&#123;/form&#125;&#125;\n    </code></pre>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["controls"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["controls/checkbox"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['em-checkbox'] || (depth0 && depth0['em-checkbox']),options={hash:{
    'label': ("Active?"),
    'property': ("active")
  },hashTypes:{'label': "STRING",'property': "STRING"},hashContexts:{'label': depth0,'property': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-checkbox", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<h3>Checkbox</h3>\n\nCheckboxes let a user select or deselect an option.\n\n<h2>Markup</h2>\n<div class=\"well line-example\">\n    <pre><code class=\"handlebars\">\n        {{em-checkbox label=\"Active?\" property=\"active\"}}\n    </code></pre>\n</div>\n\n<h2>Result</h2>\n<div class=\"well line-example\">\n    ");
  stack1 = (helper = helpers['em-form'] || (depth0 && depth0['em-form']),options={hash:{
    'submit_button': (false)
  },hashTypes:{'submit_button': "BOOLEAN"},hashContexts:{'submit_button': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<h2>Parameters</h2>\n<table class=\"table table-striped\">\n    <tr><th>Param name</th><th>Description</th><th>Default</th></tr>\n    <tr><td>label</td><td>The label of the input</td><td>A humanized form of the property name</td></tr>\n    <tr><td>property</td><td>The property name in the model instance bound to the form</td><td>none, value is required.</td></tr>\n</table>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["controls/html5"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("{{em-input}}");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'label': ("Email"),
    'property': ("email"),
    'type': ("email")
  },hashTypes:{'label': "STRING",'property': "STRING",'type': "STRING"},hashContexts:{'label': depth0,'property': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'label': ("Telephone"),
    'property': ("tel"),
    'type': ("tel")
  },hashTypes:{'label': "STRING",'property': "STRING",'type': "STRING"},hashContexts:{'label': depth0,'property': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'label': ("Range"),
    'property': ("range"),
    'type': ("range")
  },hashTypes:{'label': "STRING",'property': "STRING",'type': "STRING"},hashContexts:{'label': depth0,'property': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'label': ("Date"),
    'property': ("date"),
    'type': ("date")
  },hashTypes:{'label': "STRING",'property': "STRING",'type': "STRING"},hashContexts:{'label': depth0,'property': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'label': ("Time"),
    'property': ("time"),
    'type': ("time")
  },hashTypes:{'label': "STRING",'property': "STRING",'type': "STRING"},hashContexts:{'label': depth0,'property': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'label': ("Month"),
    'property': ("month"),
    'type': ("month")
  },hashTypes:{'label': "STRING",'property': "STRING",'type': "STRING"},hashContexts:{'label': depth0,'property': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'label': ("Week"),
    'property': ("week"),
    'type': ("week")
  },hashTypes:{'label': "STRING",'property': "STRING",'type': "STRING"},hashContexts:{'label': depth0,'property': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<h3>Html5</h3>\n\n<p>Here are some html5 controls.</p>\n<p>The controls are just standard ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "controls.input", options) : helperMissing.call(depth0, "link-to", "controls.input", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" tag with different <i>type</i> property.</p>\n\n<div class=\"well line-example\">\n");
  stack1 = (helper = helpers['em-form'] || (depth0 && depth0['em-form']),options={hash:{
    'model': ("model"),
    'submit_button': (false),
    'form_layout': ("horizontal")
  },hashTypes:{'model': "ID",'submit_button': "BOOLEAN",'form_layout': "STRING"},hashContexts:{'model': depth0,'submit_button': depth0,'form_layout': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["controls/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Controls</h1>\n\n<p>Please choose one of the controls from the left menu</p>\n");
  
});

Ember.TEMPLATES["controls/input"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'label': ("First Name"),
    'property': ("firstName")
  },hashTypes:{'label': "STRING",'property': "STRING"},hashContexts:{'label': depth0,'property': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<h3>Input</h3>\n\nStandard <i>&lt;input&gt;</i> tag which is a one-line input field that a user can enter text into.\n\n<h2>Markup</h2>\n<div class=\"well line-example\">\n    <pre><code class=\"handlebars\">\n        {{em-input label=\"First Name\" property=\"firstName\"}}\n    </code></pre>\n</div>\n\n\n<h2>Result</h2>\n<div class=\"well line-example\">\n    ");
  stack1 = (helper = helpers['em-form'] || (depth0 && depth0['em-form']),options={hash:{
    'submit_button': (false)
  },hashTypes:{'submit_button': "BOOLEAN"},hashContexts:{'submit_button': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<h2>Parameters</h2>\n<table class=\"table table-striped\">\n    <tr><th>Param name</th><th>Description</th><th>Default</th></tr>\n    <tr><td>label</td><td>The label of the input</td><td>A humanized form of the property name</td></tr>\n    <tr><td>property</td><td>The property name in the model instance bound to the form</td><td>none, value is required.</td></tr>\n    <tr><td>type</td><td>The type of the input</td><td>none, can be <i>password, email</i> or any other browser supported input type</td></tr>\n</table>");
  return buffer;
  
});

Ember.TEMPLATES["controls/select"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['em-select'] || (depth0 && depth0['em-select']),options={hash:{
    'label': ("Gender"),
    'content': ("genderOptions"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.name"),
    'prompt': ("--select--")
  },hashTypes:{'label': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'prompt': "STRING"},hashContexts:{'label': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'prompt': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-select", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<h3>Select</h3>\nSelectbox let a user select one item of a multi pre defined options.\n\n<h2>Markup/Code</h2>\n<h3>Template Markup</h3>\n<div class=\"well line-example\">\n    <pre><code class=\"handlebars\">\n        {{em-select\n            label=\"Gender\"\n            property=\"gender\"\n            content=genderOptions\n            optionValuePath=\"content.id\"\n            optionLabelPath=\"content.name\"\n            prompt=\"--select--\"}}\n    </code></pre>\n</div>\n<h3>Controller Code</h3>\n<div class=\"well line-example\">\n    <pre><code class=\"coffeescript\">\n        App.ControlsSelectController = Em.ObjectController.extend\n            genderOptions: [\n                {id: 'M', name: 'Male'}\n                {id: 'F', name: 'Female'}\n                {id: 'O', name: 'Other'}\n            ]\n    </code></pre>\n</div>\n\n<h2>Result</h2>\n<div class=\"well line-example\">\n    ");
  stack1 = (helper = helpers['em-form'] || (depth0 && depth0['em-form']),options={hash:{
    'submit_button': (false)
  },hashTypes:{'submit_button': "BOOLEAN"},hashContexts:{'submit_button': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<h2>Parameters</h2>\n<table class=\"table table-striped\">\n    <tr><th>Param name</th><th>Description</th><th>Default</th></tr>\n    <tr><td>label</td><td>The label of the input</td><td>A humanized form of the property name</td></tr>\n    <tr><td>property</td><td>The property name in the model instance bound to the form</td><td>none, value is required.</td></tr>\n    <tr><td>prompt</td><td>Prompt a default selection with the given value</td><td>none</td></tr>\n    <tr><td>content</td><td>an array of strings/objects where each element is displayed as a possible selection</td><td>none</td></tr>\n    <tr><td>optionLabelPath</td><td>the path on each object to the desired property to be displayed as the label of the selection</td><td>none, required.</td></tr>\n    <tr><td>optionValuePath</td><td>the path on each object to the desired property value of the selection</td><td>none, required.</td></tr>\n</table>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["controls/text"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-text'] || (depth0 && depth0['em-text']),options={hash:{
    'label': ("Comment"),
    'property': ("comment"),
    'rows': (3)
  },hashTypes:{'label': "STRING",'property': "STRING",'rows': "INTEGER"},hashContexts:{'label': depth0,'property': depth0,'rows': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-text", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<h3>Text Area</h3>\n\nStandard <i>&lt;textarea&gt;</i> tag which is a multi-line text input control.\n\n<h2>Markup</h2>\n<div class=\"well line-example\">\n    <pre><code class=\"handlebars\">\n        {{em-text label=\"Comment\" property=\"comment\" rows=3}}\n    </code></pre>\n</div>\n\n<h2>Result</h2>\n<div class=\"well line-example\">\n");
  stack1 = (helper = helpers['em-form'] || (depth0 && depth0['em-form']),options={hash:{
    'submit_button': (false)
  },hashTypes:{'submit_button': "BOOLEAN"},hashContexts:{'submit_button': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<h2>Parameters</h2>\n<table class=\"table table-striped\">\n    <tr><th>Param name</th><th>Description</th><th>Default</th></tr>\n    <tr><td>label</td><td>The label of the input</td><td>A humanized form of the property name</td></tr>\n    <tr><td>property</td><td>The property name in the model instance bound to the form</td><td>none, value is required.</td></tr>\n    <tr><td>rows</td><td>Specifies the height of the text area (in lines)</td><td>Browser specific, usually 2</td></tr>\n</table>");
  return buffer;
  
});

Ember.TEMPLATES["form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'label': ("Name"),
    'property': ("name")
  },hashTypes:{'label': "STRING",'property': "STRING"},hashContexts:{'label': depth0,'property': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<h2>Form</h2>\n\n<p>Form is rendered as a standard &lt;form&gt; tag and serves as the container of input controls such as <i>&lt;input&gt; or &lt;textarea&gt;</i></p>\n<p>A form is usually bound to a model and its controls are bound to the model's properties.</p>\n\n<p>By default, a form is rendered with no controls but with a submit button.</p>\n\n<p>here's an example of a form with an <i>horizontal</i> layout:</p>\n\n<h2>Markup</h2>\n<div class=\"well line-example\">\n    <pre><code class=\"handlebars\">\n        {{#em-form form_layout=\"horizontal\"}}\n            {{em-input label=\"Name\" property=\"name\"}}\n        {{/em-form}}\n    </code></pre>\n</div>\n\n<h2>Result</h2>\n<div class=\"well line-example\">\n    ");
  stack1 = (helper = helpers['em-form'] || (depth0 && depth0['em-form']),options={hash:{
    'form_layout': ("horizontal")
  },hashTypes:{'form_layout': "STRING"},hashContexts:{'form_layout': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<h2>Parameters</h2>\n<table class=\"table table-striped\">\n    <tr><th>Param name</th><th>Description</th><th>Default</th></tr>\n    <tr><td>form_layout</td><td>The layout of the form.</td><td><i>form, inline, horizontal</i>, default is: <i>form</i></td></tr>\n    <tr><td>model</td><td>The model instance bound to the form</td><td>optional, none by default.</td></tr>\n    <tr><td>action</td><td>The action to be executed on the controller when the user submits the form.</td>default action is <i>submit</i></tr>\n    <tr><td>submit_button</td></tr>\n</table>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["form_sample"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'property': ("name"),
    'label': ("Full Name"),
    'placeholder': ("Enter a name...")
  },hashTypes:{'property': "STRING",'label': "STRING",'placeholder': "STRING"},hashContexts:{'property': depth0,'label': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
    'property': ("password"),
    'label': ("Password"),
    'placeholder': ("And password..."),
    'type': ("password"),
    'disabled': ("nameHasValue")
  },hashTypes:{'property': "STRING",'label': "STRING",'placeholder': "STRING",'type': "STRING",'disabled': "ID"},hashContexts:{'property': depth0,'label': depth0,'placeholder': depth0,'type': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-text'] || (depth0 && depth0['em-text']),options={hash:{
    'property': ("comment"),
    'label': ("Coment"),
    'placeholder': ("Comment please.."),
    'rows': (4)
  },hashTypes:{'property': "STRING",'label': "STRING",'placeholder': "STRING",'rows': "INTEGER"},hashContexts:{'property': depth0,'label': depth0,'placeholder': depth0,'rows': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-text", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-select'] || (depth0 && depth0['em-select']),options={hash:{
    'property': ("gender"),
    'label': ("Gender"),
    'prompt': ("-select-"),
    'content': ("genderOptions"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.name")
  },hashTypes:{'property': "STRING",'label': "STRING",'prompt': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING"},hashContexts:{'property': depth0,'label': depth0,'prompt': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-select", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['em-checkbox'] || (depth0 && depth0['em-checkbox']),options={hash:{
    'property': ("active"),
    'label': ("Active?")
  },hashTypes:{'property': "STRING",'label': "STRING"},hashContexts:{'property': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-checkbox", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<div class=\"btn-group\">\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "layout", "default", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Default</button>\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "layout", "horizontal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Horizontal</button>\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "layout", "inline", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Inline</button>\n</div>\n<hr/>\n");
  stack1 = (helper = helpers['em-form'] || (depth0 && depth0['em-form']),options={hash:{
    'model': ("model"),
    'form_layout': ("layout")
  },hashTypes:{'model': "ID",'form_layout': "ID"},hashContexts:{'model': depth0,'form_layout': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["getstarted"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("5 Minutes Example");
  }

  data.buffer.push("<h1>Getting Started</h1>\n\n<ol>\n    <li>\n        <p>Installing via <i>bower</i> is the simplest form:</p>\n        <pre><code class=\"bash\">bower install ember-forms</code></pre>\n    </li>\n    <li>\n        <p>Include Bootstrap for styling</p>\n        <pre><code class=\"html\">&lt;link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\"&gt;</code></pre>\n    </li>\n    <li>\n        <p>Include Ember Forms</p>\n        <pre><code class=\"html\">&lt;script src=\"bower_components/ember-forms/dist/ember_forms.js\"&gt;</script></code></pre>\n    </li>\n</ol>\n\n<p>Of course you need jquery, ember.js and handlebars included in your project too.</p>\n\n\n<p>Want to see some code? check out the ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "quickexample", options) : helperMissing.call(depth0, "link-to", "quickexample", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>");
  return buffer;
  
});

Ember.TEMPLATES["navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<nav role=\"navigation\" class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"buttonin\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\" class=\"navbar-toggle\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a href=\"#\" class=\"navbar-brand\">Ember Forms</a>\n        </div>\n        <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-home\"></i>\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://github.com/ember-addons/ember-forms\">\n                        <i class=\"fa fa-github-alt\"></i>\n                        Github\n                    </a>\n                </li>\n            </ul>\n            <form class=\"navbar-form navbar-right\">\n                <a href=\"https://github.com/ember-addons/ember-forms/archive/master.zip\" style=\"font-weight:bold\" class=\"btn btn-success\">\n                    <i class=\"fa fa-save\"></i>\n                    Download 1~ kb\n                </a>\n            </form>\n            <div class=\"socials\" style=\"text-align: center\">\n                <ul class=\"bs-social-buttons\">\n                    <li>\n                        <!-- github -->\n                        <div>\n                        <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=ember-addons&amp;repo=ember-forms&amp;type=watch&amp;count=true\" width=\"100\" height=\"20\" title=\"Star on GitHub\"></iframe>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>");
  
});

Ember.TEMPLATES["overview"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Getting Started");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Controls");
  }

  data.buffer.push("<h1>Overview</h1>\n\n<p>\n<b>Ember Forms</b> is a small library for <i>Ember.js</i> that allows you to create astonishing forms\n    with support for <i> layouts, styles & validations</i> thanks to the combination of the beauty of <i>Bootstrap</i> and the power of <i>Ember</i>.\n</p>\n\n<hr/>\n\n<h4>And here is the result in a nutshell...</h4>\n\n<!--<a href=\"http://jsbin.com/pexolude/2\" target=\"_blank\" class=\"btn btn-warning jsbin pull-right\">jsBin</a>-->\n<div class=\"well line-example\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "form_sample", "model", options) : helperMissing.call(depth0, "render", "form_sample", "model", options))));
  data.buffer.push("\n</div>\n<div class=\"well line-example\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "model.asjson", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<h1>Want to see more?</h1>\n<p>\n    For getting started & installation steps, please visit ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "getstarted", options) : helperMissing.call(depth0, "link-to", "getstarted", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n<!--\n<p>\n    To see controls in action, visit ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "controls", options) : helperMissing.call(depth0, "link-to", "controls", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n-->\n");
  return buffer;
  
});

Ember.TEMPLATES["quickexample"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>5 Minutes Example</h1>\n\n<p>Here's a quick sample how it works:</p>\n<h3>Given the following controller:</h3>\n<div class=\"well line-example\">\n    <pre><code class=\"coffeescript\">\n        MyController = Em.Controller.extend\n            genderOptions: [\n                {id: 'M', name: 'Male'}\n                {id: 'F', name: 'Female'}\n                {id: 'O', name: 'Other'}\n            ]\n            actions:\n                submit:\n                    alert \"Submitted!\"\n    </code></pre>\n</div>\n\n\n<h3>And the following model:</h3>\n<div class=\"well line-example\">\n    <pre><code class=\"coffeescript\">\n        User = DS.Model\n            name: DS.attr 'string'\n            password: DS.attr 'string'\n            comment: DS.attr('string')\n            active: DS.attr('boolean')\n            gender: DS.attr('string')\n            nameHasValue: (->\n                not @get('name')?.length\n            ).property('name')\n\n        User.reopen\n            validations:\n                name:\n                    presence: true\n                    length: { minimum: 5 }\n                password:\n                    presence: true\n                    length: { minimum: 6 }\n                comment:\n                    presence: true\n                gender:\n                    presence: true\n    </code></pre>\n</div>\n\n<i>Note: for validation support you need: https://github.com/dockyard/ember-validations project</i>\n\n<h3>With this template:</h3>\n<div class=\"well line-example\">\n    <pre><code class=\"coffeescript\">\n        {{#em-form model=model}}\n            {{em-input property=\"name\" label=\"Full Name\" placeholder=\"Enter a name...\"}}\n            {{em-input property=\"password\" label=\"Password\" placeholder=\"And password...\" type=\"password\" disabled=nameHasValue}}\n            {{em-text property=\"comment\" label=\"Coment\" placeholder=\"Comment please..\" rows=4}}\n            {{em-select property=\"gender\" label=\"Gender\" prompt=\"-select-\" content=genderOptions optionValuePath=\"content.id\" optionLabelPath=\"content.name\"}}\n            {{em-checkbox property=\"active\" label=\"Active?\"}}\n        {{/em-form}}\n    </code></pre>\n</div>\n\n<h3>The result would be:</h3>\n\n<a href=\"http://jsbin.com/pexolude/2\" target=\"_blank\" class=\"btn btn-warning jsbin pull-right\">jsBin</a>\n<div class=\"well line-example\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "form_sample", "model", options) : helperMissing.call(depth0, "render", "form_sample", "model", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["sidebar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <ul class=\"nav\">\n            ");
  stack1 = helpers.each.call(depth0, "items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"well sidebar\">\n    <ul class=\"nav\">\n        ");
  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n</div>");
  return buffer;
  
});

})();

(function() {

window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});


})();

(function() {




})();

(function() {

App.SimplePerson = DS.Model.extend(Ember.Validations.Mixin, {
  name: DS.attr('string'),
  password: DS.attr('string'),
  comment: DS.attr('string'),
  active: DS.attr('boolean'),
  gender: DS.attr('string'),
  nameHasValue: (function() {
    var _ref;
    return !((_ref = this.get('name')) != null ? _ref.length : void 0);
  }).property('name'),
  asjson: (function() {
    return JSON.stringify(this.toJSON());
  }).property('name', 'password', 'comment', 'active', 'gender'),
  reset: function() {
    this.set('name', null);
    this.set('password', null);
    this.set('comment', null);
    this.set('active', false);
    return this.set('gender', null);
  }
});

App.SimplePerson.reopen({
  validations: {
    name: {
      presence: true,
      length: {
        minimum: 5
      }
    },
    password: {
      presence: true,
      length: {
        minimum: 6
      }
    },
    comment: {
      presence: true
    },
    gender: {
      presence: true
    }
  }
});

Em.Route.reopen({
  renderTemplate: function() {
    this._super();
    return Em.run.next(this, function() {
      return $('pre code').each(function(i, e) {
        return hljs.highlightBlock(e);
      });
    });
  }
});

App.Router.map(function() {
  this.route('overview');
  this.route('getstarted');
  this.route('quickexample');
  this.resource('form', function() {
    return this.route('submit');
  });
  return this.resource('controls', function() {
    this.route('input');
    this.route('text');
    this.route('checkbox');
    this.route('select');
    return this.route('html5');
  });
});

App.IndexRoute = Em.Route.extend({
  beforeModel: function() {
    return this.transitionTo('overview');
  }
});

App.OverviewRoute = Em.Route.extend({
  model: function() {
    var model;
    model = this.get('store').createRecord('simple_person');
    return model;
  }
});

App.QuickexampleRoute = App.OverviewRoute.extend();

App.FormSampleController = Em.Controller.extend(Em.Evented, {
  layout: 'default',
  genderOptions: [
    {
      id: 'M',
      name: 'Male'
    }, {
      id: 'F',
      name: 'Female'
    }, {
      id: 'O',
      name: 'Other'
    }
  ],
  actions: {
    submit: function() {
      return this.trigger('form.reset');
    },
    layout: function(t) {
      return this.set('layout', t);
    }
  }
});

App.ControlsSelectController = Em.ObjectController.extend({
  genderOptions: [
    {
      id: 'M',
      name: 'Male'
    }, {
      id: 'F',
      name: 'Female'
    }, {
      id: 'O',
      name: 'Other'
    }
  ]
});

App.SidebarController = Em.ArrayController.extend({
  content: [
    {
      route: 'overview',
      text: 'Overview',
      items: []
    }, {
      route: 'getstarted',
      text: 'Getting started',
      items: []
    }, {
      route: 'quickexample',
      text: '5 Minutes Example',
      items: []
    }, {
      route: 'form',
      text: 'Form',
      items: [
        {
          route: 'form.submit',
          text: 'Submit Button'
        }
      ]
    }, {
      route: 'controls',
      text: 'Controls',
      items: [
        {
          route: 'controls.input',
          text: 'Input'
        }, {
          route: 'controls.text',
          text: 'Textarea'
        }, {
          route: 'controls.checkbox',
          text: 'Checkbox'
        }, {
          route: 'controls.select',
          text: 'Select'
        }, {
          route: 'controls.html5',
          text: 'Html5'
        }
      ]
    }
  ]
});


})();