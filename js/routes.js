page.base("/market");

page('/', (e) => {
  		
page.redirect('/home');


});



page('*', (e) => {
  console.log(e);
});


page();