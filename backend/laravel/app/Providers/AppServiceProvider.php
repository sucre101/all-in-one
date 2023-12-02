<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Sanctum::ignoreMigrations(); remove unused migration table
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
