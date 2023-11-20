import "./index.css";

export const LOAD_STATUS = {
  PROGRESS: "progress",
  SUCCESS: "success",
  ERROR: "erorr",
};

export function Alert({ message, status = "default" }) {
  return <div className={`alert alert_${status}`}>{message}</div>;
}

export function Loader() {
  return <div className="loader"></div>;
}

export function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton_item"></div>
      <div className="skeleton_item"></div>
      <div className="skeleton_item"></div>
    </div>
  );
}
