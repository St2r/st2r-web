import {injectable} from 'inversify';
import {makeObservable, observable} from 'mobx';

@injectable()
export class ArticleRepo {
  @observable articles = [];

  constructor() {
    makeObservable(this);
  }
}
