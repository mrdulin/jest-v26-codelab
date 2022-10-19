import React from "react";

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() { }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert">
          <div>
            <h1>Something went wrong.</h1>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again?
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}