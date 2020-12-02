/*
 * Typical Observer's registration
 */
const callback = (entries) => {
  // entries: Array of observed elements
  entries.forEach(entry => {
      // Here we can do something with each particular entry
      if (entry.isIntersecting) {
        console.log('Привет из колбека в forEach');
    console.log(entry.target);
    }
  });
};

const options = {
  // rootMargin: '100px',
  threshold: 0.5,
};
const observer = new IntersectionObserver(callback, options);
// Now we should tell our Observer what to observe
const sentinel = document.querySelector('#sentinel');
observer.observe(sentinel);


/*
 * Typical Observer's registration
 */

// const callback = (entries, io) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log('Привет из колбека в forEach');
//       console.log(entry.target);
//     }
//   });
// };
// const options = {
//   // rootMargin: '100px',
//   // threshold: 0.5,
// };
// const observer = new IntersectionObserver(callback, options);

// const sentinel = document.querySelector('#sentinel');
// observer.observe(sentinel);
