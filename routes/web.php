<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserRolesController;
use App\Http\Controllers\MainPageController;

Route::get('/', [MainPageController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('posts', PostController::class);
    Route::resource('roles', RoleController::class);
    Route::resource('user-roles', UserRolesController::class);

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
