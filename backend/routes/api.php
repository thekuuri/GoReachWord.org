<?php

use App\Http\Controllers\RegistrationController;
use Illuminate\Support\Facades\Route;

Route::get('/registrations', [RegistrationController::class, 'index']);
Route::post('/register', [RegistrationController::class, 'store']);
