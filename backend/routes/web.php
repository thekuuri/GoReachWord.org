<?php

use Illuminate\Support\Facades\Artisan;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/run-migrations', function () {
    try {
        Artisan::call('migrate', ['--force' => true]);
        return "<h1>Migrations ran successfully</h1><pre>" . Artisan::output() . "</pre>";
    } catch (\Exception $e) {
        return "<h1>Error running migrations</h1><pre>" . $e->getMessage() . "</pre>";
    }
});

Route::get('/clear-cache', function () {
    try {
        Artisan::call('cache:clear');
        Artisan::call('config:clear');
        Artisan::call('route:clear');
        Artisan::call('view:clear');
        return "<h1>Cache cleared successfully</h1>";
    } catch (\Exception $e) {
        return "<h1>Error clearing cache</h1><pre>" . $e->getMessage() . "</pre>";
    }
});
