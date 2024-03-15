import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PencilIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        <div className="flex px-8">
                            <Link href={route("products.create")} className="border-2 border-neutral-300 bg-neutral-100 rounded py-2 px-4 text-center text-neutral-500 hover:bg-pig hover:border-red-800 hover:text-red-800 transition-all">
                                <PencilIcon className="h-16 mx-auto" />
                                <h1 className="text-xl font-bold leading-tight">
                                    Create Product
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
