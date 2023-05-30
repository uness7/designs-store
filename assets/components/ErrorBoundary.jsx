import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log("There was an error that was caught", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>
                        There was an error. <Link to="/">Go to homepage</Link>
                    </h2>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
