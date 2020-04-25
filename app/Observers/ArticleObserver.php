<?php

namespace App\Observers;

use Illuminate\Support\Str;
use App\Article;

class ArticleObserver
{
    public function saving($article)
    {
        $slug = Str::slug($article->title ,'-');

        if(Article::where('slug', $slug)->exists()){
            $slug = $slug . uniqid();
        }

        $article->slug = $slug;
    }
}
