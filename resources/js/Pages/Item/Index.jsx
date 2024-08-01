import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const index = ({ auth, items }) => {
    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <div className="flex justify-between items">
                        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                            Items
                        </h2>
                        <Link
                            type="button"
                            class="btn btn-success"
                            href={route("item.create")}
                        >
                            Add new
                        </Link>
                    </div>
                }
            >
                <Head title="Items" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <table className="table">
                                <thead>
                                    {/* <pre>
                                        {JSON.stringify(items, undefined, 2)}
                                    </pre> */}
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">CreatedBy</th>
                                        <th scope="col">Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.data.map((item) => (
                                        <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.createdBy.name}</td>
                                            <td>
                                                <img
                                                    src={item.image_path}
                                                    width={50}
                                                    height={50}
                                                    alt={item.name}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default index;
