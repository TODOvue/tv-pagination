import TvPagination from './components/TvPagination.vue'
import './style.scss'

(TvPagination as any).install = (app: any) => {
  app.component('TvPagination', TvPagination)
};

export const TvPaginationPlugin = {
  install(app: any) {
    app.component('TvPagination', TvPagination)
  }
}

export { TvPagination }
export default TvPagination
