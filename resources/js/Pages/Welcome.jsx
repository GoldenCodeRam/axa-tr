import { Link, Head } from '@inertiajs/react';
import Glide from "@glidejs/glide";

import { useEffect, useRef, useState } from 'react'
import MainHeader from '@/Components/MainHeader';
import MainFooter from '@/Components/MainFooter';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';


export default function Welcome({ auth, laravelVersion, phpVersion, categories }) {
    console.log(categories);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <MainHeader />
            <main className="flex-1 container mx-auto px-12">
                <div className="py-32 grid grid-cols-12 justify-center">
                    <div className="col-span-12 md:col-span-6 items-end">
                        <img src="assets/img/logo.svg" className="mx-auto md:me-12 h-72" />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex items-center">
                        <h1 className="mx-auto md:mx-0 text-6xl font-bold text-center md:text-start">Welcome<br /> to our store!</h1>
                    </div>
                </div>
                <CategoryProductList categories={categories} />
            </main>
            <MainFooter />
        </>
    )
}

function CategoryProductList({ categories }) {
    let content = [];
    for (var category of categories) {
        content.push(
            <div className="py-8">
                <h1 className="text-3xl font-bold pb-1">{category.name}</h1>
                <div className="bg-neutral-100 p-4">
                    <ProductsCarousel products={category.products} />
                </div>
            </div>
        );
    }

    return content;
}

function ProductsCarousel({ products }) {
    const carousel = useRef(null);
    useEffect(() => {
        new Glide(carousel.current, {
            rewind: false,
            perView: 5,
            bound: true,
            breakpoints: {
                1280: {
                    perView: 4
                },
                1024: {
                    perView: 3,
                },
                768: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                }
            }
        }).mount();
    });

    let content = [];
    for (var product of products) {
        content.push(
            <li key={product.uuid} className="glide__slide bg-white border rounded p-4 h-auto flex flex-col justify-center">
                <img src={product.image_url} className="h-24 mb-3 w-auto mx-auto" />
                <h1 className="text-center">
                    {product.name}
                </h1>
            </li>
        );
    }
    content.push(
        <li key={0} className="glide__slide bg-white border rounded p-4 h-auto flex flex-col justify-center">
            Ver más.
        </li>
    );

    return (
        <div ref={carousel} className="glide">
            <div className="glide__track bg-neutral-100 rounded" data-glide-el="track">
                <ul className="glide__slides">
                    {content}
                </ul>
            </div>

            <div className="glide__arrows text-center pt-1" data-glide-el="controls">
                <button className="" data-glide-dir="<">
                    <ChevronLeftIcon className="h-6" />
                </button>
                <button className="" data-glide-dir=">">
                    <ChevronRightIcon className="h-6" />
                </button>
            </div>
        </div>
    );
}
