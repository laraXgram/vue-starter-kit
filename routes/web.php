<?php

use LaraGram\Support\Facades\Route;

Route::luna('/', 'Welcome', [
    'version' => app()->version(),
    'phpVersion' => PHP_VERSION,
])->name('home');
