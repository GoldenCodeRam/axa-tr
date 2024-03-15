<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    protected $table = "product";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'price',
        'image_url',
    ];

    protected $hidden = [
        'id',
    ];

    public function categories(): BelongsToMany {
        return $this->belongsToMany(Category::class, ProductCategory::class);
    }
}
