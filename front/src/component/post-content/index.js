import "./index.css";
import Grid from "../grid";

export default function PostContent({ username, date, text }) {
  return (
    <Grid>
      <div className="post_content">
        <span className="post_content_username">@{username}</span>
        <span className="post_content_date">{date}</span>
      </div>
      <p className="post_content_text">{text}</p>
    </Grid>
  );
}
