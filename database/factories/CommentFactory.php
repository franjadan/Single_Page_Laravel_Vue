<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use App\User;
use App\Article;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence($nbWords = 5, $variableNbWords = true),
        'content' => $faker->text($maxNbChars = 120),
        'user_id' => User::all()->random(),
        'article_id' => Article::all()->random(),
    ];
});
