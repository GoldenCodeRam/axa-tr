<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product', function (Blueprint $table) {
            // For more information:
            // https://stackoverflow.com/questions/52414414/best-practices-on-primary-key-auto-increment-and-uuid-in-sql-databases
            $table->id();
            $table->uuid()->unique();

            // Here takes part an interesting conversation about how to store
            // money information in a database. I'll go with the DECIMAL approach.
            // See more:
            //  https://cardinalby.github.io/blog/post/best-practices/storing-currency-values-data-types/
            $table->decimal('price', 19, 2);

            $table->string('name');
            $table->string('image_url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');
    }
};
