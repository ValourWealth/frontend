import axios from "axios";
import { useEffect, useState } from "react";

const API_URL =
  "https://backend-production-1e63.up.railway.app/api/editors-choice/";

function EditorChoice() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <section className="section_edit_choice">
      <div className="container">
        <div className="sec_heading">
          <h2 className="pb-4">Editors' Choice</h2>
        </div>
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-lg-3">
              <div className="editors-choice">
                <a href={`/blog/${post.slug}`}>
                  <div className="choice_img">
                    <img
                      className="obj_fit"
                      src={post.image_url}
                      alt="editorChoiceimg"
                    />
                  </div>
                  <div className="editor_desc">
                    <a href="/blog-details">
                      <h3>{post.category}</h3>
                      <p>{post.description}</p>
                    </a>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EditorChoice;
