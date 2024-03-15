<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Category;
use App\Models\Product;
use Database\Seeders\CategorySeeder;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Products/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $product = Product::factory()
            ->create([
                'name' => $request->get('name'),
                'price' => $request->get('price'),
            ]);

        // Set the default product category.
        // TODO: CategorySeeder should not have the NO_CATEGORY_ID constant, it
        // should be in the Category class.
        $product->categories()->save(Category::find(CategorySeeder::NO_CATEGORY_ID));

        // Change the product default placeholder image url, with the url of
        // the uploaded image.
        $image_url = $request->file('image')->store('products/img', 'public');
        $product->image_url = asset('storage/' . $image_url);
        $product->save();

        return to_route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
