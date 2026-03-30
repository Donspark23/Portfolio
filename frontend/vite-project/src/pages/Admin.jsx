import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("liveLink", form.liveLink);
    formData.append("githubLink", form.githubLink);
    formData.append("image", file);

    await axios.post("https://portfolio-knr6.onrender.com/api/projects", formData, {
      headers: {
        Authorization: token,
      },
    });

    alert("Project added!");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})}/>
      <input placeholder="Description" onChange={e => setForm({...form, description: e.target.value})}/>
      <input placeholder="Live Link" onChange={e => setForm({...form, liveLink: e.target.value})}/>
      <input placeholder="GitHub Link" onChange={e => setForm({...form, githubLink: e.target.value})}/>
      <input type="file" onChange={e => setFile(e.target.files[0])}/>
      <button>Add Project</button>
    </form>
  );
}
