<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Operadora extends Model
{
    protected $fillable = [
        'nome', 'codigo', 'categoria',
    ];
}
