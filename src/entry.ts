import type { App, Plugin } from 'vue'
import _TvPagination from './components/TvPagination.vue'
import './style.scss'

const TvPagination = _TvPagination as typeof _TvPagination & Plugin;
TvPagination.install = (app: App) => {
  app.component('TvPagination', TvPagination)
};

export { TvPagination }

export const TvPaginationPlugin: Plugin = {
  install: TvPagination.install
};
export default TvPagination;

declare module 'vue' {
  export interface GlobalComponents {
    TvPagination: typeof TvPagination;
  }
}
