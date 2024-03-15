<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class CategorySeeder extends Seeder
{
    // As this architecture was set, we need a "no category" category, for all the
    // products that don't have a category.
    const NO_CATEGORY_ID = 0;
    const NO_CATEGORY_NAME = "NO CATEGORY";

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Check if the "no category" category exists, and create it.
        if (!Category::find(CategorySeeder::NO_CATEGORY_ID)) {
            $this->command->info("Generating 'no category' category...");
            Category::factory()->create([
                'id' => CategorySeeder::NO_CATEGORY_ID,
                'name' => CategorySeeder::NO_CATEGORY_NAME,
            ]);
        } else {
            $this->command->info("CategorySeeder: 'no category' category exists.");
        }

        // Generic Random Seeding
        Category::factory()->count(10)->create();
    }
}
