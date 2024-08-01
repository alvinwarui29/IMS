import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
const index = ({ auth }) => {
    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <div className="flex justify-between items">
                        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Categories
                    </h2>
                    <Link type="button" class="btn btn-success" href={route("category.create")}>
                        Add new
                    </Link>
                    </div>
                }
            >
                <Head title="Categories" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Created By</th>
                                        {/* <th scope="col">Handle</th> */}
                                    </tr>
                                </thead>
                                {/* <tbody>
                                    {categories &&
                                        categories.data &&
                                        categories.data.map((category) => (
                                            <tr key={category.id}>
                                                <th scope="row">
                                                    {category.id}
                                                </th>
                                                <td>{category.name}</td>
                                                <td>
                                                    {category.createdBy.name}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody> */}
                            </table>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
            
        </div>
        
    );
    
};


export default index;
