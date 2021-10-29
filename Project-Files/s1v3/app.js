const helloWorld = new Vue({
  el: '#helloVue',
  data: {
    title: 'Hello World!',
    message: 'This is my first Vue template!'
  }
})

const example = new Vue({
  el: '#example',
  data: {
    title: 'Hello',
    message: 'This is your daily cat-firmation!',
    name: 'Chewie',
    img: {
      src: 'https://placeimg.com/200/200/animals',
      alt: 'A placeholder image of animals'
    }
  }
})
