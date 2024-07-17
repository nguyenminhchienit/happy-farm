import { useState, useRef } from "react";
import InputForm from "../Input/InputForm";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { apiCreateBlog } from "../../../api/User";

const BlogAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState("");

  const storedData = localStorage.getItem("user");
  const dataObject = storedData ? JSON.parse(storedData) : null;

  const handleSubmitForm = async (data) => {
    // console.log("Data to be sent:", data);
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const content = editor.root.innerHTML;

      const formData = new FormData();

      if (data.thumb) {
        formData.append("image", data.thumb[0]);
      }

      formData.append("title", data?.title);
      formData.append("details", content);
      formData.append("userCreate", dataObject.idUser);

      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      apiCreateBlog(formData).then((res) => {
        console.log(res);
      });
    }
  };

  const quillRef = useRef(null);

  return (
    <div className="flex flex-col align-items-center">
      <h2 className="my-10 title font-bold text-3xl">Thêm bài viết</h2>
      <form
        className="w-full max-w-screen-xl flex flex-col gap-3"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <InputForm
              label={"Tên bài viết"}
              register={register}
              id={"title"}
              fw
              placeholder={"Tên bài viết"}
              errors={errors}
              validate={{ required: "Require" }}
            />

            <div className="flex flex-col gap-1">
              <label htmlFor="thumb">Tải hình ảnh bài viết</label>
              <input
                type="file"
                accept="image/*"
                id="thumb"
                {...register("thumb", { required: "Require" })}
              />
              {errors["thumb"] && (
                <small className="text-red-500 pt-1">
                  {errors["thumb"]?.message}
                </small>
              )}
            </div>

            <div className="mt-5 w-[1280px]">
              <ReactQuill
                ref={quillRef}
                placeholder="Start writing..."
                modules={{
                  toolbar: {
                    container: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ size: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "image", "video"],
                      ["code-block"],
                      ["clean"],
                    ],
                  },
                  clipboard: {
                    matchVisual: false,
                  },
                }}
                formats={[
                  "header",
                  "font",
                  "size",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "blockquote",
                  "list",
                  "bullet",
                  "indent",
                  "link",
                  "image",
                  "video",
                  "code-block",
                ]}
                theme="snow"
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
        </div>

        <button
          className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Thêm
        </button>
      </form>
    </div>
  );
};

export default BlogAdmin;
