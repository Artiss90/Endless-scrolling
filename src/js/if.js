import InfiniteScroll from 'infinite-scroll';

var unsplashID = '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';
// const KEY = 'f08cee847cfc4025a18e3751e639ba81';

const infScroll = new InfiniteScroll('.test-container', {
  responseType: 'text',
  history: false,
  path() {
    //const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${KEY}`; /*ошибка кроссервера, не исправляемая так как нет доступа к АРI*/
    const url = 'https://api.unsplash.com/photos?client_id=' + unsplashID + '&page=' + this.pageIndex;
    return url;
  },
});

infScroll.loadNextPage();

setTimeout(() => {
  infScroll.loadNextPage();
}, 1000);

infScroll.on('load', (response, path) => {
  console.log(JSON.parse(response));
  console.log(path);
  // тут по шаблону сделали строку с тегами
  // потом кинули в фрагмент
  // фрагмент передали в infScroll.appendItems(фрагмент)
});


const markup = '<p>qweqweqwe</p>';
const fragment = new DocumentFragment();
const d = document.createElement('div');
fragment.innerHTML = markup;
console.log(fragment);
