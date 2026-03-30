import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://portfolio-knr6.onrender.com/api/projects";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(API).then(res => setProjects(res.data));
  }, []);

  const handleView = async (id, link) => {
    await axios.put(`${API}/${id}/view`);
    window.open(link, "_blank");
  };

  return (
    <div>
      {projects.map(p => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>

          {p.image && (
            <img src={`http://localhost:5000/uploads/${p.image}`} width="200" />
          )}

          <button onClick={() => handleView(p._id, p.liveLink)}>
            Live
          </button>

          <a href={p.githubLink}>GitHub</a>
          <p>Views: {p.views}</p>
        </div>
      ))}
    </div>
  );
}
