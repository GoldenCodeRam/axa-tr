<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;
use function PHPUnit\Framework\assertNotNull;

const PRODUCT_REQUEST_SEED_AMOUNT = 100;
const API_URL = 'https://fakestoreapi.com/products?limit=' . PRODUCT_REQUEST_SEED_AMOUNT;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // See more: https://fakestoreapi.com/docs
        // cURL external API for initial seeding of products.
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, API_URL);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HEADER, false);

        Log::notice(sprintf("ProductSeeder: cURL %s", API_URL));
        $data = curl_exec($curl);
        curl_close($curl);

        if ($data) {
            $jsonObject = json_decode($data);

            foreach($jsonObject as &$object) {
                $product = Product::factory()->create([
                    "name" => $object->title,
                    "image_url" => $object->image,
                ]);
                $category = Category::inRandomOrder()->first();
                $product->categories()->save($category);
            }
            $this->command->info("New " . sizeof($jsonObject) . " objects.");
        } else {
            $this->command->error("cURL error.");
        }
    }
}
