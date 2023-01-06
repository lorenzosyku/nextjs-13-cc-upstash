"use client";
import React, { FormEvent } from "react";

function productForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
      price: { value: number };
    };
    //console.log(target.title.value);

    const message = {
      title: target.title.value,
      description: target.description.value,
      price: target.price.value,
    };

    await fetch("/api/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    target.title.value = "";
    target.description.value = "";
    target.price.value = 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="title" />
      <input name="description" type="text" placeholder="description" />
      <input name="price" type="number" placeholder="price" />
      <button> add to redis db</button>
    </form>
  );
}

export default productForm;
