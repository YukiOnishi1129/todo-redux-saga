<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('todos')->insert([
            'title' => 'Title1',
            'content' => 'Title1 content'
        ]);
        DB::table('todos')->insert([
            'title' => 'Title2',
            'content' => 'Title2 content detail'
        ]);
    }
}
