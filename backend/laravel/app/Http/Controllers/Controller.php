<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function __construct(Request $request)
    {
        if (!$request->isJson() && $request->getScriptName() !== 'artisan') {
            abort(403, 'Sorry. Who are you ?');
        }
    }
}
