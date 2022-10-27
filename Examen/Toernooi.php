<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Toernooi extends Model
{
    protected $fillable = [
        'title',
        'date_time',
        'registration_price',
        'number_of_players',
        'number_of_available_places'
    ];
}
