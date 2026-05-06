// ⏸️ WORKSHOP STEP 9: Create Error Boundary
// TODO: Import Component from 'react'

import { Component } from "react";

// TODO: Create ErrorBoundary class component
/* Steps:
  1. Extend Component
  2. Add constructor with state { hasError: false, error: null }
  3. Implement getDerivedStateFromError
  4. Implement componentDidCatch
  5. Render fallback UI when hasError is true
  6. Otherwise render children
*/

// Placeholder - replace with class component
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // show error in the UI
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error }
  }
  // show error from console
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-md w-full">
            <div className="text-center">
              <div className="text-6xl mb-4"> ⚠️</div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-900 dark:text-white mb-6">
                {this.state.error.message || "An unexpected error occurred"}
              </p>
              <button
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                onClick={() => window.location.reload()}
              >
                Reload Page
              </button>

            </div>
          </div>
        </div>
      )
    }
    return this.props.children;
  }
}
