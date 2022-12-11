import {action, makeObservable, observable} from 'mobx';

export class TestModel {
  @observable title: string = 'initial title';

  constructor() {
    makeObservable(this);
  }

  @action
  setTitle(next: string) {
    this.title = next;
  }
}