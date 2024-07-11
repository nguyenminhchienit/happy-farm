import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../Input/InputForm";
import SelectForm from "../Input/SelectForm";

import Button from "../../Admin/Product/Button";
import { convertFileToBase64 } from "../../../utils/helpers";
import { apiCreateProduct } from "../../../api/Fertilizer";
import { getAllBrand } from "../../../api/Brand";
import { getAllOrigin } from "../../../api/OriginFertilizer";
import { getAllTypeProduct } from "../../../api/TypeFertilizer";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [preview, setPreview] = useState({
    thumb: "",
    images: [],
  });

  const [brand, setBrand] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [type, setType] = useState([]);

  // const [payload, setPayload] = useState({
  //   description: "",
  // });

  // const [inValidField, setInValidField] = useState([]);

  // const handleChangeValue = useCallback(
  //   (e) => {
  //     setPayload(e);
  //   },
  //   [payload]
  // );

  const handlePreviewThumb = async (file) => {
    const base64Thumb = await convertFileToBase64(file);
    setPreview((prev) => ({ ...prev, thumb: base64Thumb }));
  };

  const handlePreviewImages = async (files) => {
    const images = [];
    console.log(files);
    for (let file of files) {
      // if (file.type !== "image/png" && file.type !== "image/jpg") {
      //   toast.warning("File not supported");
      //   return;
      // }
      const base64 = await convertFileToBase64(file);
      images.push(base64);
    }
    setPreview((prev) => ({ ...prev, images: images }));
  };

  useEffect(() => {
    if (watch("thumb").length > 0) {
      handlePreviewThumb(watch("thumb")[0]);
    }
  }, [watch("thumb")]);

  useEffect(() => {
    if (watch("image").length > 0) {
      handlePreviewImages(watch("image"));
    }
  }, [watch("image")]);

  const handleAddProduct = async (data) => {
    const finalPayload = { ...data };
    console.log(finalPayload);
    const formData = new FormData();
    for (let i of Object.entries(finalPayload)) {
      formData.append(i[0], i[1]);
    }
    if (finalPayload.thumb) {
      formData.append("fileImageRepresent", finalPayload.thumb[0]);
    }
    if (finalPayload.image) {
      for (let item of finalPayload.image) {
        formData.append("fileImageOptional", item);
      }
    }

    for (const p of formData) {
      const name = p[0];
      const value = p[1];

      console.log(name, value);
    }

    apiCreateProduct(formData).then((response) => {
      if (response) {
        alert("thêm thành công");
        navigate("/admin/manage-product");
      }
    });
  };

  useEffect(() => {
    getAllBrand().then((response) => {
      setBrand(response.data);
    });
    getAllOrigin().then((res) => {
      setOrigin(res.data);
    });
    getAllTypeProduct().then((res) => {
      setType(res.data);
    });
  }, []);

  console.log(brand, origin, type);

  return (
    <div className="mx-5">
      <h1 className="h-[75px] flex items-center justify-between text-3xl font-bold border-b pl-4 text-gray-600">
        <span>Thêm phân bón</span>
      </h1>
      <div className="p-4">
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(handleAddProduct)}
        >
          <InputForm
            label={"Tên sản phẩm"}
            register={register}
            id={"nameFertilizer"}
            fw
            placeholder={"Tên sản phẩm"}
            errors={errors}
            validate={{ required: "Require" }}
          />
          <div className="flex gap-3">
            <InputForm
              label={"Giá"}
              register={register}
              id={"price"}
              fw
              style={"mt-2 flex-auto"}
              placeholder={"Giá"}
              errors={errors}
              validate={{ required: "Require" }}
            />

            <InputForm
              label={"Số lượng"}
              register={register}
              id={"nums"}
              fw
              style={"mt-2 flex-auto"}
              placeholder={"Số lượng"}
              errors={errors}
              validate={{ required: "Require" }}
            />
          </div>

          <InputForm
            label={"Mô tả"}
            register={register}
            id={"description"}
            fw
            style={"mt-2 flex-auto"}
            placeholder={"Mô tả sản phẩm"}
            errors={errors}
            validate={{ required: "Require" }}
          />

          <InputForm
            label={"Chi tiết"}
            register={register}
            id={"details"}
            fw
            placeholder={"Chi tiết sản phẩm"}
            errors={errors}
            validate={{ required: "Require" }}
          />

          <div className="flex gap-3">
            <SelectForm
              label={"Nguồn gốc"}
              register={register}
              id={"originFer"}
              fw
              style={"mt-2 flex-auto"}
              errors={errors}
              options={origin?.map((item) => {
                return {
                  text: item.nameOrigin,
                  value: item.idOrigin,
                };
              })}
            />

            <SelectForm
              label={"Loại phân bón"}
              register={register}
              id={"type"}
              fw
              style={"mt-2 flex-auto"}
              errors={errors}
              options={type?.map((item) => {
                return {
                  text: item.nameTypeFertilizer,
                  value: item.idTypeFertilizer,
                };
              })}
            />

            <SelectForm
              label={"Thương hiệu"}
              register={register}
              id={"brandName"}
              fw
              style={"mt-2 flex-auto"}
              errors={errors}
              options={brand?.map((item) => {
                return {
                  text: item.nameBrand,
                  value: item.idBrand,
                };
              })}
            />
          </div>

          {/* <div className="flex gap-3">
           
            <InputForm
              label={"Quantity"}
              register={register}
              id={"quantity"}
              fw
              style={"mt-2 flex-auto"}
              placeholder={"Quantity of new product"}
              errors={errors}
              validate={{ required: "Require" }}
            />

          </div>
          <div className="flex gap-3">
            <SelectForm
              label={"Category"}
              register={register}
              id={"category"}
              fw
              style={"flex-auto"}
              errors={errors}
              options={categories?.map((item) => {
                return {
                  text: item.title,
                  value: item._id,
                };
              })}
            />
            <SelectForm
              label={"Brand"}
              register={register}
              id={"brand"}
              fw
              style={"flex-auto"}
              errors={errors}
              options={categories
                ?.find((cate) => cate._id === watch("category"))
                ?.brand?.map((item) => {
                  return {
                    text: item,
                    value: item,
                  };
                })}
            />
          </div>
          */}
          <div className="flex gap-1 flex-col">
            <label htmlFor="thumb">Tải hình ảnh đại diện của sản phẩm</label>
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
          {preview.thumb && (
            <div>
              <img
                src={preview.thumb}
                alt="thumb"
                className="my-4 w-[100px] object-cover"
              />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label htmlFor="thumb">Tải hình ảnh sản phẩm</label>
            <input
              type="file"
              accept="image/*"
              id="image"
              {...register("image", { required: "Require" })}
              multiple
            />
            {errors["image"] && (
              <small className="text-red-500 pt-1">
                {errors["image"]?.message}
              </small>
            )}
          </div>
          {preview.images.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {preview.images.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    alt="images"
                    className="my-4 w-[100px] object-cover"
                  />
                );
              })}
            </div>
          )}
          <Button name={"Thêm sản phẩm"} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
