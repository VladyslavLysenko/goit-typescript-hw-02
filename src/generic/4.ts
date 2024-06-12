/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props<T> {
  title: T;
}

class Component<T> {
  constructor(private props: Props<T>) { }

  getProps() {
    return this.props;
  }
}

class Page extends Component<string> {
  pageInfo() {
    console.log(this.getProps().title);
  }
}

export {};