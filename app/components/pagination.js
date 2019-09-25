import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	tagName: "section",
  page: parseInt(1),
	paginateBy: parseInt(20),

	// Calculate page count
	pageCount: computed(function(){
		return Math.floor(this.get('items.length') / this.get('paginateBy'));
	}),

	// Serve paginated items
  paginatedItems: computed('items', 'page', function(){
    var start = (this.get('page') - 1) * this.get('paginateBy');
    var end = start + this.get('paginateBy');
    return this.get('items').slice(start, end);
  }),

	// Check to see if on first or last page
  showNext: computed('page', function(){
    return (this.get('page') < this.get('pageCount'));
  }),
  showPrevious: computed('page', function(){
    return (this.get('page') > 1);
  }),

  actions: {
    goNext() {
      if((this.get('page') + 1) <= this.get('pageCount')) {
        this.set('page', (this.get('page') + 1));
      }
    },
    goPrevious() {
      if(this.get('page') > 0) {
        this.set('page', (this.get('page') - 1));
      }
    }
  }
});
