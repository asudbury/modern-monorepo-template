// Compatible error boundary for TanStack Router
export function ErrorBoundaryComponent({ error }: { error: Error }) {
  return (
    <div role="alert" aria-live="assertive">
      <h1>Something went wrong.</h1>
      <pre>{error.message}</pre>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
}
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  { children?: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" aria-live="assertive">
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.message}</pre>
          <button onClick={this.handleReset}>Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}
