import { useEffect, useState } from "react";
import { apiGetBlog } from "../../../api/User";
import { useParams } from "react-router-dom";

const DetailBlog = () => {
  const [content, setContent] = useState("");

  const { id } = useParams();

  useEffect(() => {
    apiGetBlog(id).then((res) => {
      setContent(res.data);
    });
  }, [id]);
  return (
    <div className="mt-[200px]">
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: content?.details }}
      />
    </div>
  );
};

export default DetailBlog;
