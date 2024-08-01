import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
const Edit = ({ auth,item }) => {
    const { data, setData, post,put, errors, reset } = useForm({
        name: item.data.name || "",
        description:item.data.description || "",
        image_path:"",
        quantity:item.data.quantity || "",
        cost_price:item.data.cost_price || "",
        selling_price:item.data.selling_price || "",
        created_by: item.data.created_by || "",
    });
    const onSubmit = (e) => {
        e.preventDefault();

        put(route("item.update",item.id));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Edit "{item.data.name}" Item
                    </h2>
                </div>
            }
        >
            <Head title="Categories" />
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label htmlFor="item_name">Item name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="item_name"
                        value={item.data.name}
                        placeholder="Enter item name"
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </div>
                <InputError message={errors.name} className="mt-2" />


                {/* description */}
                <div class="form-group">
                    <label htmlFor="item_desc">Item description</label>
                    <textarea
                        type="text"
                        class="form-control"
                        id="item_desc"
                        value={data.description}
                        placeholder="Enter item description"
                        onChange={(e) => setData("description", e.target.value)}
                    />
                </div>
                <InputError message={errors.name} className="mt-2" />

            {/* Item image */}
                <div class="form-group">
                    <label htmlFor="item_image">Item Image</label>
                    <input
                        type="file"
                        class="form-control"
                        id="item_image"
                        placeholder="Pick file"
                        onChange={(e) => setData("image_path", e.target.files[0])}
                    />
                </div>
                <InputError message={errors.name} className="mt-2" />

                {/* quantity */}
                <div class="form-group">
                    <label htmlFor="item_qu">Item quantity</label>
                    <input
                        type="decimal"
                        class="form-control"
                        id="item_qu"
                        value={data.quantity}
                        placeholder="Enter item quantity"
                        onChange={(e) => setData("quantity", e.target.value)}
                    />
                </div>
                <InputError message={errors.name} className="mt-2" />

                {/* cost price */}
                <div class="form-group">
                    <label htmlFor="item_c">Item Cost price</label>
                    <input
                        type="text"
                        class="form-control"
                        id="item_c"
                        value={item.data.cost_price}
                        placeholder="Enter item cost price"
                        onChange={(e) => setData("cost_price", e.target.value)}
                    />
                </div>
                <InputError message={errors.name} className="mt-2" />

                {/* selling price */}
                <div class="form-group">
                    <label htmlFor="item_s">Item selling price</label>
                    <input
                        type="text"
                        class="form-control"
                        id="item_s"
                        value={item.data.selling_price}
                        placeholder="Enter item cost price"
                        onChange={(e) => setData("selling_price", e.target.value)}
                    />
                </div>
                <InputError message={errors.name} className="mt-2" />


                <div className="flex justify-center">
                    <button class="btn btn-primary">Submit</button>
                    <Link
                        href={route("item.index")}
                        class="btn btn-secondaryml-4"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default Edit;
