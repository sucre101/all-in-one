<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tasks')->insert([
            'user_id' => 1,
            'title' => 'Example task',
            'description' => 'Full text',
            'created_at' =>  \Carbon\Carbon::now(),
            'updated_at' =>  \Carbon\Carbon::now(),
        ]);
    }
}
