import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
const Edit = ({ auth, category }) => {
    const { data, setData,post, put, errors, reset } = useForm({
        name: category.name || "",
        created_by: category.created_by || "",
        _method:"PUT"
    });
    const onSubmit = (e) => {
        e.preventDefault();
        put(route("category.update",{ category: category.data.id }));

    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Edit {category.name}
                    </h2>
                </div>
            }
        >
            <Head title="Categories" />
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label htmlFor="category_name">Category name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="category_name"
                        value={data.name || ""}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </div>
                <InputError message={errors.name} className="mt-2" />
                <div className="flex justify-center">
                    <button class="btn btn-primary" type="submit">Submit</button>
                    <Link
                        href={route("category.index")}
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
