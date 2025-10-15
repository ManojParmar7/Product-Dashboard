import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import NoImage from "../../components/Assets/emtyImage.png";

const productSchema = yup.object().shape({
  title: yup.string().required("Product Title is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Product Price is required"),
  description: yup.string(),
  category: yup.string().required("Product Category is required"),
  image: yup.mixed(),
});

export default function ProductForm({
  mode = "create",
  onClose,
  form,
  onSubmit,
  categoryOptions = [],
  isLoading = false,
}) {
  const [imagePreview, setImagePreview] = useState(form.image || NoImage);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      title: form.title || "",
      price: form.price || "",
      description: form.description || "",
      category: form.category || "",
      image: form.image || null,
    },
  });

  const imageFile = watch("image");

  useEffect(() => {
    if (imageFile && imageFile.length > 0 && imageFile[0] instanceof File) {
      const file = imageFile[0];
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else if (typeof imageFile === "string") {
      setImagePreview(imageFile);
    } else {
      setImagePreview(NoImage);
    }
  }, [imageFile]);

  const handleFormSubmit = (data) => {
    const finalData = {
      ...data,
      image:
        data.image && data.image[0] instanceof File
          ? data.image[0]
          : data.image,
    };
    onSubmit(finalData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              label="Product Title"
              {...field}
              error={errors.title?.message}
            />
          )}
        />

        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <Input
              label="Product Price"
              type="number"
              {...field}
              error={errors.price?.message}
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Input
              label="Product Description"
              {...field}
              error={errors.description?.message}
            />
          )}
        />

        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              label="Product Category"
              options={categoryOptions}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              error={errors.category?.message}
            />
          )}
        />

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Image
          </label>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files)}
                className="block w-full text-sm text-gray-700 border rounded-md px-3 py-2"
              />
            )}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <p className="mb-2 font-medium">Image Preview:</p>
        <img
          src={imagePreview || NoImage}
          alt="Product Preview"
          className="w-40 h-40 object-cover border rounded"
        />
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded"
          disabled={isLoading}
        >
          Cancel
        </button>

        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
          color={
            mode === "create"
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }
        >
          {mode === "create" ? "Create" : "Update"}
        </Button>
      </div>
    </form>
  );
}
