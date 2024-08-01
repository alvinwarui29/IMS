import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";

const index = ({ auth, items,queryParams= null }) => {
    queryParams = queryParams ||{}
    const searchFieldChanged = (name,value)=>{
        if(value){
            queryParams[name]= value
        }else{
            delete queryParams[name]
        }
        router.get(route('item.index'),queryParams)
    }

    const onKeyPress=(name,e)=>{
        if(e.key !== 'Enter') return;
        searchFieldChanged(name,e.target.value);
    }

    const sortChaged = (name)=>{
        if(name === queryParams.sort_field){
            if(queryParams.sort_direction ==="asc"){
                queryParams.sort_direction = "desc"
            }else{
                queryParams.sort_direction = "asc"
            }
        }else{
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc"
        }
        router.get(route('item.index'),queryParams)
    }

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
                                        <th className="cursor-pointer" onClick={(e)=>sortChaged("id")} scope="col">#</th>
                                        <th className="cursor-pointer" onClick={(e)=>sortChaged("name")} scope="col">Name</th>
                                        <th className="cursor-pointer" onClick={(e)=>sortChaged("created_by")} scope="col">CreatedBy</th>
                                        <th scope="col">Image</th>
                                    </tr>
                                </thead>
                                <thead>
                                    
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">
                                            <TextInput className="w-full "
                                            placeholder ="Item name"
                                            onBlur={e=> searchFieldChanged('name',e.target.valur)}
                                            defaultValue= {queryParams.status}
                                            onKeyPress={e=>onKeyPress('name',e)}
                                              />
                                        </th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
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
