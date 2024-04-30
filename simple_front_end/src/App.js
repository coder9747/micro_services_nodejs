import React, { useEffect, useState } from 'react'

const App = () => {
  const [postInfo, setPostInfo] = useState("");

  const [allPost, setAllPost] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:10000/get-post");
      const data = await response.json();
      setAllPost(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])


  async function handleClick() {
    try {

      const response = await fetch("http://localhost:10000/create-post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postInfo }),
        });
      const data = await response.json();
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <input value={postInfo} name='content' onChange={(e) => setPostInfo(e.target.value)} />
      <button onClick={handleClick}>Create Post</button>

      {
        allPost.map((item) => {
          return <div style={{backgroundColor:'cyan'}} key={item.id}>
            <p>{item.content}</p>
            <input />
            <button>Comment</button>
          </div>
        })
      }
    </div>

  )
}

export default App
