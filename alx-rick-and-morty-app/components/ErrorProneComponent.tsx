import React from "react";

const ErrorProneComponent: React.FC = () => {
  throw new Error("Test error for monitoring");
  return <div>This will never render</div>;
};

export default ErrorProneComponent;
