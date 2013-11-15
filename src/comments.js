define(['component'], function(component) {
/**
 * Just a quick application to test all the functionality
 */
var comment,
    playground = document.getElementById('playground');

function error(message) {
  throw Error(message);
}

var Comment = function() {};
Comment.CONFIG = {
  componentName: 'comment',
  templateName: 'comment'
};
component.define(Comment);

/**
 * Test: Bring into the DOM
 */
// render using the template
comment = new Comment();
comment.render(playground);
try {
  comment.render();
  error('RENDERED_TWICE');
} catch(e) {
  if (e.message === 'RENDERED_TWICE') {
    error('You should not be able to re-render a component');
  }
}
if (!playground.contains(comment.elem)) {
  error('Element was not rendered into playground')
}
comment.destroy();
if (comment.elem) {
  error('Element was not destroyed');
}

comment = new Comment();
comment.attachToDefault();


}); // define