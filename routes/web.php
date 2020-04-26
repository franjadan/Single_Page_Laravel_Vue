<?php

Auth::routes();

Route::get('/{any}', 'HomeController@index')->where('any', '.*'); //para que pueda haber más de un parámetro


