import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-pagination',
    configKey: 'tvPagination',
  },
  setup(_options, nuxt) {
    const paginationCss = '@todovue/tv-pagination/style.css';
    const buttonCss = '@todovue/tv-button/style.css';
    
    const pushUnique = (path) => {
      if (!nuxt.options.css.includes(path)) {
        nuxt.options.css.push(path);
      }
    };
    
    pushUnique(paginationCss);
    pushUnique(buttonCss);
  }
})
