import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Dashboard({ auth, totalItems, totalQuantity }) {
    useEffect(() => {
        console.log('Total Items:', totalItems);
        console.log('Total Quantity:', totalQuantity);
    }, [totalItems, totalQuantity]);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
            
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
                    <div className="bg-blue-950 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-yellow-400 dark:text-gray-100">
                        <h3 className="p-6 text-yellow-400 dark:text-gray-100">
                            
                            Total Inventory items
                        </h3>
                        <p className="px-6 text-yellow-400 dark:text-gray-100">{totalItems}</p>
                        </div>
                    </div>
                    <div className="bg-blue-950 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-yellow-400 dark:text-gray-100">
                        <h3 className="p-6 text-yellow-400 dark:text-gray-100">
                            
                            Total quantity Inventory items
                        </h3>
                        <p className="px-6 text-yellow-400 dark:text-gray-100">{totalQuantity}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
