<?php

namespace App\Http\Controllers;

use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function __construct(Request $request)
    {
        if (!$request->hasHeader('authorization')) {
            abort(401, 'Sorry. Who are you ?');
        }

        $token = explode(' ', $request->header('authorization'))[1];

        try {
            JWT::decode($token, new Key(config('app.jwt-secret'), 'HS256'));
        } catch (ExpiredException $exception) {
            response()->json(['error' => $exception->getMessage()], 401)->send();
        }
    }
}
