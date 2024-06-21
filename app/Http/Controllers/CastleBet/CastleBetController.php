<?php

namespace App\Http\Controllers\CastleBet;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CastleBetController extends Controller
{
    public function index(){
        return Inertia::render('CastleBet/CastleBetSite');
    }
}
