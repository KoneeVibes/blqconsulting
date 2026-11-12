const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#primary-nav');
menuButton.addEventListener('click',()=>{
  const expanded=menuButton.getAttribute('aria-expanded')==='true';
  menuButton.setAttribute('aria-expanded',String(!expanded));
  menuButton.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');
  navigation.classList.toggle('is-open',!expanded);
});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Open navigation');
  navigation.classList.remove('is-open');
}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#contact-form').addEventListener('submit',event=>{
  event.preventDefault();
  document.querySelector('.form-status').textContent='Thanks for your interest. The enquiry form needs a contact service connected before it can send messages.';
});
