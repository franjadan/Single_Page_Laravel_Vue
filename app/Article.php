<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title', 'content', 'thumbnail', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /*
        Cuando accedamos al artículo, en vez de a través del id como
        /article/1 accedemos a través del slug que hemos definido
    */
    public function getRouteKeyName(){
        return 'slug'; 
    }
}
