import React from "react";
import "./AppErrorBoundary.scss";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

class AppErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="AppErrorBoundary">
          <div>Oops, something went wrong while fetching the data.</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
