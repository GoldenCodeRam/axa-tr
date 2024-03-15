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
        Schema::create('role_resource', function (Blueprint $table) {
            $table->boolean('can_create');
            $table->boolean('can_read');
            $table->boolean('can_update');
            $table->boolean('can_delete');
            $table->timestamps();

            $table->foreignId('role_id') ->constrained(table: 'role');
            $table->foreignId('resource_id') ->constrained(table: 'resource');
            $table->primary(['role_id', 'resource_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('role_resource');
    }
};
