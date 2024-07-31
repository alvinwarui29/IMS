<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(),
            'description' => fake()->realText(),
            'image_path' => fake()->imageUrl(),
            'quantity' => fake()->numberBetween(1, 30),
            'cost_price' => fake()->randomFloat(2, 10, 1000), 
            'selling_price' => fake()->randomFloat(2, 10, 1000), 
            'category_id' => fake()->numberBetween(1, 4),
            'created_by' => 1,
            'updated_by' => 1,
        ];
    }
}
