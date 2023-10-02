import mongoose from "mongoose";
const blogSchema = mongoose({
  newsTitle: { type: String },
  image: { type: String },
  authorName: { type: String },
  profilePicture: { type: String },
  email: { type: String },
  paragraph1: { type: String },
  paragraph2: { type: String },
});
const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
export default Blogs;
