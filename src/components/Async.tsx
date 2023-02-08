// AsyncComponent.tsx
import React from "react";
import Loader from './Loader';


interface AsyncComponentState {
  Component: JSX.Element;
};
interface IAsyncComponent {
  (importComponent: () => Promise<{ default: React.ComponentType<any> }>): React.ComponentClass | React.FC;
}

const asyncComponent: IAsyncComponent = (importComponent) => {
  class AsyncFunc extends React.PureComponent<any ,AsyncComponentState> {
    mounted: boolean = false;

    constructor(props: any) {
      super(props);
      this.state = {
        Component: <></>
      };
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    async componentDidMount() {
      this.mounted = true;
      const { default: Component } = await importComponent();
      if (this.mounted) {
        this.setState({
          Component: <Component {...this.props} />
        });
      }
    }

    render() {
      const { Component } = this.state;
      return Component ? Component : <Loader/>
    }
  }
  return AsyncFunc;
}

export default asyncComponent;