import FileInput from '@/Components/FileInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name: null,
        price: null,
        image: null,
    });

    function submit(e) {
        e.preventDefault();

        post(route('products.store'));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Product</h2>}
        >
            <Head title="Create Product" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <section className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        <div className="mx-auto max-w-xl">
                            <header className="pb-8">
                                <h2 className="text-lg font-medium text-gray-900">Create Product</h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Create different products, for them to be shown in the front page.
                                </p>
                            </header>
                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        className="mt-1 block w-full"
                                        required
                                        isFocused
                                        autoComplete="name"
                                        onChange={(e) => setData('name', e.target.value)}
                                    />

                                    <InputError className="mt-2" message={errors.name} />
                                </div>
                                <div>
                                    <InputLabel htmlFor="price" value="Price" />

                                    <TextInput
                                        id="price"
                                        className="mt-1 block w-full"
                                        required
                                        isFocused
                                        onChange={(e) => setData('price', e.target.value)}
                                    />

                                    <InputError className="mt-2" message={errors.price} />
                                </div>
                                <div>
                                    <InputLabel htmlFor="image" value="Image" />

                                    <FileInput
                                        id="image"
                                        className="mt-2"
                                        required
                                        onChange={(e) => setData('image', e.target.files[0])}
                                    />

                                    <InputError className="mt-2" message={errors.image} />
                                </div>
                                <PrimaryButton>Create</PrimaryButton>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
