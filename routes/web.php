<?php

Route::get('/{any}', 'HomeController@index')->where('any', '.*'); //para que pueda haber más de un parámetro

Auth::routes();

