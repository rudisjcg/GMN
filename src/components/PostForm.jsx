"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default  function () {
    const [images, setImages] = useState([]);
    const [fileName, setFileName] = useState("");
    const likes = [];
    const subComments = [];
    const [comment, setComment] = useState("");
    const {data: session} = useSession();
    const [isUploading, setIsUploading] = useState(false);
    
    async function handleSubmitComment(event) {
      event.preventDefault();
      const commentData = {
        comment,
        images,
        likes,
        subComments,
        email: session?.user?.email
      };
      if (session) {
        try {
          await axios.post("/api/comment", commentData);
        } catch (error) {
          console.error(error);
        }
      }
      setImages([]);
      setFileName("");
      setComment("");
    }

    async function uploadImages(ev) {
      const files = ev.target?.files;
      if (files?.length > 0) {
        setIsUploading(true);
        const data = new FormData();
        for (const file of files) {
          data.append("file", file);
        }
        const res = await axios.postForm("/api/upload", data);
        setImages((oldImages) => {
          return [...oldImages, ...res.data.links];
        });
        setIsUploading(false);
      }  
    }

    
    return (
        <form className="flex flex-col" onSubmit={handleSubmitComment}>
          <label htmlFor="comment">Comment</label>
          <textarea
            maxLength="200"
            type="text"
            className=""
            id="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <div>
            {images?.length > 0 &&
              images?.map((image) => (
                <picture  key={image.id}>

                  <img
                   
                    src={image}
                    width={100}
                    height={100}
                    alt=""
                  />
                </picture>
              ))}
          </div>
          <div>
            <input
              type="file"
              onChange={uploadImages}
            />

          </div>
            <button type="submit">Submit</button>
        </form>
    )
}