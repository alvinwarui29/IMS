import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
const Create = ({ auth }) => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        created_by: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();

        post(route("category.store"));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Create new Category
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
                        value={data.name}
                        placeholder="Enter category name"
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </div>
                <InputError message={errors.name} className="mt-2" />
                <div className="flex justify-center">
                    <button class="btn btn-primary">Submit</button>
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

export default Create;
